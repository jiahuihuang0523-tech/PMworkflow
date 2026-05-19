export const breakLeaseFields = [
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

export const breakLeaseStatusSteps = [
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

export const finalWaterCalculationFields = [
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

export const breakLeaseCalculationFields = [
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

export const breakLeaseEmailTemplates = {
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
