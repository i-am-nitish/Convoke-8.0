import { useState, useEffect, useRef } from 'react';
import { playTypeBeep, playSectionBuzz } from '../utils/audio';

/**
 * Hook that creates a typewriter effect for section headers.
 * Text types out character-by-character when the element enters the viewport.
 * Plays typing beeps and a circuit buzz on reveal.
 *
 * @param {string} fullText - The complete text to type out
 * @param {number} speed - Milliseconds per character (default: 35)
 * @returns {{ ref, displayText, isDone }}
 */
export function useTypewriter(fullText, speed = 35) {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const ref = useRef(null);
  const hasTriggered = useRef(false);

  // Intersection Observer — trigger once
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          setStarted(true);
          playSectionBuzz();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Typing animation
  useEffect(() => {
    if (!started || isDone) return;
    if (displayText.length >= fullText.length) {
      setIsDone(true);
      return;
    }

    const timer = setTimeout(() => {
      const nextChar = fullText[displayText.length];
      setDisplayText(fullText.substring(0, displayText.length + 1));
      if (nextChar !== ' ') {
        playTypeBeep();
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [started, displayText, fullText, speed, isDone]);

  return { ref, displayText, isDone };
}
