// Intersection Observer 配置
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '0px',
};

// 观察器回调函数
const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 元素进入视口时添加可见类
      entry.target.classList.add('slide-in-visible');
    } else {
      // 元素离开视口时移除可见类
      entry.target.classList.remove('slide-in-visible');
    }
  });
};

// 创建观察器实例
const observer = new IntersectionObserver(observerCallback, observerOptions);

// 当 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
  // 选择所有需要添加动画的部分
  const sections = document.querySelectorAll('section');

  // 为每个部分添加初始类名并观察
  sections.forEach((section) => {
    section.classList.add('slide-in');
    observer.observe(section);
  });
});
