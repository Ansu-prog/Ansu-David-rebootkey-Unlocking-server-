# Rebootkey UnlockingServer frontend foundation

This repository currently contains a responsive, brand-aligned frontend preview. It is not yet a production platform and does not contain a connected API, database, authentication service, payment processing, supplier integration, live dashboard data, or file delivery.

## Pages and shared assets

- Public site: `index.html`, `about.html`, `services.html`, category pages, `pricing.html`, `contact.html`, `faq.html`, `terms.html`, and `privacy.html`.
- Authentication layouts: login, registration, password reset, and email verification. They do not submit or store credentials.
- Customer and admin workspace layouts: dashboard, orders, wallets, files, downloads, support, profile, notifications, and management sections. New shared workspace pages are rendered by `assets/js/portal.js` and styled by `assets/css/portal.css`.
- Brand assets/styles: `assets/img/rebootkey-mark.svg` and `assets/css/site.css`.

## Run locally

Serve the repository root using a static server:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`. Bootstrap, Font Awesome, and web fonts currently use external CDNs.

## Safety and implementation status

Account forms and portal screens are intentionally marked as previews. No account data, sample orders, wallet balances, payment confirmations, supplier responses, or download links should be treated as real. Do not enter real personal or payment information.

When backend work begins, use ASP.NET Core Identity, role-protected APIs, SQL Server, server-side payment verification, encrypted secret configuration, audited admin actions, idempotent order processing, and access-controlled file delivery. Never put supplier or payment credentials in browser code. Never request or store customer passwords, authentication tokens, or private device credentials. Support only devices the customer owns or is authorized to service.

## Next implementation milestones

1. Complete frontend page coverage and verify navigation/accessibility.
2. Add the ASP.NET Core solution and SQL Server persistence.
3. Implement secure identity and role authorization.
4. Add catalog, orders, background processing, and documented supplier adapters.
5. Add verified payment/wallet flows, file entitlements, support, notifications, and admin APIs.
6. Add automated tests, Swagger/OpenAPI, deployment configuration, logging, and backups.
