let observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-appear');
    }
  });
}, { threshold: [0] });

document.querySelectorAll('.animate').forEach(function(el) {
  observer.observe(el);
});