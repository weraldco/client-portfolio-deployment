export const Animate = (showDiv: string, hiddenDiv: string) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(showDiv, entry.isIntersecting);
    });
  });
  const hiddenElements = document.querySelectorAll(hiddenDiv);
  hiddenElements.forEach((el) => observer.observe(el));
};
