export const transferLeaseFields = [
  {
    key: "old_tenant_name",
    label: "Old tenant name",
    placeholder: "Example: John Smith",
    type: "text",
  },
];

export const transferLeaseFinalFields = [
  {
    key: "new_tenant_name",
    label: "New tenant name",
    placeholder: "Example: Jane Smith",
  },
  {
    key: "lease_transfer_date",
    label: "Lease transfer date",
    placeholder: "Example: 01/06/2026",
  },
  {
    key: "rent_amount",
    label: "Rent amount",
    placeholder: "Example: $650 per week",
  },
];

export const transferLeaseStatusSteps = [
  {
    id: "application_requirements_sent",
    title: "Application requirements email",
    prompt: "Send the Tenant Application Form and request incoming tenant application documents before landlord review.",
    emailTemplateKey: "application_requirements",
  },
  {
    id: "approval_terms_sent",
    title: "Lease transfer terms after landlord approval",
    prompt: "After landlord approval, email all tenants and attach the drafted transfer lease agreement, original tenancy agreement, and ingoing inspection report.",
    emailTemplateKey: "approval_terms",
  },
  {
    id: "bond_transfer_sent",
    title: "Bond transfer form email",
    prompt: "Only send after all tenants reply 'YES, I AGREE'. Attach the Bond Transfer Form and Identification Example.",
    emailTemplateKey: "bond_transfer",
  },
  {
    id: "final_transfer_details_collected",
    title: "Final transfer details collected",
    prompt: "Collect the new tenant name, lease transfer date, and rent amount before preparing the final confirmation email.",
    actionType: "transfer-final-details",
    emailTemplateKey: "final_details_request",
  },
  {
    id: "incoming_tenant_confirmation_sent",
    title: "Incoming tenant confirmation email",
    prompt: "Send only after the previous transfer steps are complete and the incoming tenant has been approved. Attach the Tenant Information Guide.",
    emailTemplateKey: "incoming_tenant_confirmation",
  },
];

export const transferLeaseEmailTemplates = {
  application_requirements: {
    recipientLabel: "Old tenant",
    title: "Transfer Lease Application Requirements - [Property Address]",
    description: "Send with Tenant Application Form attached.",
    body: `Dear [Old Tenant Name],

Thank you for your enquiry regarding the lease transfer process for [Property Address].

Before we can submit the proposed lease transfer to the landlord for review, the proposed incoming tenant must first provide the following documents for assessment:

1. Completed tenancy application form
2. Passport / visa status / driver licence
3. Recent payslip
4. Recent bank statement
5. Rental ledger / rental history
6. Reference details - property manager or landlord references only

Please note that providing the above documents does not automatically guarantee approval. The proposed incoming tenant will still be subject to the standard application assessment process, and the lease transfer can only proceed once approval has been provided by the landlord and all required parties have completed the relevant transfer documentation.

Please send the above documents to us by email at your earliest convenience. Once received, we will review the information and advise you of the next step.

Thank you.`,
  },
  approval_terms: {
    recipientLabel: "All tenants",
    title: "Transfer Lease - [Property address]",
    description: "Send after landlord approval with the transfer documents attached.",
    body: `Hi All,

Good day, I hope my email finds you well.

The owner has accepted the transferred lease as you request.

Please refer to the detail below:

- The tenant must comply with all applicable laws, regulations, ordinances, and terms
and conditions in TA.
- The tenant must keep the premises in good condition and repair.
- The tenant must pay all rent and other charges due under the transferred lease in a
timely manner.
- The tenant must not assign or sublet the premises
- The new tenant will need to take full responsibility for the current tenant, including
maintenance, bills, damages to the property, and more.
- All the amounts will need to settle between the current tenant and the new tenant,
such as Invoices, bills, Bonds, and more.

If you accept the information above, please send us a reply 'YES, I AGREE'. We will only
proceed with the process when all the tenants have replied to this email. The transfer Lease
Agreement will be sent to you by tomorrow through DocuSign, transfer lease Agreement will
need to be signed completely after 48 hours.

Attached is the drafted transfer lease agreement, Tenancy agreement and In-going
Inspection report for you to read through the terms and conditions.

Thank you`,
  },
  bond_transfer: {
    recipientLabel: "All tenants",
    title: "Change of Bond Form - [Property address]",
    description: "Send after all tenants reply 'YES, I AGREE'. Attach Bond Transfer Form and Identification Example.",
    body: `Hi All,

Thank you for all of your emails regarding this matter.

I have attached the Change of Bond form to this email for your attention.
Please kindly:

- Sign the form by hand (electronic signatures will not be accepted)
- Provide all photo ID as requested on the form
- Ensure your signature matches the name on your photo ID

Please note that the form will not be processed if it is signed electronically, and your
signature will need to be the same as shown on your photo identification.

Once you have completed the form, please scan or take a clear photo and return it to me via
email.

Thank you for your cooperation. Please let me know if you have any questions.`,
  },
  final_details_request: {
    recipientLabel: "Internal checklist",
    title: "Final Transfer Information Required - [Property address]",
    description: "Collect these details before preparing the final incoming tenant confirmation.",
    body: `Please collect the following information for the final lease transfer confirmation email:

1. New tenant name
2. Lease transfer date
3. Rent amount`,
  },
  incoming_tenant_confirmation: {
    recipientLabel: "New tenant",
    title: "Lease Transfer Confirmation - [address of property]",
    description: "Send after approval and all previous transfer steps are complete. Attach Tenant Information Guide.",
    body: `Dear [New Tenant],

We are pleased to inform you that you have been approved to take over the lease on [address of property]. This letter serves as formal notification that you are now the tenant of this property, effective [lease transfer date].

Your fortnight rent will be [rent amount], due on the [lease transfer date] of each fortnight. Please make sure to pay your rent and Invoice on time to avoid any late fees.

I have attached our bank details for rent payments from [lease transfer date]. When you transfer the funds, please use the reference code name/address so that we can allocate your payment accordingly.

Let me know if you have any questions.

Bank Name : ANZ Bank
Account Name : Sinova Property
BSB : 015-025
Account No : 471892295

(Your reference NO. is name/address. Please quote this reference when you EFT your rent
payment to us.)

The current tenant is responsible for any damages to the property that occurred prior to
your move-in date.

Please review the document below for any additional information regarding your tenancy.

If you have any questions or concerns, please do not hesitate to contact us.`,
  },
};
