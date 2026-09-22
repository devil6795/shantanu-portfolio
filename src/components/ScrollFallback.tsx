'use client';

import { useEffect } from 'react';

export function ScrollFallback() {
  useEffect(() => {
    // Only run the fallback if the browser does NOT support native scroll-driven animations
    if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const htmlEl = entry.target as HTMLElement;
              htmlEl.style.opacity = '1';
              htmlEl.style.transform = 'translateY(0) scale(1)';
              observer.unobserve(entry.target);
            }
          }
        },
        {
          threshold: 0.15,
        }
      );

      document.querySelectorAll('.scroll-animate').forEach((el) => {
        const htmlEl = el as HTMLElement;
        // Initial hidden state for the fallback
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(60px) scale(0.95)';
        htmlEl.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
        observer.observe(htmlEl);
      });

      return () => observer.disconnect();
    }
  }, []);

  return null;
}

