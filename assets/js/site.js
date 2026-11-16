document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = new Date().getFullYear();

  // Close the mobile navigation after a visitor chooses an in-page destination.
  document.querySelectorAll('#siteNav .nav-link[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('siteNav');
      if (nav && nav.classList.contains('show') && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // The account endpoints are deliberately not simulated. This keeps the preview
  // honest until secure ASP.NET Identity endpoints are available.
  document.querySelectorAll('[data-unconnected-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.classList.add('was-validated');
      const message = form.querySelector('.form-message');
      if (!form.checkValidity()) {
        if (message) message.textContent = 'Please review the highlighted fields.';
        form.querySelector(':invalid')?.focus();
        return;
      }
      if (message) message.textContent = 'Account services are not connected yet. Your information was not sent or stored.';
    });
  });
});
