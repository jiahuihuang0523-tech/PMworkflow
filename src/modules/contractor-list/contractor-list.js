import { contractorTypes } from './contractor-types.js';

export function createContractorListModule({
  state,
  elements,
  renderTasks,
  renderEmailTemplatePanel,
  saveContractors,
  saveRecords,
  createId,
  escapeHtml,
}) {
  function renderContractorLists() {
    const selectedType = contractorTypes.find((type) => type.id === state.selectedContractorTypeId);
    elements.workspaceTitle.textContent = selectedType ? selectedType.name + " Contractors" : "Contractor Lists";
    elements.boardTitle.textContent = selectedType ? selectedType.name + " Contractors" : "Contractor Lists";
    elements.deletePropertyBtn.classList.remove("is-visible");
    elements.sortSelect.hidden = true;
    elements.taskSearchBox.hidden = true;
    elements.taskList.innerHTML = "";
    elements.appShell.classList.remove("has-email-panel");
    elements.emailTemplatePanel.hidden = true;
  
    if (selectedType) {
      renderContractorDetail(selectedType);
      return;
    }
  
    const wrapper = document.createElement("div");
    wrapper.className = "contractor-grid";
  
    contractorTypes.forEach((type) => {
      const contractors = state.contractors[type.id] || [];
      const panel = document.createElement("section");
      panel.className = "contractor-panel";
      panel.innerHTML = `
        <button class="contractor-panel-header" type="button">
          <span class="contractor-image contractor-image-${type.id}" aria-hidden="true">
            <span>${escapeHtml(type.initials)}</span>
          </span>
          <span class="contractor-card-copy">
            <strong>${escapeHtml(type.name)}</strong>
            <small>${escapeHtml(type.note)}</small>
            <em>${contractors.length} contacts</em>
          </span>
        </button>
      `;
  
      panel.querySelector(".contractor-panel-header").addEventListener("click", () => {
        state.selectedContractorTypeId = type.id;
        renderContractorLists();
      });
  
      wrapper.appendChild(panel);
    });
  
    elements.taskList.appendChild(wrapper);
  }
  
  function renderContractorDetail(type) {
    const contractors = state.contractors[type.id] || [];
    const detail = document.createElement("section");
    detail.className = "contractor-detail-view";
    detail.innerHTML = `
      <button class="secondary-btn contractor-back-btn" type="button">Back to contractor types</button>
      <div class="contractor-detail-hero">
        <span class="contractor-image contractor-image-${type.id}" aria-hidden="true">
          <span>${escapeHtml(type.initials)}</span>
        </span>
        <div>
          <p class="eyebrow">Contractor Type</p>
          <h3>${escapeHtml(type.name)}</h3>
          <p>${escapeHtml(type.note)}</p>
        </div>
      </div>
    `;
  
    detail.querySelector(".contractor-back-btn").addEventListener("click", () => {
      state.selectedContractorTypeId = null;
      renderContractorLists();
    });
  
    const body = document.createElement("div");
    body.className = "contractor-panel-body";
  
    if (!contractors.length) {
      body.innerHTML = '<div class="empty-state">No contractors added yet</div>';
    } else {
      const list = document.createElement("div");
      list.className = "contractor-contact-list";
      contractors.forEach((contractor) => {
        const card = document.createElement("article");
        card.className = "contractor-contact-card";
        card.innerHTML = `
          <strong>${escapeHtml(contractor.name)}</strong>
          <span>Phone: ${escapeHtml(contractor.phone)}</span>
          <span>Email: ${escapeHtml(contractor.email)}</span>
        `;
        list.appendChild(card);
      });
      body.appendChild(list);
    }
  
    const form = document.createElement("form");
    form.className = "contractor-add-form";
    form.innerHTML = `
      <strong>Add new contractor</strong>
      <div class="contractor-form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" placeholder="Example: ${escapeHtml(type.name)} contractor" required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" placeholder="Example: 0400 000 000" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" placeholder="Example: contact@example.com" required />
        </label>
      </div>
      <button class="primary-btn" type="submit">Add contractor</button>
    `;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const contractor = {
        id: createId(),
        name: String(formData.get("name") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        createdAt: new Date().toISOString(),
      };
  
      if (!contractor.name || !contractor.phone || !contractor.email) {
        return;
      }
  
      state.contractors[type.id] = [...(state.contractors[type.id] || []), contractor];
      saveContractors();
      form.reset();
      renderContractorLists();
    });
  
    body.appendChild(form);
    detail.appendChild(body);
    elements.taskList.appendChild(detail);
  }
  
  function renderMaintenanceContractorPicker(savedStep) {
    const selectedType = contractorTypes.find((type) => type.id === savedStep.selectedContractorTypeId);
    const panel = document.createElement("div");
    panel.className = "maintenance-contractor-panel";
  
    if (selectedType) {
      const contractors = state.contractors[selectedType.id] || [];
      panel.innerHTML = `
        <button class="maintenance-contractor-back" type="button">
          Back to contractor types
        </button>
        <button class="maintenance-contractor-detail" type="button">
          <span class="contractor-image contractor-image-${selectedType.id}" aria-hidden="true">
            <span>${escapeHtml(selectedType.initials)}</span>
          </span>
          <div>
            <strong>${escapeHtml(selectedType.name)}</strong>
            <small>${escapeHtml(selectedType.note)}</small>
          </div>
        </button>
      `;
  
      const showTypeSelection = () => {
        savedStep.selectedContractorTypeId = null;
        savedStep.updatedAt = new Date().toISOString();
        saveRecords();
        renderTasks();
        renderEmailTemplatePanel();
      };
  
      panel.querySelector(".maintenance-contractor-back").addEventListener("click", showTypeSelection);
      panel.querySelector(".maintenance-contractor-detail").addEventListener("click", showTypeSelection);
  
      const list = document.createElement("div");
      list.className = "maintenance-contractor-contacts";
  
      if (!contractors.length) {
        list.innerHTML = '<div class="empty-state">No contractors added yet</div>';
      } else {
        contractors.forEach((contractor) => {
          const card = document.createElement("article");
          card.className = "contractor-contact-card";
          card.innerHTML = `
            <strong>${escapeHtml(contractor.name)}</strong>
            <span>Phone: ${escapeHtml(contractor.phone)}</span>
            <span>Email: ${escapeHtml(contractor.email)}</span>
          `;
          list.appendChild(card);
        });
      }
  
      panel.appendChild(list);
      return panel;
    }
  
    const grid = document.createElement("div");
    grid.className = "maintenance-contractor-grid";
  
    contractorTypes.forEach((type) => {
      const contractors = state.contractors[type.id] || [];
      const button = document.createElement("button");
      button.className = "maintenance-contractor-option";
      button.type = "button";
      button.innerHTML = `
        <span class="contractor-image contractor-image-${type.id}" aria-hidden="true">
          <span>${escapeHtml(type.initials)}</span>
        </span>
        <span>
          <strong>${escapeHtml(type.name)}</strong>
          <small>${contractors.length} contacts</small>
        </span>
      `;
      button.addEventListener("click", () => {
        savedStep.selectedContractorTypeId = type.id;
        savedStep.updatedAt = new Date().toISOString();
        saveRecords();
        renderTasks();
        renderEmailTemplatePanel();
      });
      grid.appendChild(button);
    });
  
    panel.appendChild(grid);
    return panel;
  }

  return {
    renderContractorLists,
    renderMaintenanceContractorPicker,
  };
}
