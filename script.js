// Header con sombra, barra de progreso y barra móvil al hacer scroll
const header = document.querySelector('.header');
const progress = document.querySelector('.scroll-progress');
const mobileBar = document.querySelector('.mobile-bar');
const onScroll = () => {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  header.classList.toggle('scrolled', y > 10);
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  mobileBar.classList.toggle('show', y > 320);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Menú móvil
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');
const closeNav = () => {
  nav.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Abrir menú');
};
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

// Selector de tamaños (PENDIENTE: medidas y precios reales)
const sizes = [
  { name: 'pequeño', m2: 5, price: 45, label: 'Ideal para un estudio o trastero de casa',
    items: ['Cajas de mudanza y maletas', 'Bicis, ropa de temporada y adornos', 'Contenido de un estudio'] },
  { name: 'mediano', m2: 14, price: 85, label: 'El más pedido: un piso de 2 habitaciones',
    items: ['Sofá, camas, armarios desmontados', 'Electrodomésticos y cajas', 'Ideal durante una reforma o mudanza'] },
  { name: 'grande', m2: 28, price: 140, label: 'Una casa completa o tu negocio',
    items: ['Muebles de una vivienda de 3–4 habitaciones', 'Stock, mercancía y archivo', 'Herramientas y material de obra'] }
];
const tabs = document.querySelectorAll('.sizer__tabs [role="tab"]');
const pill = document.querySelector('.sizer__pill');
const iso = document.querySelector('.iso');
const info = document.querySelector('.sizer__info');
const $ = id => document.getElementById(id);

const countTo = (el, to, ms = 600) => {
  const from = Number(el.textContent) || 0;
  const t0 = performance.now();
  const step = t => {
    const p = Math.min((t - t0) / ms, 1);
    el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const selectSize = i => {
  const s = sizes[i];
  tabs.forEach((t, j) => t.setAttribute('aria-selected', String(j === i)));
  pill.style.transform = `translateX(${i * 100}%)`;
  iso.dataset.size = i;
  countTo($('sz-m2'), s.m2);
  countTo($('sz-price'), s.price);
  $('sz-label').textContent = s.label;
  $('sz-list').innerHTML = s.items.map(x => `<li>${x}</li>`).join('');
  $('sz-cta').href = `https://wa.me/34600000000?text=${encodeURIComponent(`Hola, me interesa un trastero ${s.name}`)}`;
  info.classList.remove('swap');
  void info.offsetWidth;
  info.classList.add('swap');
};
tabs.forEach((t, i) => {
  t.addEventListener('click', () => selectSize(i));
  t.addEventListener('keydown', e => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    const n = (i + d + tabs.length) % tabs.length;
    tabs[n].focus();
    selectSize(n);
  });
});

// Aparición al hacer scroll, contadores y línea de pasos
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    if (el.classList.contains('steps')) el.classList.add('drawn');
    else if (el.classList.contains('count')) countTo(el, Number(el.dataset.to), 1400);
    else el.classList.add('visible');
    io.unobserve(el);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .steps, .count').forEach(el => io.observe(el));

// FAQ: solo una abierta a la vez
const faqs = document.querySelectorAll('.faq details');
faqs.forEach(d => d.addEventListener('toggle', () => {
  if (d.open) faqs.forEach(o => { if (o !== d) o.open = false; });
}));
