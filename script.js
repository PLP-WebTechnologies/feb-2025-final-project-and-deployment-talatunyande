document.addEventListener('DOMContentLoaded', () => {
  // Flash effect on load
  document.body.classList.add('flash');
  setTimeout(() => {
    document.body.classList.remove('flash');
  }, 300); // Match flash animation duration

  // Navigation with flash before redirect
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (link.classList.contains('active')) return;

      e.preventDefault();
      document.body.classList.add('flash');

      setTimeout(() => {
        window.location.href = href;
      }, 300); // Flash duration
    });
  });

  // Contact form submission feedback
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
        response.textContent = 'Thank you! We’ll get back to you soon.';
        form.reset();
      }, 1000);
    });
  }

  // Optional: Flip images on click
  const flipImages = document.querySelectorAll('img.flip');

  flipImages.forEach(img => {
    img.addEventListener('click', () => {
      // Toggle class to flip or unflip
      if (img.style.transform === 'rotateY(180deg)') {
        img.style.transform = 'rotateY(0deg)';
      } else {
        img.style.transform = 'rotateY(180deg)';
      }
    });
  });
});


