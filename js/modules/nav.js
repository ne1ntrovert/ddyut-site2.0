const header = document.querySelector('.topbar');
let previousScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  header.style.transform = currentScroll > previousScroll && currentScroll > 120 ? 'translateY(-110%)' : 'translateY(0)';
  previousScroll = currentScroll;
}, { passive: true });

header.style.transition = 'transform .35s ease';
