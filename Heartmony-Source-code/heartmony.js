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
document.addEventListener('DOMContentLoaded', function() {
  // 只选择主要的 section
  const sections = document.querySelectorAll(
    '.first-section, .second-section, .client-section, .vision-section, .problem-space, .research-section, .wireframes-showcase, .feedback-section, .mid-fi-showcase, .final-iteration-section, .haptic-section, .app-interface-section'
  );
  
  // 为每个主要 section 添加初始类并观察
  sections.forEach(section => {
    section.classList.add('slide-in');
    observer.observe(section);
  });
});
