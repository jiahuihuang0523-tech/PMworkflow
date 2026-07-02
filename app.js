import {
  categories,
  breakLeaseFields,
  transferLeaseFields,
  leaseRenewalFields,
  moveInFields,
  outgoingFields,
  lettingOnlyFields,
  breakLeaseStatusSteps,
  maintenanceStatusSteps,
  leaseRenewalStatusSteps,
  moveInStatusSteps,
  outgoingStatusSteps,
  lettingOnlyStatusSteps,
  transferLeaseFinalFields,
  transferLeaseStatusSteps,
  finalWaterCalculationFields,
  breakLeaseCalculationFields,
  breakLeaseEmailTemplates,
  leaseRenewalEmailTemplates,
  transferLeaseEmailTemplates,
  moveInEmailTemplates,
  outgoingEmailTemplates,
  lettingOnlyEmailTemplates,
} from './src/modules/new-task/index.js';
import { contractorTypes } from './src/modules/contractor-list/contractor-types.js';
import { createContractorListModule } from './src/modules/contractor-list/contractor-list.js';
import { createNewTaskModule } from './src/modules/new-task/task-form.js';

const storageKey = "property-manager-daily-tasks";
const contractorStorageKey = "property-manager-contractors";
const defaultCreatedBy = "Property Manager";
const state = {
  activeView: "tasks",
  taskListMode: "active",
  selectedCategory: null,
  selectedAddress: "all",
  searchQuery: "",
  taskSearchQuery: "",
  sort: "newest",
  expandedTaskId: null,
  expandedContractorTypeId: null,
  selectedContractorTypeId: null,
  selectedTaskId: null,
  selectedEmailTaskId: null,
  selectedEmailStepId: null,
  records: loadRecords(),
  contractors: loadContractors(),
};

const elements = {
  activeCount: document.querySelector("#activeCount"),
  doneCount: document.querySelector("#doneCount"),
  activeStatBtn: document.querySelector("#activeStatBtn"),
  archivedStatBtn: document.querySelector("#archivedStatBtn"),
  propertyList: document.querySelector("#propertyList"),
  propertySearch: document.querySelector("#propertySearch"),
  contractorListBtn: document.querySelector("#contractorListBtn"),
  appShell: document.querySelector(".app-shell"),
  workspaceTitle: document.querySelector("#workspaceTitle"),
  newTaskBtn: document.querySelector("#newTaskBtn"),
  stepOne: document.querySelector("#stepOne"),
  stepTwo: document.querySelector("#stepTwo"),
  categoryGrid: document.querySelector("#categoryGrid"),
  taskForm: document.querySelector("#taskForm"),
  addressField: document.querySelector("#addressField"),
  addressInput: document.querySelector("#addressInput"),
  dynamicFields: document.querySelector("#dynamicFields"),
  issueField: document.querySelector("#issueField"),
  issueInput: document.querySelector("#issueInput"),
  stepTwoTitle: document.querySelector("#stepTwoTitle"),
  backToCategoryBtn: document.querySelector("#backToCategoryBtn"),
  boardTitle: document.querySelector("#boardTitle"),
  taskSearchBox: document.querySelector("#taskSearchBox"),
  taskSearchInput: document.querySelector("#taskSearchInput"),
  deletePropertyBtn: document.querySelector("#deletePropertyBtn"),
  taskList: document.querySelector("#taskList"),
  taskDetailPanel: document.querySelector("#taskDetailPanel"),
  emailTemplatePanel: document.querySelector("#emailTemplatePanel"),
  closeEmailTemplateBtn: document.querySelector("#closeEmailTemplateBtn"),
  emailTemplateTitle: document.querySelector("#emailTemplateTitle"),
  emailTemplateHint: document.querySelector("#emailTemplateHint"),
  emailTemplateContent: document.querySelector("#emailTemplateContent"),
  sortSelect: document.querySelector("#sortSelect"),
  categoryTemplate: document.querySelector("#categoryTemplate"),
  taskTemplate: document.querySelector("#taskTemplate"),
};

const { renderCategories, renderTaskForm, buildTaskPayload } = createNewTaskModule({
  state,
  elements,
  showStep,
  createBreakLeaseProgress,
  createMaintenanceProgress,
  createMoveInProgress,
  createOutgoingProgress,
  createLeaseRenewalProgress,
  createLettingOnlyProgress,
  createTransferLeaseProgress,
  isDailyTask,
  getDailyWorkDateLabel,
});

const { renderContractorLists, renderMaintenanceContractorPicker } = createContractorListModule({
  state,
  elements,
  renderTasks,
  renderEmailTemplatePanel,
  saveContractors,
  saveRecords,
  createId,
  escapeHtml,
});

renderCategories();
render();
loadRecordsFromDatabase();
setInterval(loadRecordsFromDatabase, 5000);

window.addEventListener("storage", (event) => {
  if (event.key !== storageKey) return;

  state.records = loadRecords();
  syncRecordsToDatabase();
  render();
});

elements.activeStatBtn.addEventListener("click", () => {
  state.activeView = "tasks";
  state.taskListMode = "active";
  state.selectedAddress = "all";
  state.selectedContractorTypeId = null;
  state.selectedCategory = null;
  state.expandedTaskId = null;
  state.selectedTaskId = null;
  state.selectedEmailTaskId = null;
  state.selectedEmailStepId = null;
  elements.taskForm.reset();
  showStep("closed");
  render();
});

elements.archivedStatBtn.addEventListener("click", () => {
  state.activeView = "tasks";
  state.taskListMode = "archived";
  state.selectedAddress = "all";
  state.selectedContractorTypeId = null;
  state.selectedCategory = null;
  state.expandedTaskId = null;
  state.selectedTaskId = null;
  state.selectedEmailTaskId = null;
  state.selectedEmailStepId = null;
  elements.taskForm.reset();
  showStep("closed");
  render();
});

elements.propertySearch.addEventListener("input", (event) => {
  state.searchQuery = event.target.value.trim().toLowerCase();
  renderProperties();
});

elements.taskSearchInput.addEventListener("input", (event) => {
  state.taskSearchQuery = event.target.value.trim().toLowerCase();
  renderTasks();
});

elements.contractorListBtn.addEventListener("click", () => {
  state.activeView = "contractors";
  state.selectedAddress = "all";
  state.selectedCategory = null;
  state.expandedTaskId = null;
  state.selectedContractorTypeId = null;
  state.selectedTaskId = null;
  state.selectedEmailTaskId = null;
  state.selectedEmailStepId = null;
  elements.taskForm.reset();
  showStep("closed");
  render();
});

elements.newTaskBtn.addEventListener("click", () => {
  state.activeView = "tasks";
  state.taskListMode = "active";
  state.selectedAddress = "all";
  state.selectedContractorTypeId = null;
  state.selectedCategory = null;
  state.expandedTaskId = null;
  state.selectedTaskId = null;
  state.selectedEmailTaskId = null;
  state.selectedEmailStepId = null;
  state.taskSearchQuery = "";
  elements.taskSearchInput.value = "";
  elements.taskForm.reset();
  renderTaskForm();
  renderTasks();
  renderEmailTemplatePanel();
  showStep("category");
  elements.workspaceTitle.textContent = "New To-Do";
});

elements.backToCategoryBtn.addEventListener("click", () => {
  showStep("category");
});

elements.sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  if (state.activeView === "contractors") {
    renderContractorLists();
    return;
  }
  renderTasks();
});

elements.closeEmailTemplateBtn.addEventListener("click", () => {
  state.selectedEmailTaskId = null;
  state.selectedEmailStepId = null;
  renderTasks();
  renderEmailTemplatePanel();
});

elements.deletePropertyBtn.addEventListener("click", () => {
  if (state.selectedAddress === "all") return;

  const selectedRecord = state.records.find((record) => record.address === state.selectedAddress);
  if (!selectedRecord) return;

  const shouldDelete = confirm(
    `Delete this property and all history?\n\n${selectedRecord.address}`,
  );
  if (!shouldDelete) return;

  state.records = state.records.filter((record) => record !== selectedRecord);
  state.selectedAddress = "all";
  state.selectedTaskId = null;
  state.selectedEmailTaskId = null;
  state.selectedEmailStepId = null;
  saveRecords();
  render();
});

elements.taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const address = isDailyTask() ? getDailyWorkAddress() : normalizeAddress(elements.addressInput.value);
  const payload = buildTaskPayload(address);

  if (!state.selectedCategory || !address || !payload) return;

  const existingRecord = isDailyTask() ? findRecordByExactAddress(address) : findRecordByAddress(address);
  const task = {
    id: createId(),
    categoryId: state.selectedCategory.id,
    categoryName: state.selectedCategory.name,
    issue: payload.issue,
    details: payload.details,
    breakLeaseProgress: payload.breakLeaseProgress,
    maintenanceProgress: payload.maintenanceProgress,
    transferLeaseProgress: payload.transferLeaseProgress,
    leaseRenewalProgress: payload.leaseRenewalProgress,
    moveInProgress: payload.moveInProgress,
    outgoingProgress: payload.outgoingProgress,
    lettingOnlyProgress: payload.lettingOnlyProgress,
    createdAt: new Date().toISOString(),
    createdBy: defaultCreatedBy,
    completedAt: null,
  };

  if (existingRecord) {
    existingRecord.addressKey = existingRecord.addressKey || createAddressKey(existingRecord.address);
    existingRecord.tasks.unshift(task);
    state.selectedAddress = existingRecord.address;
  } else {
    state.records.unshift({
      address,
      addressKey: createAddressKey(address),
      tasks: [task],
    });
    state.selectedAddress = address;
  }

  state.selectedTaskId = task.id;
  elements.taskForm.reset();
  state.selectedCategory = null;
  renderTaskForm();
  showStep("closed");
  saveRecords();
  render();
});

function render() {
  renderCounts();
  renderProperties();
  if (state.activeView === "contractors") {
    if (elements.taskDetailPanel) {
      elements.taskDetailPanel.innerHTML =
        '<div class="empty-state">Select a contractor type above to view contacts.</div>';
    }
    renderContractorLists();
    renderEmailTemplatePanel();
    return;
  }
  renderTasks();
  renderEmailTemplatePanel();
}

function renderCounts() {
  elements.activeCount.textContent = getTasks(false).length;
  elements.doneCount.textContent = getTasks(true).length;
}

function renderProperties() {
  elements.propertyList.innerHTML = "";

  if (!state.records.length) {
    elements.propertyList.innerHTML = `<div class="empty-state">No property records yet</div>`;
    return;
  }

  const visibleRecords = state.records.filter((record) => {
    const addressKey = record.addressKey || createAddressKey(record.address);
    const searchKey = createAddressKey(state.searchQuery);
    return (
      record.address.toLowerCase().includes(state.searchQuery) ||
      addressKey.includes(searchKey)
    );
  });

  if (!visibleRecords.length) {
    elements.propertyList.innerHTML = `<div class="empty-state">No matching property</div>`;
    return;
  }

  visibleRecords.forEach((record) => {
    const active = record.tasks.filter((task) => !task.completedAt).length;
    const done = record.tasks.length - active;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `property-item${state.selectedAddress === record.address ? " is-selected" : ""}`;
    button.innerHTML = `
      <strong>${escapeHtml(record.address)}</strong>
      <span>${active} Active - ${done} Archived</span>
    `;

    button.addEventListener("click", () => {
      state.activeView = "tasks";
      state.taskListMode = "property";
      state.selectedContractorTypeId = null;
      state.selectedAddress = record.address;
      state.selectedTaskId = null;
      state.selectedEmailTaskId = null;
      state.selectedEmailStepId = null;
      showStep("closed");
      render();
    });

    elements.propertyList.appendChild(button);
  });
}

function renderTasks() {
  elements.workspaceTitle.textContent = "Daily Property Tasks";
  elements.sortSelect.hidden = false;
  if (elements.taskDetailPanel) {
    elements.taskDetailPanel.innerHTML = "";
  }
  const showingArchivedHistory =
    state.selectedAddress === "all" && state.taskListMode === "archived";
  let tasksToShow = showingArchivedHistory
    ? getVisibleTasks(true)
    : state.selectedAddress === "all"
      ? getVisibleTasks(false)
      : getSelectedPropertyHistory();
  tasksToShow = filterTasksByKeyword(tasksToShow);
  elements.taskList.innerHTML = "";
  elements.boardTitle.textContent = showingArchivedHistory
    ? "All archived history"
    : state.selectedAddress === "all"
      ? "All active tasks"
      : state.selectedAddress + " - History";
  elements.deletePropertyBtn.classList.toggle("is-visible", state.selectedAddress !== "all");
  elements.taskSearchBox.hidden = !showingArchivedHistory;
  elements.activeStatBtn.classList.toggle("is-active", state.selectedAddress === "all" && state.taskListMode === "active");
  elements.archivedStatBtn.classList.toggle("is-active", showingArchivedHistory);

  if (!tasksToShow.length) {
    const message = showingArchivedHistory
      ? "No archived history found"
      : state.selectedAddress === "all"
        ? "No active tasks right now"
        : "No history for this property yet";
    elements.taskList.innerHTML = '<div class="empty-state">' + message + '</div>';
    renderTaskDetail(null);
    return;
  }

  const sortedTasks = sortTasks(tasksToShow);
  if (!sortedTasks.some(({ task }) => task.id === state.selectedTaskId)) {
    state.selectedTaskId = sortedTasks[0].task.id;
  }

  sortedTasks.forEach(({ record, task }) => {
    const category = categories.find((item) => item.id === task.categoryId);
    const isCompleted = Boolean(task.completedAt);
    const progressConfig = getProgressConfig(task);
    const summary = getTaskProgressSummary(task, progressConfig);
    const node = document.createElement("button");
    node.type = "button";
    node.className = `task-summary-card${task.id === state.selectedTaskId ? " is-selected" : ""}${isCompleted ? " is-completed" : ""}`;
    node.style.borderLeftColor = category?.color || "#0f766e";
    node.innerHTML = `
      <span class="task-summary-main">
        <span class="task-category">${escapeHtml(isCompleted ? task.categoryName + " - Archived" : task.categoryName + " - Active")}</span>
        <strong>${escapeHtml(record.address)}</strong>
        <span class="task-summary-issue">${escapeHtml(getTaskSnippet(task.issue))}</span>
        <small>${escapeHtml(formatDate(task.createdAt))}${isCompleted ? " - Completed " + escapeHtml(formatDate(task.completedAt)) : ""}</small>
      </span>
      <span class="task-summary-progress">${summary.total ? summary.completed + "/" + summary.total : "Details"}</span>
    `;
    node.addEventListener("click", () => {
      state.selectedTaskId = task.id;
      if (progressConfig) {
        selectFirstWorkflowStep(task, progressConfig);
      } else {
        state.selectedEmailTaskId = null;
        state.selectedEmailStepId = null;
      }
      renderTasks();
      renderEmailTemplatePanel();
    });
    elements.taskList.appendChild(node);
  });

  const selectedPair = sortedTasks.find(({ task }) => task.id === state.selectedTaskId);
  renderTaskDetail(selectedPair);
}

function renderTaskDetail(pair) {
  if (!elements.taskDetailPanel) return;

  elements.taskDetailPanel.innerHTML = "";

  if (!pair) {
    elements.taskDetailPanel.innerHTML = '<div class="empty-state">Select a task above to view progress details</div>';
    return;
  }

  const { record, task } = pair;
  elements.taskDetailPanel.appendChild(renderTaskDetailCard(record, task));
}

function renderTaskDetailCard(record, task) {
  const category = categories.find((item) => item.id === task.categoryId);
  const node = elements.taskTemplate.content.firstElementChild.cloneNode(true);
  const isCompleted = Boolean(task.completedAt);
  const progressConfig = getProgressConfig(task);
  const hasProgressPanel = Boolean(progressConfig) || getCustomProgress(task).length > 0;

  node.classList.add("task-detail-card");
  node.classList.toggle("is-completed", isCompleted);
  node.classList.toggle("has-progress-panel", true);
  node.style.borderLeftColor = category?.color || "#0f766e";
  node.querySelector(".task-category").textContent = isCompleted
    ? task.categoryName + " - Archived"
    : task.categoryName + " - Active";
  node.querySelector("h4").textContent = record.address;
  node.querySelector("p").textContent = task.issue + "\nCreated: " + formatDate(task.createdAt) +
    (isCompleted ? "\nCompleted: " + formatDate(task.completedAt) : "");
  node.querySelector(".task-created-by").textContent = "Created by " + (task.createdBy || defaultCreatedBy);

  const finishControl = node.querySelector(".finish-control");

  if (isCompleted) {
    finishControl.innerHTML = '<span class="archived-status">Archived</span><button class="reopen-btn" type="button">Reopen</button>';
    finishControl.querySelector(".reopen-btn").addEventListener("click", () => {
      task.completedAt = null;
      state.selectedTaskId = task.id;
      saveRecords();
      render();
    });
  } else {
    finishControl.innerHTML =
      '<label class="finish-check"><input type="checkbox" /><span>Finish task</span></label>';
    finishControl.querySelector(".finish-check input").addEventListener("change", () => {
      task.completedAt = new Date().toISOString();
      state.selectedTaskId = task.id;
      state.expandedTaskId = null;
      state.selectedEmailTaskId = null;
      state.selectedEmailStepId = null;
      saveRecords();
      render();
      renderEmailTemplatePanel();
    });
  }

  if (progressConfig && !state.selectedEmailTaskId && !state.selectedEmailStepId) {
    selectFirstWorkflowStep(task, progressConfig);
  }

  if (hasProgressPanel || !isCompleted) {
    node.appendChild(renderWorkflowProgressPanel(task, progressConfig));
  }

  return node;
}

function filterTasksByKeyword(tasks) {
  if (!(state.selectedAddress === "all" && state.taskListMode === "archived")) {
    return tasks;
  }

  const keyword = state.taskSearchQuery;
  if (!keyword) {
    return tasks;
  }

  return tasks.filter(({ record, task }) => {
    const searchableText = [
      record.address,
      task.categoryName,
      task.issue,
      task.createdBy,
      task.createdAt ? formatDate(task.createdAt) : "",
      task.completedAt ? formatDate(task.completedAt) : "",
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(keyword);
  });
}

function getTaskSnippet(text) {
  const normalizedText = String(text || "").replace(/\s+/g, " ").trim();
  if (normalizedText.length <= 92) {
    return normalizedText || "No details added";
  }
  return normalizedText.slice(0, 89) + "...";
}

function renderWorkflowProgressPanel(task, progressConfig) {
  const panel = document.createElement("div");
  panel.className = "progress-panel";

  if (progressConfig) {
    progressConfig.ensure(task);
  }

  progressConfig?.steps.forEach((step, index) => {
    const savedStep = progressConfig.getStep(task, step.id);
    const item = document.createElement("section");
    const hasEmailTemplate = Boolean(
      step.emailTemplateKey && progressConfig.templates[step.emailTemplateKey],
    );
    const isSelected =
      state.selectedEmailTaskId === task.id && state.selectedEmailStepId === step.id;
    item.className = `progress-step${savedStep.completed ? " is-done" : ""}${
      isSelected ? " is-selected" : ""
    }`;
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.setAttribute(
      "aria-label",
      `${hasEmailTemplate ? "View email template" : "View workflow step"}: ${step.title}`,
    );

    const checkboxId = `${task.id}-${step.id}`;
    item.innerHTML = `
      <div class="progress-check">
        <input id="${escapeHtml(checkboxId)}" type="checkbox" aria-label="Mark step complete: ${escapeHtml(step.title)}" ${savedStep.completed ? "checked" : ""} />
        <span>
          <strong>${index + 1}. ${escapeHtml(step.title)}</strong>
          <small>${escapeHtml(step.prompt)}</small>
        </span>
      </div>
      <label class="progress-notes">
        <span>Additional notes</span>
        <textarea rows="3" placeholder="Record communication outcomes, dates, or handover notes for this step...">${escapeHtml(savedStep.notes || "")}</textarea>
      </label>
    `;

    item.addEventListener("click", (event) => {
      const interactiveElement = event.target.closest("input, textarea, button, select");
      if (interactiveElement) return;
      selectWorkflowStep(task.id, step.id);
    });

    item.addEventListener("keydown", (event) => {
      const interactiveElement = event.target.closest("input, textarea, button, select");
      if (interactiveElement) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectWorkflowStep(task.id, step.id);
    });

    item.querySelector("input").addEventListener("change", (event) => {
      savedStep.completed = event.target.checked;
      savedStep.updatedAt = new Date().toISOString();
      state.selectedEmailTaskId = task.id;
      state.selectedEmailStepId = step.id;
      saveRecords();
      renderTasks();
      renderEmailTemplatePanel();
    });

    item.querySelector("textarea").addEventListener("input", (event) => {
      savedStep.notes = event.target.value;
      savedStep.updatedAt = new Date().toISOString();
      saveRecords();
    });

    panel.appendChild(item);

    if (step.actionType === "calculation" && isSelected) {
      panel.appendChild(renderBreakLeaseCalculationPanel(task, savedStep));
    }

    if (step.actionType === "contractor-picker" && isSelected) {
      panel.appendChild(renderMaintenanceContractorPicker(savedStep));
    }

    if (step.actionType === "transfer-final-details" && isSelected) {
      panel.appendChild(renderTransferLeaseFinalDetailsPanel(task, savedStep));
    }
  });

  getCustomProgress(task).forEach((step, index) => {
    panel.appendChild(renderCustomProgressStep(task, step, (progressConfig?.steps.length || 0) + index + 1));
  });

  panel.appendChild(renderAddProgressForm(task));

  return panel;
}

function renderCustomProgressStep(task, step, index) {
  const item = document.createElement("section");
  item.className = `progress-step custom-progress-step${step.completed ? " is-done" : ""}`;

  const checkboxId = `${task.id}-${step.id}`;
  item.innerHTML = `
    <div class="progress-check">
      <input id="${escapeHtml(checkboxId)}" type="checkbox" aria-label="Mark progress complete: ${escapeHtml(step.title)}" ${step.completed ? "checked" : ""} />
      <span>
        <strong>${index}. ${escapeHtml(step.title)}</strong>
        <small>Custom progress</small>
      </span>
    </div>
    <label class="progress-notes">
      <span>Additional notes</span>
      <textarea rows="3" placeholder="Record communication outcomes, dates, or handover notes for this progress...">${escapeHtml(step.notes || "")}</textarea>
    </label>
  `;

  item.querySelector("input").addEventListener("change", (event) => {
    step.completed = event.target.checked;
    step.updatedAt = new Date().toISOString();
    saveRecords();
    renderTasks();
    renderEmailTemplatePanel();
  });

  item.querySelector("textarea").addEventListener("input", (event) => {
    step.notes = event.target.value;
    step.updatedAt = new Date().toISOString();
    saveRecords();
  });

  return item;
}

function renderAddProgressForm(task) {
  const form = document.createElement("form");
  form.className = "progress-add-form";
  form.innerHTML = `
    <input name="progressTitle" type="text" placeholder="Add progress..." aria-label="Add progress" />
    <button class="progress-add-btn" type="submit">Add progress</button>
  `;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.elements.progressTitle;
    if (addCustomProgress(task, input.value)) {
      render();
      return;
    }
    input.focus();
  });

  return form;
}

function selectWorkflowStep(taskId, stepId) {
  state.selectedEmailTaskId = taskId;
  state.selectedEmailStepId = stepId;
  renderTasks();
  renderEmailTemplatePanel();
}

function selectFirstWorkflowStep(task, progressConfig) {
  const firstStepWithTemplate = progressConfig.steps.find(
    (step) => step.emailTemplateKey && progressConfig.templates[step.emailTemplateKey],
  );

  state.selectedEmailTaskId = firstStepWithTemplate ? task.id : null;
  state.selectedEmailStepId = firstStepWithTemplate?.id || null;
}

function renderBreakLeaseProgressPanel(task) {
  const panel = document.createElement("div");
  panel.className = "progress-panel";

  breakLeaseStatusSteps.forEach((step, index) => {
    const savedStep = getBreakLeaseStep(task, step.id);
    const item = document.createElement("section");
    const isSelected =
      state.selectedEmailTaskId === task.id && state.selectedEmailStepId === step.id;
    item.className = `progress-step${savedStep.completed ? " is-done" : ""}${
      isSelected ? " is-selected" : ""
    }`;
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", `View email template: ${step.title}`);

    const checkboxId = `${task.id}-${step.id}`;
    item.innerHTML = `
      <label class="progress-check" for="${escapeHtml(checkboxId)}">
        <input id="${escapeHtml(checkboxId)}" type="checkbox" ${savedStep.completed ? "checked" : ""} />
        <span>
          <strong>${index + 1}. ${escapeHtml(step.title)}</strong>
          <small>${escapeHtml(step.prompt)}</small>
        </span>
      </label>
      <label class="progress-notes">
        <span>Additional notes</span>
        <textarea rows="3" placeholder="Record communication outcomes, dates, or handover notes for this step...">${escapeHtml(savedStep.notes || "")}</textarea>
      </label>
    `;

    item.addEventListener("click", (event) => {
      const interactiveElement = event.target.closest("input, textarea, button, select");
      if (interactiveElement) {
        return;
      }
      selectBreakLeaseStep(task.id, step.id);
    });

    item.addEventListener("keydown", (event) => {
      const interactiveElement = event.target.closest("input, textarea, button, select");
      if (interactiveElement) return;
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      event.preventDefault();
      selectBreakLeaseStep(task.id, step.id);
    });

    item.querySelector("input").addEventListener("change", (event) => {
      savedStep.completed = event.target.checked;
      savedStep.updatedAt = new Date().toISOString();
      state.selectedEmailTaskId = task.id;
      state.selectedEmailStepId = step.id;
      saveRecords();
      renderTasks();
      renderEmailTemplatePanel();
    });

    item.querySelector("textarea").addEventListener("input", (event) => {
      savedStep.notes = event.target.value;
      savedStep.updatedAt = new Date().toISOString();
      saveRecords();
    });

    panel.appendChild(item);

    if (step.actionType === "calculation" && isSelected) {
      panel.appendChild(renderBreakLeaseCalculationPanel(task, savedStep));
    }
  });

  return panel;
}

function selectBreakLeaseStep(taskId, stepId) {
  state.selectedEmailTaskId = taskId;
  state.selectedEmailStepId = stepId;
  renderTasks();
  renderEmailTemplatePanel();
}

function renderBreakLeaseCalculationPanel(task, savedStep) {
  const panel = document.createElement("form");
  panel.className = "calculation-panel";
  panel.noValidate = true;

  const values = {
    ...getCalculationDefaults(task),
    ...(savedStep.calculationInput || {}),
  };

  panel.innerHTML = `
    <div class="calculation-header">
      <div>
        <strong>Break lease fee calculation</strong>
        <span>Calculate the final water bill first, then calculate the break lease fee.</span>
      </div>
    </div>
    <div class="calculation-section">
      <h5>Final water bill</h5>
      <div class="calculation-grid">
        ${finalWaterCalculationFields.map((field) => renderCalculationInput(field, values[field.key])).join("")}
      </div>
    </div>
    <div class="calculation-section">
      <h5>Break lease fee</h5>
      <div class="calculation-grid">
        ${renderCalculationInput(
          {
            key: "break_lease_date",
            label: "Break lease date",
            placeholder: "Example: 31/05/2026",
          },
          values.break_lease_date,
        )}
        ${breakLeaseCalculationFields.map((field) => renderCalculationInput(field, values[field.key])).join("")}
        ${renderCalculationInput(
          {
            key: "tenant_full_name",
            label: "Tenant full name",
            placeholder: "Example: John Smith",
          },
          values.tenant_full_name,
        )}
        ${renderCalculationInput(
          {
            key: "property_address",
            label: "Property address",
            placeholder: "Example: 1 Example Street, Adelaide SA 5000",
          },
          values.property_address,
        )}
      </div>
    </div>
    <div class="calculation-actions">
      <button class="primary-btn" type="submit">Calculate break lease fee</button>
    </div>
    <div class="calculation-result" ${savedStep.calculationResult ? "" : "hidden"}>
      ${savedStep.calculationResult ? renderCalculationResult(savedStep.calculationResult) : ""}
    </div>
  `;

  panel.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  panel.addEventListener("input", () => {
    savedStep.calculationInput = getCalculationFormValues(panel);
    savedStep.updatedAt = new Date().toISOString();
    saveRecords();
  });

  panel.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = getCalculationFormValues(panel);
    const result = calculateBreakLeaseFee(input);
    const resultNode = panel.querySelector(".calculation-result");

    if (result.error) {
      resultNode.hidden = false;
      resultNode.innerHTML = `<div class="calculation-error">${escapeHtml(result.error)}</div>`;
      return;
    }

    savedStep.calculationInput = input;
    savedStep.calculationResult = result;
    savedStep.completed = true;
    savedStep.updatedAt = new Date().toISOString();
    state.selectedEmailTaskId = task.id;
    state.selectedEmailStepId = savedStep.id;
    saveRecords();
    renderTasks();
    renderEmailTemplatePanel();
  });

  return panel;
}

function renderTransferLeaseFinalDetailsPanel(task, savedStep) {
  const panel = document.createElement("form");
  panel.className = "calculation-panel";
  panel.noValidate = true;

  const values = {
    ...(savedStep.finalDetails || {}),
  };

  panel.innerHTML = `
    <div class="calculation-header">
      <div>
        <strong>Final transfer information</strong>
        <span>Save these details to complete the incoming tenant confirmation template.</span>
      </div>
    </div>
    <div class="calculation-section">
      <div class="calculation-grid">
        ${transferLeaseFinalFields.map((field) => renderCalculationInput(field, values[field.key])).join("")}
      </div>
    </div>
    <div class="calculation-actions">
      <button class="primary-btn" type="submit">Save final details</button>
    </div>
  `;

  panel.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  panel.addEventListener("input", () => {
    savedStep.finalDetails = getCalculationFormValues(panel);
    savedStep.updatedAt = new Date().toISOString();
    saveRecords();
    renderEmailTemplatePanel();
  });

  panel.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = getCalculationFormValues(panel);
    const hasAllValues = transferLeaseFinalFields.every((field) => input[field.key]);
    if (!hasAllValues) {
      return;
    }

    savedStep.finalDetails = input;
    savedStep.completed = true;
    savedStep.updatedAt = new Date().toISOString();
    state.selectedEmailTaskId = task.id;
    state.selectedEmailStepId = savedStep.id;
    saveRecords();
    renderTasks();
    renderEmailTemplatePanel();
  });

  return panel;
}

function renderCalculationInput(field, value = "") {
  return `
    <label>
      <span>${escapeHtml(field.label)}</span>
      <input name="${escapeHtml(field.key)}" type="text" value="${escapeHtml(value || "")}" placeholder="${escapeHtml(field.placeholder)}" required />
    </label>
  `;
}

function getCalculationDefaults(task) {
  const details = task.details || {};
  return {
    break_lease_date: details.break_lease_date || "",
    tenant_lease_end_date: details.break_lease_date || "",
    tenant_full_name: details.tenant_full_name || "",
    property_address: details.property_address || "",
  };
}

function getCalculationFormValues(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function calculateBreakLeaseFee(input) {
  try {
    const waterUsagePeriod = parseDatePeriod(input.latest_paid_water_usage_period);
    const supplyChargePeriod = parseDatePeriod(input.latest_paid_supply_charge_period);
    const tenantLeaseEndDate = parseDate(input.tenant_lease_end_date);
    const breakLeaseDate = parseDate(input.break_lease_date);
    const rentPaidToDate = parseDate(input.tenant_rent_paid_to_date);
    const newTenantStartDate = parseDate(input.new_tenant_lease_start_date);
    const originalLeaseStartDate = parseDate(input.tenant_original_lease_start_date);
    const originalLeaseEndDate = parseDate(input.tenant_original_lease_end_date);

    const latestPaidWaterUsageAmount = parseCurrency(input.latest_paid_water_usage_amount);
    const latestPaidSupplyChargeAmount = parseCurrency(input.latest_paid_supply_charge_amount);
    const rentAmount = parseCurrency(input.rent_amount);
    const advertisingFee = parseCurrency(input.advertising_fee);
    const newRentAmount = parseCurrency(input.new_rent_amount);

    const waterUsagePeriodDays = daysBetweenInclusive(
      waterUsagePeriod.start,
      waterUsagePeriod.end,
    );
    const supplyChargePeriodDays = daysBetweenInclusive(
      supplyChargePeriod.start,
      supplyChargePeriod.end,
    );
    const waterUsageDaysToLeaseEnd = daysAfterPaidEndToLeaseEnd(
      waterUsagePeriod.end,
      tenantLeaseEndDate,
    );
    const supplyChargeDaysToLeaseEnd = daysAfterPaidEndToLeaseEnd(
      supplyChargePeriod.end,
      tenantLeaseEndDate,
    );
    const waterUsageDailyRate = latestPaidWaterUsageAmount / waterUsagePeriodDays;
    const supplyChargeDailyRate = latestPaidSupplyChargeAmount / supplyChargePeriodDays;
    const finalWaterUsageBill = waterUsageDailyRate * waterUsageDaysToLeaseEnd;
    const finalSupplyChargeBill = supplyChargeDailyRate * supplyChargeDaysToLeaseEnd;
    const finalWaterBillTotal = finalWaterUsageBill + finalSupplyChargeBill;

    const totalTenancyWeeks =
      daysBetweenInclusive(originalLeaseStartDate, originalLeaseEndDate) / 7;
    const threeQuarterTenancyWeeks = (totalTenancyWeeks * 3) / 4;
    const timeToEndWhenReletWeeks =
      daysBetweenInclusive(newTenantStartDate, originalLeaseEndDate) / 7;
    const twoWeeksRentPlusGst = rentAmount * 2 * 1.1;
    const relettingFeeBeforeApportionment =
      twoWeeksRentPlusGst * timeToEndWhenReletWeeks;
    const relettingFeeApportioned =
      relettingFeeBeforeApportionment / threeQuarterTenancyWeeks;
    const advertisingFeeApportioned =
      (advertisingFee * timeToEndWhenReletWeeks) / threeQuarterTenancyWeeks;
    const lossOfRentDays = getVacantLossOfRentDays(rentPaidToDate, newTenantStartDate);
    const lossOfRent = Math.min((lossOfRentDays * rentAmount) / 7, rentAmount * 4);
    const rentDifference = newRentAmount - rentAmount;
    const rentDifferenceOffset = timeToEndWhenReletWeeks * rentDifference;
    const offsetFee = Math.max(
      relettingFeeApportioned + advertisingFeeApportioned - rentDifferenceOffset,
      0,
    );
    const finalBreakLeaseFee = offsetFee + lossOfRent + finalWaterBillTotal;

    return {
      breakLeaseDate: formatInputDate(breakLeaseDate),
      waterUsageDaysToLeaseEnd,
      supplyChargeDaysToLeaseEnd,
      lossOfRentDays,
      finalWaterUsageBill,
      finalSupplyChargeBill,
      finalWaterBillTotal,
      totalTenancyWeeks,
      threeQuarterTenancyWeeks,
      timeToEndWhenReletWeeks,
      twoWeeksRentPlusGst,
      relettingFeeBeforeApportionment,
      relettingFeeApportioned,
      advertisingFeeApportioned,
      lossOfRent,
      rentDifference,
      rentDifferenceOffset,
      offsetFee,
      finalBreakLeaseFee,
      summary: [
        `Final water usage: ${formatCurrency(finalWaterUsageBill)} (${waterUsageDaysToLeaseEnd} days)`,
        `Final supply charge: ${formatCurrency(finalSupplyChargeBill)} (${supplyChargeDaysToLeaseEnd} days)`,
        `Final water bill / credit: ${formatCurrency(finalWaterBillTotal)}`,
        `Reletting fee: ${formatCurrency(relettingFeeApportioned)}`,
        `Advertising fee: ${formatCurrency(advertisingFeeApportioned)}`,
        `Loss of rent: ${formatCurrency(lossOfRent)} (${lossOfRentDays} days)`,
        `Rent difference offset applied: ${formatCurrency(-rentDifferenceOffset)}`,
        `Total break lease fee: ${formatCurrency(finalBreakLeaseFee)}`,
      ],
    };
  } catch (error) {
    return {
      error: error.message || "Please check the date and amount formats, then calculate again.",
    };
  }
}

function renderCalculationResult(result) {
  return `
    <strong>Calculation result</strong>
    <ul>
      ${result.summary.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
    </ul>
  `;
}

function parseDatePeriod(value) {
  const [startValue, endValue] = String(value || "").split(/\s*-\s*/);
  if (!startValue || !endValue) {
    throw new Error("Enter the water period as DD/MM/YYYY - DD/MM/YYYY.");
  }

  return {
    start: parseDate(startValue),
    end: parseDate(endValue),
  };
}

function parseDate(value) {
  const match = String(value || "").trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!match) {
    throw new Error("Enter dates as DD/MM/YYYY.");
  }

  const [, day, month, year] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  if (
    date.getFullYear() !== Number(year) ||
    date.getMonth() !== Number(month) - 1 ||
    date.getDate() !== Number(day)
  ) {
    throw new Error("Please check that the date is valid.");
  }

  return date;
}

function parseCurrency(value) {
  const normalizedValue = String(value || "").replace(/[$,\s]/g, "");
  if (!normalizedValue) {
    throw new Error("Please complete all amount fields.");
  }

  const amount = Number(normalizedValue);
  if (!Number.isFinite(amount)) {
    throw new Error("Please check the amount format.");
  }
  return amount;
}

function parseCurrencyFromText(value) {
  const match = String(value || "").replace(/,/g, "").match(/-?\d+(?:\.\d+)?/);
  if (!match) {
    throw new Error("Please check the amount format.");
  }
  return Number(match[0]);
}

function daysBetweenInclusive(startDate, endDate) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const start = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const end = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
  const days = Math.round((end - start) / millisecondsPerDay) + 1;
  if (days <= 0) {
    throw new Error("The end date must be later than the start date.");
  }
  return days;
}

function daysAfterPaidEndToLeaseEnd(paidEndDate, leaseEndDate) {
  return daysBetweenCalendarDates(paidEndDate, leaseEndDate);
}

function getVacantLossOfRentDays(rentPaidToDate, newTenantStartDate) {
  return Math.max(daysBetweenCalendarDates(rentPaidToDate, newTenantStartDate) - 1, 0);
}

function daysBetweenCalendarDates(startDate, endDate) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const start = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const end = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
  return Math.round((end - start) / millisecondsPerDay);
}

function formatCurrency(value) {
  const roundedValue = roundMoney(value);
  const sign = roundedValue < 0 ? "-" : "";
  return `${sign}$${Math.abs(roundedValue).toFixed(2)}`;
}

function formatCurrencyInput(value) {
  if (!String(value || "").trim()) {
    return "";
  }
  return formatCurrency(parseCurrency(value));
}

function formatCurrencyFromResult(value) {
  return Number.isFinite(value) ? formatCurrency(value) : "";
}

function formatWeeks(value) {
  return Number.isFinite(value) ? `${value.toFixed(2)} weeks` : "";
}

function roundMoney(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function formatInputDate(date) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function renderEmailTemplatePanel() {
  const selectedTask = findTaskById(state.selectedEmailTaskId);
  const progressConfig = selectedTask ? getProgressConfig(selectedTask) : null;
  const selectedStep = progressConfig?.steps.find((step) => step.id === state.selectedEmailStepId);

  elements.appShell.classList.add("has-email-panel");
  elements.emailTemplatePanel.hidden = false;

  if (!selectedTask || !selectedStep || !progressConfig) {
    elements.emailTemplateTitle.textContent = "Workflow guide";
    elements.emailTemplateHint.textContent =
      "Select a task progress step to show email templates, action notes, or future training instructions here.";
    elements.emailTemplateContent.innerHTML =
      '<div class="empty-state">Instructions and templates will appear here.</div>';
    return;
  }

  const template = progressConfig.templates[selectedStep.emailTemplateKey];
  if (!template) {
    elements.emailTemplateTitle.textContent = selectedStep.title;
    elements.emailTemplateHint.textContent = selectedStep.prompt;
    elements.emailTemplateContent.innerHTML =
      '<div class="empty-state">No email template for this step yet. Use this area for internal instructions or future tutorial notes.</div>';
    return;
  }

  const templateValues = progressConfig.getTemplateValues(selectedTask, selectedStep);
  const filledTitle = fillTemplatePlaceholders(template.title, templateValues);
  const filledBody = fillTemplatePlaceholders(template.body, templateValues);

  elements.emailTemplateTitle.textContent = selectedStep.title;
  elements.emailTemplateHint.textContent = template.description;
  elements.emailTemplateContent.innerHTML =
    '<div class="template-meta">' +
      '<span>Recipient: ' + escapeHtml(template.recipientLabel) + '</span>' +
      '<span>Subject: ' + escapeHtml(filledTitle) + '</span>' +
    '</div>' +
    '<label class="template-field">' +
      '<span>Email title</span>' +
      '<input type="text" value="' + escapeHtml(filledTitle) + '" readonly />' +
    '</label>' +
    '<label class="template-field">' +
      '<span>Email body</span>' +
      '<textarea rows="24" readonly>' + escapeHtml(filledBody) + '</textarea>' +
    '</label>';
}
function getBreakLeaseTemplateValues(task, step) {
  const details = task.details || {};
  const savedStep = step?.actionType === "calculation"
    ? getBreakLeaseStep(task, step.id)
    : null;
  const calculationInput = savedStep?.calculationInput || {};
  const calculationResult = savedStep?.calculationResult || {};

  return {
    "[Tenant full name]": details.tenant_full_name || "",
    "[tenant full name]": details.tenant_full_name || "",
    "[Tenant name]": calculationInput.tenant_full_name || details.tenant_full_name || "",
    "[landlord full name]": details.landlord_full_name || "",
    "[property address]": calculationInput.property_address || details.property_address || "",
    "[break lease date]": details.break_lease_date || "",
    "[Break lease date]": calculationInput.break_lease_date || details.break_lease_date || "",
    "[reason for breaking the lease]": details.reason_for_breaking_lease || "",
    "[New tenant Lease start date]": calculationInput.new_tenant_lease_start_date || "",
    "[Tenant original lease end date]": calculationInput.tenant_original_lease_end_date || "",
    "[Rent amount]": formatCurrencyInput(calculationInput.rent_amount),
    "[Rent amount*2*1.1]": formatCurrencyFromResult(calculationResult.twoWeeksRentPlusGst),
    "[Tenant original lease start & end date]": [
      calculationInput.tenant_original_lease_start_date,
      calculationInput.tenant_original_lease_end_date,
    ]
      .filter(Boolean)
      .join(" - "),
    "[3/4date]": formatWeeks(calculationResult.threeQuarterTenancyWeeks),
    "[reletdate]": formatWeeks(calculationResult.timeToEndWhenReletWeeks),
    "[reletfee1]": formatCurrencyFromResult(calculationResult.relettingFeeBeforeApportionment),
    "[reletfee2]": formatCurrencyFromResult(calculationResult.relettingFeeApportioned),
    "[advertising fee]": formatCurrencyInput(calculationInput.advertising_fee),
    "[adfee]": formatCurrencyFromResult(calculationResult.advertisingFeeApportioned),
    "[Tenant rent paid to date]": calculationInput.tenant_rent_paid_to_date || "",
    "[lossrent]": formatCurrencyFromResult(calculationResult.lossOfRent),
    "[new rent amount]": formatCurrencyInput(calculationInput.new_rent_amount),
    "[rentdiff]": formatCurrencyFromResult(calculationResult.rentDifference),
    "[rentdiff1]": formatCurrencyFromResult(calculationResult.rentDifferenceOffset),
    "[last water bill amount]": formatCurrencyFromResult(calculationResult.finalWaterBillTotal),
    "[offsetfee]": formatCurrencyFromResult(calculationResult.offsetFee),
    "[finalfee]": formatCurrencyFromResult(calculationResult.finalBreakLeaseFee),
  };
}

function getMoveInTemplateValues(task) {
  const details = task.details || {};
  const rentPerWeek = safeFormatCurrencyInput(details.rent_per_week);
  const bondAmount = safeFormatCurrencyInput(details.bond_amount);
  const twoWeeksRent = safeCalculateTwoWeeksRent(details.rent_per_week);
  return {
    "[tenant full name]": details.tenant_full_name || "",
    "[Property address]": details.property_address || "",
    "[Property Address]": details.property_address || "",
    "[lease start date]": details.lease_start_date || "",
    "[rent per week]": rentPerWeek,
    "[lease period]": details.lease_period || "",
    "[2*rent per week]": twoWeeksRent,
    "[bond amount]": bondAmount,
  };
}

function getOutgoingTemplateValues(task) {
  const details = task.details || {};

  return {
    "[tenant full name]": details.tenant_full_name || "",
    "[landlord full name]": details.landlord_full_name || "",
    "[property address]": details.property_address || "",
    "[vacate date]": details.vacate_date || "",
    "[bond amount]": safeFormatCurrencyInput(details.bond_amount),
    "[define any damage]": "[define any damage]",
    "[define any rent arrear]": "[define any rent arrear]",
    "[define any unpaid water bills]": "[define any unpaid water bills]",
    "[define keys issue / keys returned]": "[define keys issue / keys returned]",
    "[define garden condition / garden work required]": "[define garden condition / garden work required]",
    "[claim bond amount]": "[claim bond amount]",
    "[bond refund amount]": "[bond refund amount]",
  };
}

function getTransferLeaseTemplateValues(task) {
  const details = task.details || {};
  const finalDetails = getTransferLeaseStep(task, "final_transfer_details_collected")?.finalDetails || {};

  return {
    "[Old Tenant Name]": details.old_tenant_name || "",
    "[Property Address]": details.property_address || "",
    "[Property address]": details.property_address || "",
    "[address of property]": details.property_address || "",
    "[New Tenant]": finalDetails.new_tenant_name || "",
    "[lease transfer date]": finalDetails.lease_transfer_date || "",
    "[rent amount]": finalDetails.rent_amount || "",
  };
}

function getLeaseRenewalTemplateValues(task) {
  const details = task.details || {};

  return {
    "[Property address]": details.property_address || "",
    "[Tenant name]": details.tenant_name || "",
    "[enter lease end date]": details.lease_end_date || "",
    "[new rent amount:]": details.new_rent_amount || "",
  };
}

function getLettingOnlyTemplateValues(task) {
  const details = task.details || {};
  const weeklyRent = safeFormatCurrencyInput(details.weekly_rent_amount);

  return {
    "[property address]": details.property_address || "",
    "[Property address]": details.property_address || "",
    "[Tenant name]": details.tenant_name || "",
    "[lease start date]": details.lease_start_date || "",
    "[weekly rent amount]": weeklyRent,
    "[lease term]": details.lease_term || "",
    "[weekly rent amount*2]": safeCalculateTwoWeeksRent(details.weekly_rent_amount),
    "[bond amount]": safeFormatCurrencyInput(details.bond_amount),
    "[owner's bank name]": details.owner_bank_name || "",
    "[owner's name]": details.owner_name || "",
    "[owner's BSB ]": details.owner_bsb || "",
    "[owner's Account Number ]": details.owner_account_number || "",
  };
}


function safeFormatCurrencyInput(value) {
  try {
    return formatCurrencyInput(value);
  } catch {
    return value || "";
  }
}

function safeCalculateTwoWeeksRent(value) {
  try {
    return formatCurrency(parseCurrencyFromText(value) * 2);
  } catch {
    return "";
  }
}

function fillTemplatePlaceholders(template, replacements) {
  return Object.entries(replacements).reduce(
    (body, [placeholder, value]) => body.replaceAll(placeholder, value),
    template,
  );
}

function findTaskById(taskId) {
  if (!taskId) return null;

  for (const record of state.records) {
    const task = record.tasks.find((item) => item.id === taskId);
    if (task) {
      return task;
    }
  }

  return null;
}

function isBreakLeaseTask(task) {
  return task.categoryId === "break-lease";
}

function isMaintenanceTask(task) {
  return task.categoryId === "maintenance";
}

function isTransferLeaseTask(task) {
  return task.categoryId === "transfer-lease";
}

function isLeaseRenewalTask(task) {
  return task.categoryId === "lease-renewal";
}

function isMoveInTask(task) {
  return task.categoryId === "move-in";
}

function isOutgoingTask(task) {
  return task.categoryId === "outgoing";
}

function isLettingOnlyTask(task) {
  return task.categoryId === "letting-only";
}

function getProgressConfig(task) {
  if (isMaintenanceTask(task)) {
    return {
      steps: maintenanceStatusSteps,
      templates: {},
      ensure: ensureMaintenanceProgress,
      progress: (item) => item.maintenanceProgress,
      getStep: getMaintenanceStep,
      getTemplateValues: () => ({}),
    };
  }

  if (isBreakLeaseTask(task)) {
    return {
      steps: breakLeaseStatusSteps,
      templates: breakLeaseEmailTemplates,
      ensure: ensureBreakLeaseProgress,
      progress: (item) => item.breakLeaseProgress,
      getStep: getBreakLeaseStep,
      getTemplateValues: getBreakLeaseTemplateValues,
    };
  }

  if (isMoveInTask(task)) {
    return {
      steps: moveInStatusSteps,
      templates: moveInEmailTemplates,
      ensure: ensureMoveInProgress,
      progress: (item) => item.moveInProgress,
      getStep: getMoveInStep,
      getTemplateValues: getMoveInTemplateValues,
    };
  }

  if (isOutgoingTask(task)) {
    return {
      steps: outgoingStatusSteps,
      templates: outgoingEmailTemplates,
      ensure: ensureOutgoingProgress,
      progress: (item) => item.outgoingProgress,
      getStep: getOutgoingStep,
      getTemplateValues: getOutgoingTemplateValues,
    };
  }

  if (isLeaseRenewalTask(task)) {
    return {
      steps: leaseRenewalStatusSteps,
      templates: leaseRenewalEmailTemplates,
      ensure: ensureLeaseRenewalProgress,
      progress: (item) => item.leaseRenewalProgress,
      getStep: getLeaseRenewalStep,
      getTemplateValues: getLeaseRenewalTemplateValues,
    };
  }

  if (isLettingOnlyTask(task)) {
    return {
      steps: lettingOnlyStatusSteps,
      templates: lettingOnlyEmailTemplates,
      ensure: ensureLettingOnlyProgress,
      progress: (item) => item.lettingOnlyProgress,
      getStep: getLettingOnlyStep,
      getTemplateValues: getLettingOnlyTemplateValues,
    };
  }

  if (isTransferLeaseTask(task)) {
    return {
      steps: transferLeaseStatusSteps,
      templates: transferLeaseEmailTemplates,
      ensure: ensureTransferLeaseProgress,
      progress: (item) => item.transferLeaseProgress,
      getStep: getTransferLeaseStep,
      getTemplateValues: getTransferLeaseTemplateValues,
    };
  }

  return null;
}

function getTaskProgressSummary(task, progressConfig) {
  if (progressConfig) {
    progressConfig.ensure(task);
  }

  const workflowSteps = progressConfig ? progressConfig.progress(task) : [];
  const customSteps = getCustomProgress(task);
  const allSteps = [...workflowSteps, ...customSteps];

  return {
    completed: allSteps.filter((step) => step.completed).length,
    total: allSteps.length,
  };
}

function getCustomProgress(task) {
  if (!Array.isArray(task.customProgress)) {
    task.customProgress = [];
  }

  return task.customProgress;
}

function addCustomProgress(task, title) {
  const normalizedTitle = title?.trim();

  if (!normalizedTitle) {
    return false;
  }

  getCustomProgress(task).push({
    id: createId(),
    title: normalizedTitle,
    completed: false,
    notes: "",
    updatedAt: new Date().toISOString(),
  });
  state.expandedTaskId = task.id;
  state.selectedEmailTaskId = null;
  state.selectedEmailStepId = null;
  saveRecords();

  return true;
}

function ensureMaintenanceProgress(task) {
  if (!Array.isArray(task.maintenanceProgress)) {
    task.maintenanceProgress = createMaintenanceProgress();
  }

  maintenanceStatusSteps.forEach((step) => {
    if (!task.maintenanceProgress.some((savedStep) => savedStep.id === step.id)) {
      task.maintenanceProgress.push({
        id: step.id,
        completed: false,
        notes: "",
        updatedAt: null,
      });
    }
  });
}

function createMaintenanceProgress() {
  return maintenanceStatusSteps.map((step) => ({
    id: step.id,
    completed: false,
    notes: "",
    updatedAt: null,
  }));
}

function getMaintenanceStep(task, stepId) {
  ensureMaintenanceProgress(task);
  return task.maintenanceProgress.find((step) => step.id === stepId);
}

function ensureBreakLeaseProgress(task) {
  if (!Array.isArray(task.breakLeaseProgress)) {
    task.breakLeaseProgress = createBreakLeaseProgress();
  }

  breakLeaseStatusSteps.forEach((step) => {
    if (!task.breakLeaseProgress.some((savedStep) => savedStep.id === step.id)) {
      task.breakLeaseProgress.push({
        id: step.id,
        completed: false,
        notes: "",
        updatedAt: null,
      });
    }
  });
}

function createBreakLeaseProgress() {
  return breakLeaseStatusSteps.map((step) => ({
    id: step.id,
    completed: false,
    notes: "",
    updatedAt: null,
  }));
}

function getBreakLeaseStep(task, stepId) {
  ensureBreakLeaseProgress(task);
  return task.breakLeaseProgress.find((step) => step.id === stepId);
}

function ensureTransferLeaseProgress(task) {
  if (!Array.isArray(task.transferLeaseProgress)) {
    task.transferLeaseProgress = createTransferLeaseProgress();
  }

  transferLeaseStatusSteps.forEach((step) => {
    if (!task.transferLeaseProgress.some((savedStep) => savedStep.id === step.id)) {
      task.transferLeaseProgress.push({
        id: step.id,
        completed: false,
        notes: "",
        updatedAt: null,
      });
    }
  });
}

function createTransferLeaseProgress() {
  return transferLeaseStatusSteps.map((step) => ({
    id: step.id,
    completed: false,
    notes: "",
    updatedAt: null,
  }));
}

function getTransferLeaseStep(task, stepId) {
  ensureTransferLeaseProgress(task);
  return task.transferLeaseProgress.find((step) => step.id === stepId);
}

function ensureLeaseRenewalProgress(task) {
  if (!Array.isArray(task.leaseRenewalProgress)) {
    task.leaseRenewalProgress = createLeaseRenewalProgress();
  }

  leaseRenewalStatusSteps.forEach((step) => {
    if (!task.leaseRenewalProgress.some((savedStep) => savedStep.id === step.id)) {
      task.leaseRenewalProgress.push({
        id: step.id,
        completed: false,
        notes: "",
        updatedAt: null,
      });
    }
  });
}

function createLeaseRenewalProgress() {
  return leaseRenewalStatusSteps.map((step) => ({
    id: step.id,
    completed: false,
    notes: "",
    updatedAt: null,
  }));
}

function getLeaseRenewalStep(task, stepId) {
  ensureLeaseRenewalProgress(task);
  return task.leaseRenewalProgress.find((step) => step.id === stepId);
}

function ensureLettingOnlyProgress(task) {
  if (!Array.isArray(task.lettingOnlyProgress)) {
    task.lettingOnlyProgress = createLettingOnlyProgress();
  }

  lettingOnlyStatusSteps.forEach((step) => {
    if (!task.lettingOnlyProgress.some((savedStep) => savedStep.id === step.id)) {
      task.lettingOnlyProgress.push({
        id: step.id,
        completed: false,
        notes: "",
        updatedAt: null,
      });
    }
  });
}

function createLettingOnlyProgress() {
  return lettingOnlyStatusSteps.map((step) => ({
    id: step.id,
    completed: false,
    notes: "",
    updatedAt: null,
  }));
}

function getLettingOnlyStep(task, stepId) {
  ensureLettingOnlyProgress(task);
  return task.lettingOnlyProgress.find((step) => step.id === stepId);
}

function ensureMoveInProgress(task) {
  if (!Array.isArray(task.moveInProgress)) {
    task.moveInProgress = createMoveInProgress();
  }

  moveInStatusSteps.forEach((step) => {
    if (!task.moveInProgress.some((savedStep) => savedStep.id === step.id)) {
      task.moveInProgress.push({
        id: step.id,
        completed: false,
        notes: "",
        updatedAt: null,
      });
    }
  });
}

function createMoveInProgress() {
  return moveInStatusSteps.map((step) => ({
    id: step.id,
    completed: false,
    notes: "",
    updatedAt: null,
  }));
}

function getMoveInStep(task, stepId) {
  ensureMoveInProgress(task);
  return task.moveInProgress.find((step) => step.id === stepId);
}

function ensureOutgoingProgress(task) {
  if (!Array.isArray(task.outgoingProgress)) {
    task.outgoingProgress = createOutgoingProgress();
  }

  outgoingStatusSteps.forEach((step) => {
    if (!task.outgoingProgress.some((savedStep) => savedStep.id === step.id)) {
      task.outgoingProgress.push({
        id: step.id,
        completed: false,
        notes: "",
        updatedAt: null,
      });
    }
  });
}

function createOutgoingProgress() {
  return outgoingStatusSteps.map((step) => ({
    id: step.id,
    completed: false,
    notes: "",
    updatedAt: null,
  }));
}

function getOutgoingStep(task, stepId) {
  ensureOutgoingProgress(task);
  return task.outgoingProgress.find((step) => step.id === stepId);
}

function showStep(step) {
  elements.stepOne.classList.toggle("is-active", step === "category");
  elements.stepTwo.classList.toggle("is-active", step === "details");
}

function getVisibleTasks(completed) {
  return state.records.flatMap((record) => {
    if (state.selectedAddress !== "all" && record.address !== state.selectedAddress) {
      return [];
    }
    return record.tasks
      .filter((task) => Boolean(task.completedAt) === completed)
      .map((task) => ({ record, task }));
  });
}

function getSelectedPropertyHistory() {
  return state.records.flatMap((record) => {
    if (record.address !== state.selectedAddress) {
      return [];
    }
    return record.tasks.map((task) => ({ record, task }));
  });
}

function getTasks(completed) {
  return state.records.flatMap((record) =>
    record.tasks.filter((task) => Boolean(task.completedAt) === completed),
  );
}

function sortTasks(tasks) {
  return [...tasks].sort((a, b) => {
    if (state.sort === "oldest") {
      return new Date(a.task.createdAt) - new Date(b.task.createdAt);
    }
    if (state.sort === "category") {
      return a.task.categoryName.localeCompare(b.task.categoryName);
    }
    return new Date(b.task.createdAt) - new Date(a.task.createdAt);
  });
}

function normalizeAddress(value) {
  return value.trim().replace(/\s+/g, " ");
}

function findRecordByAddress(address) {
  return state.records.find((record) => addressMatchesRecord(address, record));
}

function findRecordByExactAddress(address) {
  return state.records.find((record) => record.address.toLowerCase() === address.toLowerCase());
}

function isDailyTask() {
  return state.selectedCategory?.id === "daily-task";
}

function getDailyWorkAddress() {
  return `${getDailyWorkDateLabel()} Daily Work`;
}

function getDailyWorkDateLabel() {
  return new Intl.DateTimeFormat("en-AU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date())
    .replace(/\//g, "-");
}

function addressMatchesRecord(address, record) {
  const incomingKey = createAddressKey(address);
  const recordKey = record.addressKey || createAddressKey(record.address);

  if (!incomingKey || !recordKey) {
    return false;
  }

  if (incomingKey === recordKey) {
    return true;
  }

  const incomingTokens = incomingKey.split(" ");
  const recordTokens = recordKey.split(" ");
  const shorter = incomingTokens.length < recordTokens.length ? incomingTokens : recordTokens;
  const longer = incomingTokens.length < recordTokens.length ? recordTokens : incomingTokens;

  if (shorter.length < 3) {
    return false;
  }

  return shorter.every((token, index) => token === longer[index]);
}

function createAddressKey(address) {
  return tokenizeAddress(address).join(" ");
}

function tokenizeAddress(address) {
  const replacements = {
    pl: "place",
    st: "street",
    rd: "road",
    ave: "avenue",
    av: "avenue",
    dr: "drive",
    ct: "court",
    crt: "court",
    cres: "crescent",
    cct: "circuit",
    tce: "terrace",
    hwy: "highway",
    pde: "parade",
    ln: "lane",
    wy: "way",
  };
  const ignoredTokens = new Set([
    "sa",
    "nsw",
    "vic",
    "qld",
    "wa",
    "tas",
    "nt",
    "act",
    "australia",
    "au",
  ]);

  const tokens = address
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[/,.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((token) => replacements[token] || token)
    .filter((token) => !ignoredTokens.has(token));

  return tokens.filter((token, index) => !(/^\d{4}$/.test(token) && index === tokens.length - 1));
}

function loadRecords() {
  try {
    const savedRecords = JSON.parse(localStorage.getItem(storageKey)) || [];
    return savedRecords.map((record) => ({
      ...record,
      addressKey: record.addressKey || createAddressKey(record.address || ""),
      tasks: Array.isArray(record.tasks) ? record.tasks : [],
    }));
  } catch {
    return [];
  }
}

function loadContractors() {
  const fallback = Object.fromEntries(contractorTypes.map((type) => [type.id, []]));

  try {
    const savedContractors = JSON.parse(localStorage.getItem(contractorStorageKey)) || {};
    return contractorTypes.reduce((contractors, type) => {
      contractors[type.id] = Array.isArray(savedContractors[type.id])
        ? savedContractors[type.id]
        : [];
      return contractors;
    }, fallback);
  } catch {
    return fallback;
  }
}

function saveRecords() {
  localStorage.setItem(storageKey, JSON.stringify(state.records));
  syncRecordsToDatabase();
}

function loadRecordsFromDatabase() {
  if (!window.fetch || !window.location.protocol.startsWith("http")) {
    return;
  }

  fetch("/api/records")
    .then((response) => response.ok ? response.json() : null)
    .then((body) => {
      if (!body?.ok || !Array.isArray(body.records)) {
        return;
      }

      const incoming = JSON.stringify(body.records);
      const current = JSON.stringify(state.records);
      if (incoming === current) {
        return;
      }

      state.records = body.records.map((record) => ({
        ...record,
        addressKey: record.addressKey || createAddressKey(record.address || ""),
        tasks: Array.isArray(record.tasks) ? record.tasks : [],
      }));
      localStorage.setItem(storageKey, JSON.stringify(state.records));
      render();
    })
    .catch(() => {
      // Static file mode cannot read the database folder; localhost server mode can.
    });
}

function syncRecordsToDatabase() {
  if (!window.fetch) {
    return;
  }

  fetch("/api/records", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ records: state.records }),
  }).catch(() => {
    // Static file mode cannot write to the database folder; localhost server mode can.
  });
}

function saveContractors() {
  localStorage.setItem(contractorStorageKey, JSON.stringify(state.contractors));
}

function createId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }
  return `task-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-AU", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[char];
  });
}
