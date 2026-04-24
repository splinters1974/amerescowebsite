const year = new Date().getFullYear();
const footer = document.querySelector('.site-footer p');

if (footer) {
  footer.textContent = `Concept landing page built for Ameresco UK decarbonisation audiences • ${year}`;
}

const supportsReveal = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (supportsReveal && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.card, .section-head, .insight-panel, .cta-panel').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}
