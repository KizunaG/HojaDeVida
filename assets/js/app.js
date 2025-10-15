// IntersectionObserver para animar secciones al entrar al viewport
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Validación de formulario (Bootstrap-style)
const form = document.getElementById('cvForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }
  // Demo: sólo mostramos un mensaje, puedes integrar EmailJS o un endpoint si quieres
  formMsg.style.display = 'block';
  setTimeout(()=> formMsg.style.display = 'none', 3000);
  form.reset();
  form.classList.remove('was-validated');
});

// Toggle claro/oscuro
const btn = document.getElementById('themeToggle');
btn.addEventListener('click', ()=>{
  const html = document.documentElement;
  const current = html.getAttribute('data-bs-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-bs-theme', next);
  btn.innerHTML = next === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
});
