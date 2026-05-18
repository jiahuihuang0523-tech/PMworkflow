const categories = [
  {
    id: "maintenance",
    name: "Maintenance",
    note: "Repairs, quotes, and contractor follow-up",
    icon: "M",
    color: "#0f766e",
  },
  {
    id: "break-lease",
    name: "Break Lease",
    note: "Break lease process, advertising, and inspections",
    icon: "B",
    color: "#b44b5f",
  },
  {
    id: "transfer-lease",
    name: "Transfer Lease",
    note: "Lease transfer documents, bond change, and incoming tenant confirmation",
    icon: "T",
    color: "#7c5c2e",
  },
  {
    id: "lease-renewal",
    name: "Lease Renewal",
    note: "Renewal offer, rent increase notice, and tenant response tracking",
    icon: "R",
    color: "#2d7a5f",
  },
  {
    id: "daily-task",
    name: "Daily Task",
    note: "Daily work record not linked to a property",
    icon: "D",
    color: "#2f6f9f",
  },
  {
    id: "move-in",
    name: "Move In",
    note: "New tenant move-in, keys, and condition report",
    icon: "I",
    color: "#6d5b98",
  },
  {
    id: "letting-only",
    name: "Letting Only",
    note: "Letting-only acceptance, rent deposit, and owner bond payment",
    icon: "L",
    color: "#2f7d59",
  },
];

const contractorTypes = [
  {
    id: "plumber",
    name: "Plumber",
    note: "Leaks, blocked drains, taps, toilets, hot water and pipe repairs.",
    initials: "PL",
  },
  {
    id: "electrician",
    name: "Electrician",
    note: "Power faults, lights, switches, smoke alarms and electrical safety work.",
    initials: "EL",
  },
  {
    id: "handyman",
    name: "Handyman",
    note: "Small repairs, doors, fixtures, patching, locks and general maintenance.",
    initials: "HM",
  },
  {
    id: "cleaner",
    name: "Cleaner",
    note: "End-of-lease cleans, routine cleans, carpets and presentation work.",
    initials: "CL",
  },
  {
    id: "air-con",
    name: "Air-con",
    note: "Air-conditioning servicing, faults, filters, heating and cooling issues.",
    initials: "AC",
  },
  {
    id: "roofer-gutter",
    name: "Roofer / Gutter",
    note: "Roof leaks, gutter cleaning, downpipes, storm damage and roof repairs.",
    initials: "RG",
  },
  {
    id: "gardener",
    name: "Gardener",
    note: "Lawn mowing, pruning, garden clean-ups, weeds and outdoor maintenance.",
    initials: "GD",
  },
  {
    id: "locksmith",
    name: "Locksmith",
    note: "Locks, keys, rekeying, lockouts, mailbox locks and security hardware.",
    initials: "LK",
  },
  {
    id: "smoke-alarm-test",
    name: "Smoke Alarm Test",
    note: "Smoke alarm compliance checks, testing, battery replacement and reports.",
    initials: "SA",
  },
];

const breakLeaseFields = [
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
    key: "break_lease_date",
    label: "Break lease date / tenant move-out date",
    placeholder: "Example: 31/05/2026",
    type: "text",
  },
  {
    key: "reason_for_breaking_lease",
    label: "Reason for breaking the lease",
    placeholder: "Example: relocated interstate for work",
    type: "textarea",
  },
];

const transferLeaseFields = [
  {
    key: "old_tenant_name",
    label: "Old tenant name",
    placeholder: "Example: John Smith",
    type: "text",
  },
];

const leaseRenewalFields = [
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

const moveInFields = [
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

const lettingOnlyFields = [
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

const breakLeaseStatusSteps = [
  {
    id: "tenant_terms_informed",
    title: "Tenant informed of break lease terms",
    prompt: "Reminder: explain fixed-term lease early termination responsibilities, including loss of rent, advertising, and reletting fees.",
    emailTemplateKey: "tenant_cbs_information",
  },
  {
    id: "landlord_notified",
    title: "Landlord notified of tenant break lease",
    prompt: "Reminder: tell the landlord the tenant intention, move-out date, reason, and next reletting / inspection steps.",
    emailTemplateKey: "landlord_notification",
  },
  {
    id: "tenant_followup_sent",
    title: "Tenant informed that landlord has been notified and advised of next steps",
    prompt: "Reminder: advise the tenant that the landlord has been notified and explain open inspection, final inspection, and rent responsibility arrangements.",
    emailTemplateKey: "tenant_followup",
  },
  {
    id: "break_lease_fee_calculated",
    title: "Calculate break lease fee",
    prompt: "Reminder: calculate the final water bill first, then reletting fee, advertising fee, loss of rent, rent difference offset, and final amount.",
    actionType: "calculation",
    emailTemplateKey: "break_lease_calculation",
  },
];

const maintenanceStatusSteps = [
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

const leaseRenewalStatusSteps = [
  {
    id: "renewal_email_sent",
    title: "Lease renewal email sent",
    prompt: "Send the formal lease renewal email to the tenant with renewal, termination, and periodic lease options.",
    emailTemplateKey: "tenant_lease_renewal",
  },
];

const moveInStatusSteps = [
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

const lettingOnlyStatusSteps = [
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

const transferLeaseFinalFields = [
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

const transferLeaseStatusSteps = [
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

const finalWaterCalculationFields = [
  {
    key: "latest_paid_water_usage_period",
    label: "Latest paid water usage period",
    placeholder: "Example: 01/01/2026 - 31/03/2026",
  },
  {
    key: "latest_paid_water_usage_amount",
    label: "Latest paid water usage amount",
    placeholder: "Example: $90.00",
  },
  {
    key: "latest_paid_supply_charge_period",
    label: "Latest paid supply charge period",
    placeholder: "Example: 01/02/2026 - 30/04/2026",
  },
  {
    key: "latest_paid_supply_charge_amount",
    label: "Latest paid supply charge amount",
    placeholder: "Example: $82.30",
  },
  {
    key: "tenant_lease_end_date",
    label: "Tenant lease end date",
    placeholder: "Example: 31/05/2026",
  },
];

const breakLeaseCalculationFields = [
  {
    key: "tenant_rent_paid_to_date",
    label: "Tenant rent paid to date",
    placeholder: "Example: 26/05/2026",
  },
  {
    key: "new_tenant_lease_start_date",
    label: "New tenant lease start date",
    placeholder: "Example: 01/06/2026",
  },
  {
    key: "tenant_original_lease_start_date",
    label: "Tenant original lease start date",
    placeholder: "Example: 01/01/2026",
  },
  {
    key: "tenant_original_lease_end_date",
    label: "Tenant original lease end date",
    placeholder: "Example: 01/01/2027",
  },
  {
    key: "rent_amount",
    label: "Tenant current rent amount per week",
    placeholder: "Example: $500",
  },
  {
    key: "advertising_fee",
    label: "Advertising fee",
    placeholder: "Example: $300",
  },
  {
    key: "new_rent_amount",
    label: "New rent amount per week",
    placeholder: "Example: $510",
  },
];

const breakLeaseEmailTemplates = {
  tenant_cbs_information: {
    recipientLabel: "Tenant",
    title: "Break Lease Notification",
    description: "Initial CBS break lease information email",
    body: `Dear [Tenant full name],

According to CBS, a tenant cannot end a fixed term lease early without being held responsible for costs related to reletting the property, unless the landlord/agent agrees not to claim these costs. If a tenant moves out of the property before the end of a fixed term agreement, they are breaking the lease and a landlord can claim costs for:

- loss of rent (maximum 4 weeks)

- advertising

- reletting - fee charged to the landlord by an agent

Even if the tenant has moved out, tenants are responsible for rent (maximum 4 weeks) or until the official date the lease ends. If the tenant stops paying rent, the landlord can claim compensation from the bond or directly from the tenant when the tenancy ends.

If you have any questions or concerns, feel free to contact us at (08) 7080 5884 or pm@sinova.com.au, pm1@sinova.com.au`,
  },
  landlord_notification: {
    recipientLabel: "Landlord",
    title: "Break Lease Notification",
    description: "Landlord notification email",
    body: `Hi [landlord full name],

Good day, I hope my email finds you well.

I am writing to inform you that the tenant, [tenant full name], has expressed their intention to break their lease agreement for the property located at [property address], effective [break lease date].

The tenant has recently [reason for breaking the lease] and is therefore no longer in a position to continue with the lease. We understand that breaking a lease is a serious matter and will follow the appropriate procedures to ensure a smooth transition.

Please note that, as per the terms of the lease agreement, the tenant is responsible for paying rent until a new tenant is found, with a maximum period of four weeks. The tenant has agreed to cover the reletting and advertising costs. We will also arrange a final inspection of the property with the tenant to ensure it is left in satisfactory condition for the next occupant.

We would like to assure you that we will do everything possible to minimize any inconvenience during this process. Should you have any questions or concerns, please do not hesitate to contact us.

Thank you for your cooperation and understanding.`,
  },
  tenant_followup: {
    recipientLabel: "Tenant",
    title: "Break Lease Notification",
    description: "Tenant follow-up email after landlord notification",
    body: `Hi [tenant full name],

Good day, I hope my email finds you well.

We would like to inform you that the owner of the property located at [property address] has been notified of your intention to break your lease agreement. As per the terms of the lease agreement, we will follow the appropriate procedures to ensure a smooth transition.

We have been advised that you will be moving out on [break lease date] . Please note that you are responsible for paying the rent until a new tenant is found, up to a maximum of four weeks' loss of rent, or until a new tenancy commences, whichever comes first, as per the terms of your lease agreement. We will be actively seeking a replacement tenant to minimize the financial impact of the early termination of the lease.

Please also note that we will only be able to conduct an open inspection of the property after you have completely moved out. We will arrange a final inspection of the property with you to ensure that it is left in satisfactory condition for the next tenant.

We understand that breaking the lease can be a difficult and stressful process, and we are here to assist you in any way we can. If you have any questions or concerns regarding this matter, please do not hesitate to contact us.

Thank you`,
  },
  break_lease_calculation: {
    recipientLabel: "Tenant",
    title: "Break Lease Calculation - [property address]",
    description: "Break lease calculation email to tenant",
    body: `Dear [Tenant name],

We are pleased to inform you that we have successfully found a new tenant for [property address] As per your break lease request, below is the detailed breakdown of the associated fees for your reference and payment:

Break lease = [Break lease date]

New tenant lease start date = [New tenant Lease start date]

Your lease end date = [Tenant original lease end date]

Reletting fee
Two weeks Rent = [Rent amount]*2 + 10% GST = [Rent amount*2*1.1] per fortnight
Term of tenancy [Tenant original lease start & end date]  3/4 =  [3/4date]
Time to end of tenancy term when the property is relet ([New tenant Lease start date] - [Tenant original lease end date]) = [reletdate]

Calculation -
The reletting fee is worked out as follows
Maximum of 2 weeks rent plus GST - [Rent amount*2*1.1] x [reletdate] = [reletfee1]
Divide that amount by 3/4 of the whole tenancy term - [reletfee1] / [3/4date] = [reletfee2]

Advertising fees
Advertising fees = [advertising fee]
[advertising fee] x [reletdate] / [3/4date] = [adfee]

Loss of Rent
Rent Paid to - [Tenant rent paid to date]
New tenant lease start: [New tenant Lease start date]
You will need to pay to loss of rent total = [lossrent]

Rent different
New rental: [new rent amount]
Your rental: [Rent amount]
Rent different: [rentdiff]
[rentdiff] * [reletdate] = [rentdiff1]

Last water Bill

[last water bill amount]

TOTAL BREAK LEASE FEE
(Reletting fees) + (Advertising fees) - (Rent different offset) = (offset fee) ***NOTE:if the outcome of (offset fee) <= 0 then = 0***
[reletfee2] + [adfee] - [rentdiff1] = [offsetfee]

(offset fee) + (Loss of rent) + (Water Bill) = Total you need to pay
[offsetfee] + [lossrent] + [last water bill amount] = [finalfee]

Options:
-Separate Payment: You may choose to pay the amount directly to us and we will request refund your full bond back to you once amount received
-Bond Deduction: Alternatively, the amount can be deducted from your bond.

Please let us know your preferred option. If you have any questions or require further clarification, feel free to reach out.

We appreciate your prompt attention to this matter.

Thank you`,
  },
};

const leaseRenewalEmailTemplates = {
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

const transferLeaseEmailTemplates = {
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

const moveInEmailTemplates = {
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

const lettingOnlyEmailTemplates = {
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

const storageKey = "property-manager-daily-tasks";
const contractorStorageKey = "property-manager-contractors";
const authStorageKey = "property-manager-todo-authenticated";
const loginCredentials = {
  username: "admin",
  password: "123456",
};
const state = {
  activeView: "tasks",
  selectedCategory: null,
  selectedAddress: "all",
  searchQuery: "",
  sort: "newest",
  expandedTaskId: null,
  expandedContractorTypeId: null,
  selectedContractorTypeId: null,
  selectedEmailTaskId: null,
  selectedEmailStepId: null,
  records: loadRecords(),
  contractors: loadContractors(),
};

const elements = {
  loginView: document.querySelector("#loginView"),
  todoApp: document.querySelector("#todoApp"),
  loginForm: document.querySelector("#loginForm"),
  usernameInput: document.querySelector("#usernameInput"),
  passwordInput: document.querySelector("#passwordInput"),
  loginError: document.querySelector("#loginError"),
  logoutBtn: document.querySelector("#logoutBtn"),
  activeCount: document.querySelector("#activeCount"),
  doneCount: document.querySelector("#doneCount"),
  propertyList: document.querySelector("#propertyList"),
  propertySearch: document.querySelector("#propertySearch"),
  showAllBtn: document.querySelector("#showAllBtn"),
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
  deletePropertyBtn: document.querySelector("#deletePropertyBtn"),
  taskList: document.querySelector("#taskList"),
  emailTemplatePanel: document.querySelector("#emailTemplatePanel"),
  closeEmailTemplateBtn: document.querySelector("#closeEmailTemplateBtn"),
  emailTemplateTitle: document.querySelector("#emailTemplateTitle"),
  emailTemplateHint: document.querySelector("#emailTemplateHint"),
  emailTemplateContent: document.querySelector("#emailTemplateContent"),
  sortSelect: document.querySelector("#sortSelect"),
  categoryTemplate: document.querySelector("#categoryTemplate"),
  taskTemplate: document.querySelector("#taskTemplate"),
};

setupLogin();
renderCategories();
render();

elements.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = elements.usernameInput.value.trim();
  const password = elements.passwordInput.value;
  const isValid =
    username === loginCredentials.username && password === loginCredentials.password;

  if (!isValid) {
    elements.loginError.hidden = false;
    elements.passwordInput.select();
    return;
  }

  sessionStorage.setItem(authStorageKey, "true");
  elements.loginForm.reset();
  elements.loginError.hidden = true;
  showTodoApp();
});

elements.logoutBtn.addEventListener("click", () => {
  sessionStorage.removeItem(authStorageKey);
  showLoginView();
});

elements.showAllBtn.addEventListener("click", () => {
  state.activeView = "tasks";
  state.selectedAddress = "all";
  state.selectedContractorTypeId = null;
  render();
});

elements.propertySearch.addEventListener("input", (event) => {
  state.searchQuery = event.target.value.trim().toLowerCase();
  renderProperties();
});

elements.contractorListBtn.addEventListener("click", () => {
  state.activeView = "contractors";
  state.selectedAddress = "all";
  state.selectedCategory = null;
  state.expandedTaskId = null;
  state.selectedContractorTypeId = null;
  state.selectedEmailTaskId = null;
  state.selectedEmailStepId = null;
  elements.taskForm.reset();
  showStep("closed");
  render();
});

elements.newTaskBtn.addEventListener("click", () => {
  state.activeView = "tasks";
  state.selectedCategory = null;
  elements.taskForm.reset();
  renderTaskForm();
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
    lettingOnlyProgress: payload.lettingOnlyProgress,
    createdAt: new Date().toISOString(),
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

  elements.taskForm.reset();
  state.selectedCategory = null;
  renderTaskForm();
  showStep("closed");
  saveRecords();
  render();
});

function setupLogin() {
  if (sessionStorage.getItem(authStorageKey) === "true") {
    showTodoApp();
    return;
  }

  showLoginView();
}

function showTodoApp() {
  elements.loginView.hidden = true;
  elements.todoApp.hidden = false;
  elements.usernameInput.blur();
}

function showLoginView() {
  elements.todoApp.hidden = true;
  elements.loginView.hidden = false;
  elements.loginError.hidden = true;
  elements.passwordInput.value = "";
  elements.usernameInput.focus();
}

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

function render() {
  renderCounts();
  renderProperties();
  if (state.activeView === "contractors") {
    renderContractorLists();
    renderEmailTemplatePanel();
    return;
  }
  renderTasks();
  renderEmailTemplatePanel();
}

function renderTaskForm() {
  const isBreakLease = state.selectedCategory?.id === "break-lease";
  const isTransferLease = state.selectedCategory?.id === "transfer-lease";
  const isLeaseRenewal = state.selectedCategory?.id === "lease-renewal";
  const isMoveIn = state.selectedCategory?.id === "move-in";
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
          : isLettingOnly
            ? "Letting Only information"
            : dailyTask
              ? "Daily Task"
              : "Address and task details";
  elements.addressField.hidden = dailyTask;
  elements.addressInput.placeholder = "Example: 12 King William St, Adelaide SA";
  elements.addressInput.required = !dailyTask;
  elements.issueField.hidden =
    isBreakLease || isTransferLease || isLeaseRenewal || isMoveIn || isLettingOnly;
  elements.issueInput.required =
    !isBreakLease && !isTransferLease && !isLeaseRenewal && !isMoveIn && !isLettingOnly;
  elements.dynamicFields.innerHTML = "";

  if (!isBreakLease && !isTransferLease && !isLeaseRenewal && !isMoveIn && !isLettingOnly) {
    return;
  }

  const intro = document.createElement("div");
  intro.className = "form-note";
  intro.textContent = isMoveIn
    ? "Collect the required information first. After saving, a Move In progress checklist and tenant email templates will be available."
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
      state.selectedContractorTypeId = null;
      state.selectedAddress = record.address;
      render();
    });

    elements.propertyList.appendChild(button);
  });
}

function renderTasks() {
  elements.workspaceTitle.textContent = "Daily Property Tasks";
  elements.sortSelect.hidden = false;
  const tasksToShow =
    state.selectedAddress === "all" ? getVisibleTasks(false) : getSelectedPropertyHistory();
  elements.taskList.innerHTML = "";
  elements.boardTitle.textContent =
    state.selectedAddress === "all" ? "All active tasks" : state.selectedAddress + " - History";
  elements.deletePropertyBtn.classList.toggle("is-visible", state.selectedAddress !== "all");

  if (!tasksToShow.length) {
    const message =
      state.selectedAddress === "all" ? "No active tasks right now" : "No history for this property yet";
    elements.taskList.innerHTML = '<div class="empty-state">' + message + '</div>';
    return;
  }

  sortTasks(tasksToShow).forEach(({ record, task }) => {
    const category = categories.find((item) => item.id === task.categoryId);
    const node = elements.taskTemplate.content.firstElementChild.cloneNode(true);
    const isCompleted = Boolean(task.completedAt);
    const isWorkflowTask =
      isMaintenanceTask(task) ||
      isBreakLeaseTask(task) ||
      isTransferLeaseTask(task) ||
      isLeaseRenewalTask(task) ||
      isLettingOnlyTask(task) ||
      isMoveInTask(task);
    const isExpanded = state.expandedTaskId === task.id;
    const progressConfig = getProgressConfig(task);

    node.classList.toggle("is-completed", isCompleted);
    node.classList.toggle("has-progress-panel", isWorkflowTask && isExpanded);
    node.style.borderLeftColor = category?.color || "#0f766e";
    node.querySelector(".task-category").textContent = isCompleted
      ? task.categoryName + " - Archived"
      : task.categoryName + " - Active";
    node.querySelector("h4").textContent = record.address;
    node.querySelector("p").textContent = task.issue + "\nCreated: " + formatDate(task.createdAt) +
      (isCompleted ? "\nCompleted: " + formatDate(task.completedAt) : "");

    const finishControl = node.querySelector(".finish-control");
    const checkbox = node.querySelector("input");

    if (isCompleted) {
      finishControl.innerHTML = '<span class="archived-status">Archived</span><button class="reopen-btn" type="button">Reopen</button>';
      finishControl.querySelector(".reopen-btn").addEventListener("click", () => {
        task.completedAt = null;
        saveRecords();
        render();
      });
    } else if (isWorkflowTask && progressConfig) {
      progressConfig.ensure(task);
      const completedSteps = progressConfig.progress(task).filter((step) => step.completed).length;
      finishControl.innerHTML =
        '<button class="progress-toggle" type="button" aria-expanded="' + isExpanded + '">' +
          (isExpanded ? "Hide progress" : "View progress") + " - " + completedSteps + "/" + progressConfig.steps.length +
        '</button>' +
        '<label class="finish-check"><input type="checkbox" /><span>Finish task</span></label>';
      finishControl.querySelector(".progress-toggle").addEventListener("click", () => {
        state.expandedTaskId = isExpanded ? null : task.id;
        state.selectedEmailTaskId = null;
        state.selectedEmailStepId = null;
        renderTasks();
        renderEmailTemplatePanel();
      });
      finishControl.querySelector(".finish-check input").addEventListener("change", () => {
        task.completedAt = new Date().toISOString();
        state.expandedTaskId = null;
        state.selectedEmailTaskId = null;
        state.selectedEmailStepId = null;
        saveRecords();
        render();
        renderEmailTemplatePanel();
      });

      if (isExpanded) {
        node.appendChild(renderWorkflowProgressPanel(task, progressConfig));
      }
    } else {
      checkbox.addEventListener("change", () => {
        task.completedAt = new Date().toISOString();
        saveRecords();
        render();
      });
    }
    elements.taskList.appendChild(node);
  });
}

function renderContractorLists() {
  const selectedType = contractorTypes.find((type) => type.id === state.selectedContractorTypeId);
  elements.workspaceTitle.textContent = selectedType ? selectedType.name + " Contractors" : "Contractor Lists";
  elements.boardTitle.textContent = selectedType ? selectedType.name + " Contractors" : "Contractor Lists";
  elements.deletePropertyBtn.classList.remove("is-visible");
  elements.sortSelect.hidden = true;
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

function renderWorkflowProgressPanel(task, progressConfig) {
  const panel = document.createElement("div");
  panel.className = "progress-panel";

  progressConfig.steps.forEach((step, index) => {
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
      const interactiveElement = event.target.closest("input, textarea");
      if (interactiveElement) return;
      selectWorkflowStep(task.id, step.id);
    });

    item.addEventListener("keydown", (event) => {
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

  return panel;
}

function selectWorkflowStep(taskId, stepId) {
  state.selectedEmailTaskId = taskId;
  state.selectedEmailStepId = stepId;
  renderTasks();
  renderEmailTemplatePanel();
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
      const interactiveElement = event.target.closest("input, textarea");
      if (interactiveElement) {
        return;
      }
      selectBreakLeaseStep(task.id, step.id);
    });

    item.addEventListener("keydown", (event) => {
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

  if (!selectedTask || !selectedStep || !progressConfig) {
    elements.appShell.classList.remove("has-email-panel");
    elements.emailTemplatePanel.hidden = true;
    elements.emailTemplateTitle.textContent = "Select workflow step";
    elements.emailTemplateHint.textContent =
      "Click any Break Lease, Transfer Lease, Lease Renewal, Move In, or Letting Only progress step to show the recommended email template.";
    elements.emailTemplateContent.innerHTML = '<div class="empty-state">No email template</div>';
    return;
  }

  const template = progressConfig.templates[selectedStep.emailTemplateKey];
  if (!template) {
    elements.appShell.classList.remove("has-email-panel");
    elements.emailTemplatePanel.hidden = true;
    elements.emailTemplateContent.innerHTML = '<div class="empty-state">No email template</div>';
    return;
  }

  const templateValues = progressConfig.getTemplateValues(selectedTask, selectedStep);
  const filledTitle = fillTemplatePlaceholders(template.title, templateValues);
  const filledBody = fillTemplatePlaceholders(template.body, templateValues);

  elements.appShell.classList.add("has-email-panel");
  elements.emailTemplatePanel.hidden = false;
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
