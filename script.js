// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

function setMenu(open) {
  navLinks.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
}

menuBtn.addEventListener('click', () => {
  setMenu(!navLinks.classList.contains('open'));
});

// close the menu after tapping a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

// Navbar shadow on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);

  // the Contact section is short, so activate it when we hit the bottom of the page
  const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
  if (atBottom) {
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#contact');
    });
  }
});

// Highlight the link of the section currently on screen
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// Service cards: show / hide details
document.querySelectorAll('.card-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const more = btn.nextElementSibling;
    const nowOpen = more.hidden;
    more.hidden = !nowOpen;
    btn.setAttribute('aria-expanded', nowOpen);
    btn.textContent = nowOpen ? 'Hide details' : 'More details';
  });
});

// Contact form validation
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

function showError(id, msg) {
  const input = document.getElementById(id);
  document.getElementById(id + 'Error').textContent = msg;
  input.closest('.field').classList.toggle('invalid', Boolean(msg));
}

form.addEventListener('submit', e => {
  e.preventDefault();
  status.textContent = '';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  let ok = true;

  showError('name', '');
  showError('email', '');
  showError('message', '');

  if (name.length < 2) { showError('name', 'Please enter your name.'); ok = false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('email', 'Please enter a valid email address.'); ok = false; }
  if (message.length < 10) { showError('message', 'Please write at least 10 characters.'); ok = false; }

  if (!ok) return;

  // No backend yet, so we just confirm on screen.
  status.textContent = 'Thanks ' + name.split(' ')[0] + ', your message has been sent. We will reply soon.';
  form.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
