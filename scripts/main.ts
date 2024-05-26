document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const observerOptions = {
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar-sticky');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
  });

  // GameBoy Menu Navigation
  const gameboyContainer = document.getElementById('gameboy-container');
  const gameMenuItems = document.querySelectorAll('.menu-item');
  const sectionsToNavigate = document.querySelectorAll('section:not(#gameboy-container)');
  const footer = document.querySelector('footer');

  gameMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      if (target) {
        gameboyContainer.classList.add('hidden');
        sectionsToNavigate.forEach(section => {
          section.classList.add('hidden');
        });
        document.querySelector(target)?.classList.remove('hidden');
        footer.classList.remove('hidden');
      }
    });
  });

  // Keyboard navigation for GameBoy
  let selectedIndex = 0;
  gameMenuItems[selectedIndex].classList.add('selected');
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      gameMenuItems[selectedIndex].classList.remove('selected');
      selectedIndex = (selectedIndex + 1) % gameMenuItems.length;
      gameMenuItems[selectedIndex].classList.add('selected');
    } else if (e.key === 'ArrowUp') {
      gameMenuItems[selectedIndex].classList.remove('selected');
      selectedIndex = (selectedIndex - 1 + gameMenuItems.length) % gameMenuItems.length;
      gameMenuItems[selectedIndex].classList.add('selected');
    } else if (e.key === 'Enter') {
      gameMenuItems[selectedIndex].click();
    }
  });

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const message = (document.getElementById('message') as HTMLTextAreaElement).value;

      if (name && email && message) {
        console.log('Form submitted successfully:', { name, email, message });
        alert('Thank you for your message!');
      } else {
        alert('Please fill in all fields.');
      }
    });
  }
});
