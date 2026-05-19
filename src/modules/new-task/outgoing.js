export const outgoingFields = [
  {
    key: "tenant_full_name",
    label: "Tenant full name",
    placeholder: "Example: John Smith",
    type: "text",
  },
  {
    key: "landlord_full_name",
    label: "Landlord full name",
    placeholder: "Example: Michael Brown",
    type: "text",
  },
  {
    key: "vacate_date",
    label: "Vacate date",
    placeholder: "Example: 31/05/2026",
    type: "text",
  },
  {
    key: "bond_amount",
    label: "Bond amount",
    placeholder: "Example: $2600",
    type: "text",
  },
];

export const outgoingStatusSteps = [
  {
    id: "inspection_comparison_completed",
    title: "Compare ingoing and outgoing report",
    prompt: "Compare the ingoing and outgoing reports, then define any damage, rent arrears, unpaid water bills, keys, and garden items.",
    emailTemplateKey: "inspection_comparison",
  },
  {
    id: "landlord_bond_claim_confirmed",
    title: "Landlord confirmed bond claim amount",
    prompt: "Send the outgoing findings to the landlord and ask them to confirm the final bond claim amount before contacting the tenant.",
    emailTemplateKey: "landlord_bond_claim_confirmation",
  },
  {
    id: "tenant_final_decision_sent",
    title: "Tenant final decision sent",
    prompt: "Send the final decision to the tenant after the landlord confirms the bond claim amount.",
    emailTemplateKey: "tenant_final_decision",
  },
];

export const outgoingEmailTemplates = {
  inspection_comparison: {
    recipientLabel: "Internal checklist",
    title: "Outgoing Report Review - [property address]",
    description: "Internal checklist for comparing ingoing and outgoing reports before bond claim confirmation.",
    body: `Please complete the outgoing comparison for [property address].

Tenant: [tenant full name]
Vacate date: [vacate date]
Bond amount: [bond amount]

Compare the Ingoing Report and Outgoing Report, then fill in the items below:

1. Damage
[define any damage]

2. Rent arrears
[define any rent arrear]

3. Unpaid water bills
[define any unpaid water bills]

4. Keys
[define keys issue / keys returned]

5. Garden
[define garden condition / garden work required]

After this review is completed, prepare the landlord email to confirm the final bond claim amount.`,
  },
  landlord_bond_claim_confirmation: {
    recipientLabel: "Landlord",
    title: "Outgoing Inspection and Bond Claim Confirmation - [property address]",
    description: "Ask the landlord to confirm the outgoing findings and claim bond amount.",
    body: `Hi [landlord full name],

Good day, I hope my email finds you well.

The tenant, [tenant full name], has vacated [property address] on [vacate date]. We have compared the Ingoing Report and Outgoing Report and noted the following items for your review:

- Damage: [define any damage]
- Rent arrears: [define any rent arrear]
- Unpaid water bills: [define any unpaid water bills]
- Keys: [define keys issue / keys returned]
- Garden: [define garden condition / garden work required]

The total bond held is [bond amount].

Please confirm the bond claim amount you would like us to proceed with:

Bond claim amount: [claim bond amount]

Once we receive your confirmation, we will send the final decision to the tenant and proceed with the bond refund / claim process accordingly.

Thank you.`,
  },
  tenant_final_decision: {
    recipientLabel: "Tenant",
    title: "Final Bond Decision - [property address]",
    description: "Send the final outgoing decision to tenant after landlord confirmation.",
    body: `Dear [tenant full name],

We are writing regarding the final outgoing inspection and bond for [property address].

After comparing the Ingoing Report and Outgoing Report and receiving the landlord's confirmation, the final decision is as follows:

- Damage: [define any damage]
- Rent arrears: [define any rent arrear]
- Unpaid water bills: [define any unpaid water bills]
- Keys: [define keys issue / keys returned]
- Garden: [define garden condition / garden work required]

Total bond held: [bond amount]
Bond claim amount: [claim bond amount]
Bond refund amount: [bond refund amount]

Please review the above and let us know if you have any questions.

Thank you.`,
  },
};
