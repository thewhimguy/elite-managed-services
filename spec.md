# Elite Managed Services

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full multi-page marketing website for Elite Managed Services, a consultancy firm providing SEZ, STPI, 100% EOU, DGFT, GST, Income Tax, Payroll, and Labour Law services.
- Navigation: Home, About (About Us, About SEZ, About STPI), Services (SEZ Services, STPI, 100% EOU, DGFT, GST Related, Individual Income Tax Return, Payroll Services, Labour Law Compliances), Contact Us
- Hero section with rotating banner/carousel and headline about Elite Managed Services
- Legislative Framework section covering SEZ Act 2005, SEZ Rules 2006, State SEZ Act & Policy
- STPI Scheme section with description
- "What is SEZ?" section with bullet points
- Mission & Vision tabbed section
- Services grid section showcasing all 8 services with icons/cards
- Contact section with address, phone, email, and a contact form
- Footer with quick links, services list, contact info, social links
- Contact form backend: store enquiries submitted by visitors (name, email, phone, message, service interest)
- Admin page to view submitted enquiries (protected by a simple passcode or admin login)

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. Backend: Motoko canister storing contact form enquiries (submit enquiry, list enquiries for admin)
2. Frontend pages: Home, About Us, About SEZ, About STPI, individual service detail pages, Contact, Admin
3. Home page sections: Hero carousel, Legislative Framework, STPI, What is SEZ, Mission & Vision, Services grid, Client logos area
4. Services: SEZ Approval/Management/Online, STPI Consultancy, 100% EOU, DGFT, GST, Income Tax Return, Payroll Services, Labour Law Compliances
5. Contact form wired to backend canister
6. Admin page to list enquiries
7. Navigation with dropdown menus for About and Services
