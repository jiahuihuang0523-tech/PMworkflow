export const maintenanceStatusSteps = [
  {
    id: "tenant_details_requested",
    title: "Request detailed information from tenant",
    prompt: "Ask the tenant for clear photos, videos, access notes, and a short description of the maintenance issue.",
  },
  {
    id: "contractor_selected",
    title: "Select contractor",
    prompt: "Choose the relevant contractor type, then review saved contractor contact details before arranging a quote.",
    actionType: "contractor-picker",
  },
  {
    id: "landlord_quote_sent",
    title: "Landlord quote approval",
    prompt: "Email the landlord with the contractor quote and ask whether they prefer to use their own handyman.",
  },
  {
    id: "tenant_result_sent",
    title: "Tenant informed of result",
    prompt: "Email the tenant with the landlord's decision, approved repair plan, contractor attendance details, or next steps.",
  },
];
