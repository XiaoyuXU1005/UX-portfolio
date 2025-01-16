// Intersection Observer
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '0px',
};

// observer call back function
const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // when the target is going to the screen, make it visible
      entry.target.classList.add('slide-in-visible');
    } else {
      // when the target is leaving the screen, make it invisible
      entry.target.classList.remove('slide-in-visible');
    }
  });
};

// create an observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// execute when the document finished loading
document.addEventListener('DOMContentLoaded', () => {
  // select all section
  const sections = document.querySelectorAll('section');

  // add slide-in interaction for all section
  sections.forEach((section) => {
    section.classList.add('slide-in');
    observer.observe(section);
  });
});
