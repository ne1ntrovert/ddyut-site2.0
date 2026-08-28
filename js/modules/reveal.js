const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.08 });

document.querySelectorAll('.section, .feature, .timeline-item, .edu-grid article, .roadmap-grid article, .number-card').forEach(element => {
  element.classList.add('reveal');
  revealObserver.observe(element);
});
