# Rebootkey UnlockingServer — frontend foundation

A responsive Rebootkey-branded frontend foundation for the mobile device services platform. This is the first frontend milestone: the public landing page and account entry screens establish the shared visual system and responsible-service messaging.

## Included

- `index.html` — public landing page with the four service categories, process overview, privacy and authorization guidance, FAQ, and responsive navigation.
- `login.html` and `register.html` — accessible account-entry layouts. They do **not** simulate authentication or transmit credentials.
- `assets/css/site.css` — shared design system, responsive layout, and reduced-motion support.
- `assets/js/site.js` — shared navigation behavior, dynamic copyright year, and honest client-side validation for not-yet-connected auth forms.
- `assets/img/rebootkey-mark.svg` — scalable lock mark using the logo colors.

## Run locally

This milestone is static frontend code and does not require a backend. From the repository root, serve the files with any static HTTP server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. Bootstrap and Font Awesome currently load from CDNs.

## Important implementation status

The pages are a frontend foundation, not a production service platform. Authentication, orders, supplier connections, file delivery, payments, wallet changes, and customer data are not connected and must not be presented as working yet. The forms intentionally do not submit or store credentials. Production integrations require the ASP.NET Core API, SQL Server, secure configuration, documented supplier contracts, and verified payment webhooks. Never put API credentials in browser code.

## Planned build sequence

1. Expand the public and customer/admin page system using these shared styles and components.
2. Add the ASP.NET Core API and SQL Server persistence, then secure identity and roles.
3. Implement service catalog and order lifecycle with supplier adapters and idempotent background processing.
4. Add verified payment/wallet workflows, secure file delivery, support, notifications, and admin tools.
5. Add automated tests, API documentation, deployment configuration, and operational guidance.

Only services the customer owns or is authorized to service are in scope. Never request, store, or expose customer device passwords, account passwords, or authentication tokens.
