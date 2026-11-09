import {
  categories,
  breakLeaseFields,
  transferLeaseFields,
  leaseRenewalFields,
  moveInFields,
  outgoingFields,
  lettingOnlyFields,
} from './index.js';

export function createNewTaskModule({
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
}) {
  function renderCategories() {
    categories.forEach((category) => {
      const node = elements.categoryTemplate.content.firstElementChild.cloneNode(true);
      node.querySelector(".category-icon").textContent = category.icon;
      node.querySelector(".category-icon").style.background = category.color;
      node.querySelector(".category-name").textContent = category.name;
      node.querySelector(".category-note").textContent = category.note;
      node.addEventListener("click", () => {
        state.selectedCategory = category;
        elements.workspaceTitle.textContent = `New ${category.name}`;
        renderTaskForm();
        showStep("details");
        if (category.id === "daily-task") {
          elements.issueInput.focus();
        } else {
          elements.addressInput.focus();
        }
      });
      elements.categoryGrid.appendChild(node);
    });
  }
  
  function renderTaskForm() {
    const isBreakLease = state.selectedCategory?.id === "break-lease";
    const isTransferLease = state.selectedCategory?.id === "transfer-lease";
    const isLeaseRenewal = state.selectedCategory?.id === "lease-renewal";
    const isMoveIn = state.selectedCategory?.id === "move-in";
    const isOutgoing = state.selectedCategory?.id === "outgoing";
    const isLettingOnly = state.selectedCategory?.id === "letting-only";
    const dailyTask = isDailyTask();
  
    elements.stepTwoTitle.textContent = isBreakLease
      ? "Break Lease information"
      : isTransferLease
        ? "Transfer Lease information"
        : isLeaseRenewal
          ? "Lease Renewal information"
          : isMoveIn
            ? "Move In information"
            : isOutgoing
              ? "Outgoing information"
              : isLettingOnly
                ? "Letting Only information"
                : dailyTask
                  ? "Daily Task"
                  : "Address and task details";
    elements.addressField.hidden = dailyTask;
    elements.addressInput.placeholder = "Example: 12 King William St, Adelaide SA";
    elements.addressInput.required = !dailyTask;
    elements.issueField.hidden =
      isBreakLease || isTransferLease || isLeaseRenewal || isMoveIn || isOutgoing || isLettingOnly;
    elements.issueInput.required =
      !isBreakLease && !isTransferLease && !isLeaseRenewal && !isMoveIn && !isOutgoing && !isLettingOnly;
    elements.dynamicFields.innerHTML = "";
  
    if (!isBreakLease && !isTransferLease && !isLeaseRenewal && !isMoveIn && !isOutgoing && !isLettingOnly) {
      return;
    }
  
    const intro = document.createElement("div");
    intro.className = "form-note";
    intro.textContent = isMoveIn
      ? "Collect the required information first. After saving, a Move In progress checklist and tenant email templates will be available."
      : isOutgoing
        ? "Collect the required outgoing information first. After saving, an Outgoing progress checklist and email templates will be available."
      : isTransferLease
        ? "Collect the old tenant name and property address first. After saving, a Transfer Lease progress checklist and email templates will be available."
        : isLeaseRenewal
          ? "Collect the tenant, lease end date, new rent and property address first. After saving, a Lease Renewal progress checklist and tenant email template will be available."
          : isLettingOnly
            ? "Collect the required letting-only information first. After saving, a progress checklist and tenant email template will be available."
            : "Collect the required information first. After saving, a Break Lease progress checklist will be available for tenant / landlord correspondence.";
    elements.dynamicFields.appendChild(intro);
  
    const fields = isMoveIn
      ? moveInFields
      : isOutgoing
        ? outgoingFields
      : isTransferLease
        ? transferLeaseFields
        : isLeaseRenewal
          ? leaseRenewalFields
          : isLettingOnly
            ? lettingOnlyFields
            : breakLeaseFields;
  
    fields.forEach((field) => {
      const label = document.createElement("label");
      const labelText = document.createElement("span");
      labelText.textContent = field.label;
      label.appendChild(labelText);
  
      const input =
        field.type === "textarea" ? document.createElement("textarea") : document.createElement("input");
      input.id = field.key;
      input.name = field.key;
      input.dataset.workflowField = field.key;
      input.placeholder = field.placeholder;
      input.required = true;
  
      if (field.type === "textarea") {
        input.rows = 3;
      } else {
        input.type = field.type;
      }
  
      label.appendChild(input);
      elements.dynamicFields.appendChild(label);
    });
  }
  function buildTaskPayload(address) {
    const categoryId = state.selectedCategory?.id;
  
    if (categoryId === "break-lease") {
      const details = collectWorkflowDetails(address, breakLeaseFields);
      if (!details) return null;
  
      return {
        issue: formatBreakLeaseTask(details),
        details: {
          type: "break_lease_information",
          ...details,
        },
        breakLeaseProgress: createBreakLeaseProgress(),
      };
    }
  
    if (categoryId === "maintenance") {
      const issue = elements.issueInput.value.trim();
      return issue
        ? {
            issue,
            details: {
              type: "maintenance_information",
              property_address: address,
              issue,
            },
            maintenanceProgress: createMaintenanceProgress(),
          }
        : null;
    }
  
    if (categoryId === "move-in") {
      const details = collectWorkflowDetails(address, moveInFields);
      if (!details) return null;
  
      return {
        issue: formatMoveInTask(details),
        details: {
          type: "move_in_information",
          ...details,
        },
        moveInProgress: createMoveInProgress(),
      };
    }

    if (categoryId === "outgoing") {
      const details = collectWorkflowDetails(address, outgoingFields);
      if (!details) return null;
  
      return {
        issue: formatOutgoingTask(details),
        details: {
          type: "outgoing_information",
          ...details,
        },
        outgoingProgress: createOutgoingProgress(),
      };
    }
  
    if (categoryId === "lease-renewal") {
      const details = collectWorkflowDetails(address, leaseRenewalFields);
      if (!details) return null;
  
      return {
        issue: formatLeaseRenewalTask(details),
        details: {
          type: "lease_renewal_information",
          ...details,
        },
        leaseRenewalProgress: createLeaseRenewalProgress(),
      };
    }
  
    if (categoryId === "letting-only") {
      const details = collectWorkflowDetails(address, lettingOnlyFields);
      if (!details) return null;
  
      return {
        issue: formatLettingOnlyTask(details),
        details: {
          type: "letting_only_information",
          ...details,
        },
        lettingOnlyProgress: createLettingOnlyProgress(),
      };
    }
  
    if (categoryId === "transfer-lease") {
      const details = collectWorkflowDetails(address, transferLeaseFields);
      if (!details) return null;
  
      return {
        issue: formatTransferLeaseTask(details),
        details: {
          type: "transfer_lease_information",
          ...details,
        },
        transferLeaseProgress: createTransferLeaseProgress(),
      };
    }
  
    const issue = elements.issueInput.value.trim();
    return issue
      ? {
          issue,
          details: isDailyTask()
            ? {
                type: "daily_task",
                daily_work_date: getDailyWorkDateLabel(),
                archive_name: address,
              }
            : null,
        }
      : null;
  }
  
  function collectWorkflowDetails(address, fields) {
    const details = {
      property_address: address,
    };
  
    for (const field of fields) {
      const input = elements.taskForm.elements[field.key];
      const value = input?.value.trim() || "";
      if (!value) {
        input?.focus();
        return null;
      }
      details[field.key] = value;
    }
  
    return details;
  }
  function formatBreakLeaseTask(details) {
    return [
      "Break Lease Information",
      `Tenant full name: ${details.tenant_full_name}`,
      `Landlord full name: ${details.landlord_full_name}`,
      `Break lease date / move-out date: ${details.break_lease_date}`,
      `Reason for breaking the lease: ${details.reason_for_breaking_lease}`,
      `Property address: ${details.property_address}`,
      "",
      "Next correspondence sequence:",
      "1. Initial CBS break lease information email to tenant",
      "2. Landlord notification email",
      "3. Tenant follow-up email after landlord notification",
      "4. Break lease fee calculation",
    ].join("\n");
  }
  
  function formatMoveInTask(details) {
    return [
      "Move In Information",
      `Tenant full name: ${details.tenant_full_name}`,
      `Rent per week: ${details.rent_per_week}`,
      `Bond amount: ${details.bond_amount}`,
      `Lease start date: ${details.lease_start_date}`,
      `Lease period: ${details.lease_period}`,
      `Property address: ${details.property_address}`,
      "",
      "Next correspondence sequence:",
      "1. Application acceptance email",
      "2. Keys collection follow-up email",
    ].join("\n");
  }

  function formatOutgoingTask(details) {
    return [
      "Outgoing Information",
      `Tenant full name: ${details.tenant_full_name}`,
      `Landlord full name: ${details.landlord_full_name}`,
      `Vacate date: ${details.vacate_date}`,
      `Bond amount: ${details.bond_amount}`,
      `Property address: ${details.property_address}`,
      "",
      "Next correspondence sequence:",
      "1. Compare Ingoing and Outgoing report and define damage, rent arrears, unpaid water bills, keys, and garden",
      "2. Send to landlord to confirm claim bond amount",
      "3. Send final decision to tenant",
    ].join("\n");
  }
  
  function formatTransferLeaseTask(details) {
    return [
      "Transfer Lease Information",
      `Old tenant name: ${details.old_tenant_name}`,
      `Property address: ${details.property_address}`,
      "",
      "Next correspondence sequence:",
      "1. Application requirements email with Tenant Application Form",
      "2. Lease transfer terms after landlord approval",
      "3. Bond transfer form email after all tenants agree",
      "4. Final transfer details collection",
      "5. Incoming tenant confirmation email",
    ].join("\n");
  }
  
  function formatLettingOnlyTask(details) {
    return [
      "Letting Only Information",
      `Tenant name: ${details.tenant_name}`,
      `Lease start date: ${details.lease_start_date}`,
      `Lease term: ${details.lease_term}`,
      `Weekly rent amount: ${details.weekly_rent_amount}`,
      `Bond amount: ${details.bond_amount}`,
      `Owner's name: ${details.owner_name}`,
      `Owner's bank name: ${details.owner_bank_name}`,
      `Owner's BSB: ${details.owner_bsb}`,
      `Owner's account number: ${details.owner_account_number}`,
      `Property address: ${details.property_address}`,
      "",
      "Next correspondence sequence:",
      "1. Confirm required letting-only information",
      "2. Letting-only congratulations email to tenant",
    ].join("\n");
  }
  
  function formatLeaseRenewalTask(details) {
    return [
      "Lease Renewal Information",
      `Tenant name: ${details.tenant_name}`,
      `Lease end date: ${details.lease_end_date}`,
      `New rent amount: ${details.new_rent_amount}`,
      `Property address: ${details.property_address}`,
      "",
      "Next correspondence sequence:",
      "1. Lease renewal email to tenant",
    ].join("\n");
  }

  return {
    renderCategories,
    renderTaskForm,
    buildTaskPayload,
  };
}
