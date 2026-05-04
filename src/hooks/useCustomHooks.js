import { useEffect, useState } from 'react';

/**
 * Custom hook to track scroll and apply sticky navbar
 */
export const useStickyNav = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isSticky;
};

/**
 * Custom hook for counter animation using Intersection Observer
 */
export const useCountUp = (target = 0, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref);

    return () => observer.unobserve(ref);
  }, [ref, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 10);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [isVisible, target, duration]);

  return { count, ref: setRef };
};

/**
 * Custom hook for back-to-top button visibility
 */
export const useBackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { isVisible, scrollToTop };
};
