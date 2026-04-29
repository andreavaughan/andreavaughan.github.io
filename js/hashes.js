(() => {
  const headings = Array.from(document.querySelectorAll("h2[id]"));
  if (!headings.length) return;

  let activeId = null;

  // This marks a heading "active" when it reaches near the top of the viewport.
  const observer = new IntersectionObserver((entries) => {
    // Collect visible headings
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

    if (!visible.length) return;

    const newId = visible[0].target.id;
    if (newId && newId !== activeId) {
      activeId = newId;
      history.replaceState(null, "", `#${encodeURIComponent(newId)}`);
    }
  }, {
    // Tweak these to control when a heading becomes active
    root: null,
    threshold: [0, 1],
    rootMargin: "-20% 0px -75% 0px" // "active" around top-ish area
  });

  headings.forEach(h => observer.observe(h));
})();