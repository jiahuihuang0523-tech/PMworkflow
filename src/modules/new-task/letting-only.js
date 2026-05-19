export const lettingOnlyFields = [
  {
    key: "tenant_name",
    label: "Tenant name",
    placeholder: "Example: John Smith",
    type: "text",
  },
  {
    key: "lease_start_date",
    label: "Lease start date",
    placeholder: "Example: 01/05/2026",
    type: "text",
  },
  {
    key: "lease_term",
    label: "Lease term",
    placeholder: "Example: 01/05/2026 - 30/04/2027",
    type: "text",
  },
  {
    key: "weekly_rent_amount",
    label: "Weekly rent amount",
    placeholder: "Example: $650/week",
    type: "text",
  },
  {
    key: "bond_amount",
    label: "Bond amount",
    placeholder: "Example: $2600",
    type: "text",
  },
  {
    key: "owner_name",
    label: "Owner's name",
    placeholder: "Example: Jane Brown",
    type: "text",
  },
  {
    key: "owner_bank_name",
    label: "Owner's bank name",
    placeholder: "Example: NAB",
    type: "text",
  },
  {
    key: "owner_bsb",
    label: "Owner's BSB",
    placeholder: "Example: 000-000",
    type: "text",
  },
  {
    key: "owner_account_number",
    label: "Owner's account number",
    placeholder: "Example: 123456789",
    type: "text",
  },
];

export const lettingOnlyStatusSteps = [
  {
    id: "required_information_collected",
    title: "Required letting-only information collected",
    prompt: "Check tenant, lease, rent, bond, and owner bank details before sending the acceptance email.",
    emailTemplateKey: "required_information",
  },
  {
    id: "letting_only_acceptance_sent",
    title: "Letting-only congratulations email",
    prompt: "Send the formal acceptance email with the rent deposit and owner bond payment details.",
    emailTemplateKey: "letting_only_congratulations",
  },
];

export const lettingOnlyEmailTemplates = {
  required_information: {
    recipientLabel: "Internal checklist",
    title: "Letting Only Required Information - [property address]",
    description: "Confirm these required details before preparing the letting-only email.",
    body: `Please confirm the following information has been collected:

1. Tenant name
2. Property address
3. Lease start date
4. Lease term
5. Weekly rent amount
6. Bond amount
7. Owner's name
8. Owner's bank name
9. Owner's BSB
10. Owner's Account Number`,
  },
  letting_only_congratulations: {
    recipientLabel: "Tenant",
    title: "Letting Only Congratulations - [property address]",
    description: "Formal letting-only acceptance email to the approved tenant.",
    body: `Dear [Tenant name],

This email of acceptance of Application to Rent is issued to the Applicant who has filed a
Tenancy Application Form to rent for the premises: [Property address]

Thank you for submitting your application to Rent to us. We are pleased to inform you that
CONGRATULATIONS on your application to Rent has been ACCEPTED by the Owner.

Your lease will begin on the [lease start date] for 12 months and the rent amount is
[weekly rent amount].
- Lease term [lease term]
- Weekly rent: [weekly rent amount], rent-paying fortnightly
- Tenants to pay for water supply and water use
- Moving out cleaning is required

Please reply "Yes" to accept the offer and transfer the funds listed below in 24 hours and
sent us the payment receipt

Below is the rent and bond payment purpose:
1. Non-refundable 2 weeks of rent [weekly rent amount]x2=[weekly rent amount*2] as a deposit to secure the
property

Please find below bank details for the purpose of payment.
Bank Name : ANZ Bank
Account Name : Sinova Real Estate Pty Ltd
BSB : 015-025
Account No : 313931738
(Your reference NO. is tenant name/[Property address] Please quote this reference when you EFT
your rent payment to us.)

2. The Security Bond of [bond amount]
Please find below bank details for the purpose of payment.
Bank Name : [owner's bank name]
Account Name : [owner's name]
BSB : [owner's BSB ]
Account No : [owner's Account Number ]

Please note that keys collection and lease signing will be arranged once the rental payment
and bond transfer have been completed. Our agent will then coordinate a suitable time to
meet with you and the owner to finalize the lease documents and hand over the keys

Thank you`,
  },
};
