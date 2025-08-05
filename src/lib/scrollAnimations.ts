// Scroll animation utility
export class ScrollAnimations {
  private observer: IntersectionObserver;
  private elements: Set<Element> = new Set();

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Optional: unobserve after animation to improve performance
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  observe(element: Element) {
    if (!this.elements.has(element)) {
      this.elements.add(element);
      this.observer.observe(element);
    }
  }

  observeAll(selector: string) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => this.observe(element));
  }

  disconnect() {
    this.observer.disconnect();
    this.elements.clear();
  }
}

// Initialize scroll animations
export const initScrollAnimations = () => {
  const scrollAnimations = new ScrollAnimations();
  
  // Observe all scroll animation elements
  const selectors = [
    '.scroll-fade-up',
    '.scroll-fade-left', 
    '.scroll-fade-right',
    '.scroll-scale-in',
    '.scroll-rotate-in'
  ];

  selectors.forEach(selector => {
    scrollAnimations.observeAll(selector);
  });

  return scrollAnimations;
};