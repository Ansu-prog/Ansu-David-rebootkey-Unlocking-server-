(() => {
  const pageInfo = {
    'order-details': ['Order details', 'Track an order and review its request history.', 'fa-box'],
    'my-files': ['My files', 'Review files you have purchased and their access status.', 'fa-folder-open'],
    downloads: ['Downloads', 'Access your eligible, securely delivered file downloads.', 'fa-download'],
    transactions: ['Transactions', 'Review wallet and payment transaction records.', 'fa-receipt'],
    'add-funds': ['Add funds', 'Choose a supported payment method to fund your account wallet.', 'fa-wallet'],
    profile: ['Profile', 'Manage your customer contact and account information.', 'fa-user'],
    'change-password': ['Change password', 'Update your sign-in password through secure account settings.', 'fa-key'],
    notifications: ['Notifications', 'View important updates about requests and account activity.', 'fa-bell'],
    'manage-users': ['Manage users', 'Review customer accounts and access roles.', 'fa-users'],
    'manage-files': ['Manage files', 'Manage authorized firmware products and secure file availability.', 'fa-file-lines'],
    'manage-payments': ['Manage payments', 'Review verified payment events and financial records.', 'fa-credit-card'],
    'manage-tickets': ['Manage tickets', 'Review support requests and technician assignments.', 'fa-ticket'],
    'manage-suppliers': ['Manage suppliers', 'Configure approved supplier records and service mappings.', 'fa-server'],
    'manage-api-integrations': ['API integrations', 'Manage integration configuration without exposing credentials.', 'fa-plug'],
    'manage-categories': ['Manage categories', 'Organize service categories and product catalog sections.', 'fa-layer-group'],
    'manage-pricing': ['Manage pricing', 'Review service price settings and applicable currency.', 'fa-tags'],
    'manage-reports': ['Reports', 'Review operational and financial reports when connected to live data.', 'fa-chart-column'],
    'system-settings': ['System settings', 'Manage platform configuration and operational preferences.', 'fa-gear'],
    'manage-technicians': ['Manage technicians', 'Manage support staff and remote service assignments.', 'fa-user-gear'],
    'manage-notifications': ['Manage notifications', 'Configure customer and staff notification templates.', 'fa-bell'],
    'admin-profile': ['Admin profile', 'Manage your staff profile and account security.', 'fa-user-shield']
  };
  const customerNav = [
    ['Dashboard', 'dashboard.html', 'fa-gauge-high'], ['My orders', 'my-orders.html', 'fa-box'], ['My files', 'my-files.html', 'fa-folder-open'],
    ['Downloads', 'downloads.html', 'fa-download'], ['Wallet', 'wallet.html', 'fa-wallet'], ['Transactions', 'transactions.html', 'fa-receipt'],
    ['Support tickets', 'support-tickets.html', 'fa-headset'], ['Notifications', 'notifications.html', 'fa-bell'], ['Profile', 'profile.html', 'fa-user']
  ];
  const adminNav = [
    ['Overview', 'admin-dashboard.html', 'fa-chart-pie'], ['Users', 'manage-users.html', 'fa-users'], ['Orders', 'manage-orders.html', 'fa-boxes-stacked'],
    ['Categories', 'manage-categories.html', 'fa-layer-group'], ['Pricing', 'manage-pricing.html', 'fa-tags'], ['Files', 'manage-files.html', 'fa-file-lines'],
    ['Payments', 'manage-payments.html', 'fa-credit-card'], ['Suppliers', 'manage-suppliers.html', 'fa-server'], ['API integrations', 'manage-api-integrations.html', 'fa-plug'],
    ['Tickets', 'manage-tickets.html', 'fa-ticket'], ['Technicians', 'manage-technicians.html', 'fa-user-gear'], ['Notifications', 'manage-notifications.html', 'fa-bell'],
    ['Reports', 'manage-reports.html', 'fa-chart-column'], ['Settings', 'system-settings.html', 'fa-gear'], ['Admin profile', 'admin-profile.html', 'fa-user-shield']
  ];
  const customerDescriptions = {
    'order-details': 'Order details and results will appear here after the authenticated orders API is connected.',
    'my-files': 'Your purchased firmware and file products will appear here after purchase history is connected.',
    downloads: 'Secure, time-limited download links will appear here after file entitlements are connected.',
    transactions: 'Verified wallet and payment transactions will appear here after payment processing is integrated.',
    'add-funds': 'Wallet deposits are unavailable until a payment provider and server-side webhook verification are configured.',
    profile: 'Profile updates require authenticated API endpoints and account verification.',
    'change-password': 'Password changes must use secure ASP.NET Identity endpoints and verified sessions.',
    notifications: 'There are no live notifications because the account API and notification delivery are not connected.'
  };
  const adminDescriptions = {
    'manage-users': 'Customer records and role changes are loaded only from authenticated admin APIs.',
    'manage-files': 'File catalog actions require server-side storage, malware scanning, and access-controlled download delivery.',
    'manage-payments': 'Payment records must come from verified provider webhooks. Never accept browser-reported payment success.',
    'manage-tickets': 'Support tickets and assignment actions will be loaded from the protected support API.',
    'manage-suppliers': 'Supplier connections must use documented provider APIs and encrypted server-side credentials.',
    'manage-api-integrations': 'Secret values must remain in secure server configuration and must never be shown in this browser UI.',
    'manage-categories': 'Service categories will be managed through validated admin endpoints.',
    'manage-pricing': 'Prices must be returned and checked by the server before order creation.',
    'manage-reports': 'Analytics will use authorized, server-generated reports; no sample figures are shown here.',
    'system-settings': 'Production settings require role-protected endpoints, audit records, and secret management.',
    'manage-technicians': 'Technician details will be available only to authorized staff through admin APIs.',
    'manage-notifications': 'Notification templates will be managed through audited server-side operations.',
    'admin-profile': 'Staff profile and role changes require secure authentication and role verification.'
  };
  const makeNav = (items, active) => items.map(([label, href, icon]) => `<a class="${location.pathname.endsWith(href) ? 'active' : ''}" href="${href}"><i class="fa-solid ${icon}" aria-hidden="true"></i><span>${label}</span></a>`).join('');
  const makeEmpty = (description, icon) => `<section class="portal-empty panel"><div class="portal-empty-icon"><i class="fa-solid ${icon}" aria-hidden="true"></i></div><h2>Live data not connected</h2><p>${description}</p><span class="portal-badge"><i class="fa-solid fa-circle-info" aria-hidden="true"></i> Frontend preview</span></section>`;
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('portal-root');
    if (!root) return;
    const portal = document.body.dataset.portal === 'admin' ? 'admin' : 'customer';
    const page = document.body.dataset.page || '';
    const [title, subtitle, icon] = pageInfo[page] || ['Workspace', 'Rebootkey account workspace.', 'fa-grid-2'];
    const nav = portal === 'admin' ? adminNav : customerNav;
    const description = portal === 'admin' ? (adminDescriptions[page] || 'Live administrative information is available after the protected backend is connected.') : (customerDescriptions[page] || 'Your account information will appear when the authenticated API is connected.');
    const dashboardHref = portal === 'admin' ? 'admin-dashboard.html' : 'dashboard.html';
    root.innerHTML = `<div class="portal-shell"><aside class="portal-sidebar ${portal === 'admin' ? 'portal-admin-sidebar' : ''}"><a class="portal-brand" href="${dashboardHref}"><img src="assets/img/rebootkey-mark.svg" width="36" height="36" alt=""><span class="brand-word">reboot<span>key</span></span></a><div class="portal-label">${portal === 'admin' ? 'ADMINISTRATION' : 'CUSTOMER PORTAL'}</div><nav class="portal-nav" aria-label="${portal} navigation">${makeNav(nav, page)}</nav><a class="portal-back" href="index.html"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Back to website</a></aside><main class="portal-main"><header class="portal-header"><div><span class="section-kicker">${portal === 'admin' ? 'ADMIN WORKSPACE' : 'MY ACCOUNT'}</span><h1><i class="fa-solid ${icon}" aria-hidden="true"></i> ${title}</h1><p>${subtitle}</p></div><a class="btn btn-outline-secondary" href="${dashboardHref}">Workspace home</a></header><div class="portal-notice" role="note"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i><span>This is a frontend preview. No account data, payments, service orders, supplier requests, or file downloads are connected.</span></div>${makeEmpty(description, icon)}</main></div>`;
  });
})();
