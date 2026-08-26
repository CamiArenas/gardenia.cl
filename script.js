const page = document.documentElement;
const logo = document.querySelector('.logo-image');

function revealPage() {
  page.classList.add('ready');
}

if (logo.complete) {
  revealPage();
} else {
  logo.addEventListener('load', revealPage, { once: true });
  logo.addEventListener('error', revealPage, { once: true });
}
