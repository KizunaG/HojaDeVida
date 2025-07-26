// Encoger navbar al hacer scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("shrink", window.scrollY > 80);
});

// Animación reveal al hacer scroll
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Menú hamburguesa
const toggleBtn = document.getElementById('menu-toggle');
const navList = document.querySelector('nav ul');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Cerrar menú al hacer clic en enlace
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});
