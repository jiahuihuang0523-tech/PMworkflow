export const moveInFields = [
  {
    key: "tenant_full_name",
    label: "Tenant full name",
    placeholder: "Example: John Smith",
    type: "text",
  },
  {
    key: "rent_per_week",
    label: "Rent per week",
    placeholder: "Example: $650",
    type: "text",
  },
  {
    key: "bond_amount",
    label: "Bond amount",
    placeholder: "Example: $2600",
    type: "text",
  },
  {
    key: "lease_start_date",
    label: "Lease start date",
    placeholder: "Example: 01/05/2026",
    type: "text",
  },
  {
    key: "lease_period",
    label: "Lease period",
    placeholder: "Example: 01/05/2026 - 30/04/2027",
    type: "text",
  },
];

export const moveInStatusSteps = [
  {
    id: "application_acceptance_sent",
    title: "Application acceptance email",
    prompt: "Send the application acceptance email to the approved tenant with rent, bond, lease term, deposit and key collection details.",
    emailTemplateKey: "application_acceptance",
  },
  {
    id: "keys_collection_sent",
    title: "Keys collection follow-up email",
    prompt: "Send this email after the tenant has collected keys, with the ingoing report, agreement, keys picture, brochure and bond receipt attached.",
    emailTemplateKey: "keys_collection",
  },
];

export const moveInEmailTemplates = {
  application_acceptance: {
    recipientLabel: "Tenant",
    title: "CONGRATULATIONS - [Property address]",
    description: "Application acceptance email for the approved new tenant",
    body: `Dear [tenant full name], 

This email of acceptance of Application to Rent is issued to the Applicant who has filed a Tenancy Application Form to rent for the premises: [Property address] 

Thank you for submitting your application to Rent to us. We are pleased to inform you that CONGRATULATIONS on your application to Rent has been ACCEPTED by the Owner.   
    

Your lease will begin on the [lease start date] for 12 months and the rent amount is [rent per week] per week. 

- Lease term: [lease period]  

- Weekly rent:[rent per week] per week, rent-paying fortnightly   

- Tenants to pay for water supply and water use 

- Moving out cleaning is required 

    

Please reply "Yes" to accept the offer and transfer the funds listed below in 24 hours and send us the payment receipt  

1)   Non-Refundable 2 weeks of rent ([rent per week] x 2 = [2*rent per week]) as a deposit to secure the property  

2)   The Security Bond of [bond amount]

Please find below bank details for the purpose of payment.   

Bank Name       : ANZ Bank  

Account Name    : Sinova Property   

BSB             : 015-025  

Account No      : 471892295  

(Your reference NO. is tenant name/Address. Please quote this reference when you EFT your rent payment to us.)  

    

- Lease Agreement will be sent to you by tomorrow through REISA Form, attached is the drafted lease agreement for you to read through the terms and conditions.   

- Keys are to be picked up at our office located at 68 Halifax Street Adelaide on the [lease start date] from 2 pm-5 pm. 

Please contact 0466 519 888 or email pm@sinova.com.au for any maintenance issues in the future.`,
  },
  keys_collection: {
    recipientLabel: "Tenant",
    title: "Keys Collection - [Property address]",
    description: "Post-key-collection email for the new tenant",
    body: `Dear [tenant full name], 

I hope this email finds you well. We wanted to follow up with you regarding your recent collection of the keys to your new rental property at [Property Address]. We are excited to welcome you as our tenant and look forward to providing you with the best possible service during your tenancy with us. 

As promised, we have attached several important documents to this email for your reference.  

- Ingoing Inspection Report 

- Tenancy Agreement & Section 48 Notice 

- Keys Picture 

- Information Brochure 

- Bond Receipt 

Please take the time to read through these documents carefully, as they contain important information regarding your tenancy and your responsibilities as a tenant. 

If you have any questions or concerns regarding the documents or your tenancy, please do not hesitate to contact us. Our team is always available to assist you in any way we can. 

Once again, congratulations on your new home, and we look forward to a long and successful tenancy with you. 

Thank you`,
  },
};
