export const leaseRenewalFields = [
  {
    key: "tenant_name",
    label: "Tenant name",
    placeholder: "Example: John Smith",
    type: "text",
  },
  {
    key: "lease_end_date",
    label: "Lease end date",
    placeholder: "Example: 31/05/2026",
    type: "text",
  },
  {
    key: "new_rent_amount",
    label: "New rent amount",
    placeholder: "Example: $650 per week",
    type: "text",
  },
];

export const leaseRenewalStatusSteps = [
  {
    id: "renewal_email_sent",
    title: "Lease renewal email sent",
    prompt: "Send the formal lease renewal email to the tenant with renewal, termination, and periodic lease options.",
    emailTemplateKey: "tenant_lease_renewal",
  },
];

export const leaseRenewalEmailTemplates = {
  tenant_lease_renewal: {
    recipientLabel: "Tenant",
    title: "Lease Renewal - [Property address]",
    description: "Formal lease renewal email to tenant",
    body: `Hi [Tenant name],

We hope you are well.

As you may be aware, your current lease is due to end on [enter lease end date].

We would like to know if you have any intention to:

Option A: Renew Your Lease
You may choose to renew your lease at a rental increment, which can be negotiated with
the landlord. The landlord is offering a 12-month lease extension, with the new rent of [new rent amount:].Please provide us written or email notice of your wish to continue your
stay at the property. A lease renewal agreement will then be sent through REISAforms.

Option B: Terminate the Lease
You may choose to end your lease at the expiry date. Please provide us at least 30 days
written notice of your intention to vacate the property, after which we will issue further
instructions.

Option C: No Action Taken by Either Party
If neither party issues a termination notice under the agreed conditions, your fixed-term
lease will automatically convert to a periodic lease. The new rent proposed will take effect
on the date immediately following the end of the fixed-term lease.
Please see the attached document for the formal Notice to Increase Rent.
If you have any questions regarding the lease renewal process, please feel free to reach out
to us.`,
  },
};
