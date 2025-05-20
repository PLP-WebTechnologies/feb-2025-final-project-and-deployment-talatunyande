// Page transitions and form handling
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in effect on page load
  document.body.classList.add('fade-in');

  // Navigation fade-out on click
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');

      // Prevent fade-out if already on the current page
      if (link.classList.contains('active')) return;

      e.preventDefault();
      document.body.classList.remove('fade-in');
      document.body.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = href;
      }, 400); // match CSS duration
    });
  });

  // Contact form submission handling
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const response = document.getElementById('formResponse');
      const name = form.querySelector('input[name="name"]');
      const email = form.querySelector('input[name="email"]');
      const message = form.querySelector('textarea[name="message"]');

      if (!name.value || !email.value || !message.value) {
        response.textContent = 'Please fill out all fields.';
        response.style.color = 'red';
        return;
      }

      response.style.color = '#333';
      response.textContent = 'Sending...';

      setTimeout(() => {
        response.textContent = 'Thank you for your message! We will get back to you soon.';
        form.reset();
      }, 1000);
    });
  }
});

