import { useState, useEffect, useRef, useCallback } from 'react';
import './ComingSoon.css';

// Terminal command sequence
const terminalSequence = [
  { type: 'command', text: 'ROOT@CONVOKE :~ /V8.0# ./INIT_SEQUENCE.SH', delay: 0 },
  { type: 'blank', text: '', delay: 200 },
  { type: 'output', text: '> ESTABLISHING SECURE CONNECTION ...', delay: 300 },
  { type: 'output', text: '> CHECKING SYSTEM INTEGRITY ...', delay: 400 },
  { type: 'blank', text: '', delay: 300 },
  { type: 'warning', text: '> WARNING: CLASSIFIED DATA DETECTED.', delay: 400 },
  { type: 'output', text: '> DECRYPTION SCHEDULED FOR: APRIL 2026', delay: 300 },
  { type: 'output', text: '> LOCATION: CLUSTER_INNOVATION_CENTRE', delay: 300 },
  { type: 'blank', text: '', delay: 200 },
  { type: 'command', text: 'ROOT@CONVOKE :~ /V8.0# ', delay: 400, cursor: true },
];

function ComingSoon() {
  const [started, setStarted] = useState(false);
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [showFlicker, setShowFlicker] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [terminalComplete, setTerminalComplete] = useState(false);

  const audioContextRef = useRef(null);
  const terminalRef = useRef(null);
  const videoRef = useRef(null);

  // Initialize audio context + Unlock Video Audio for Mobile
  const initAudio = useCallback(() => {
    // 1. Audio Context
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    // 2. Video Unlock (Play then Pause immediately)
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }).catch(e => {
        console.warn("Mobile video unlock failed:", e);
      });
    }
  }, []);

  // Start the experience
  const handleStart = () => {
    initAudio();
    setStarted(true);
    playBootSound();
  };

  // Handle video end
  const handleVideoEnd = () => {
    setShowFlicker(true);
    setTimeout(() => {
      setShowFlicker(false);
      setShowSocials(true);
    }, 400);
  };

  const playBootSound = () => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    [200, 300, 400, 600].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      osc.type = 'square';
      gain.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.08);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.08);
    });
  };

  const playBeep = (frequency = 800, duration = 0.03) => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.frequency.value = frequency;
    oscillator.type = 'square';
    gainNode.gain.setValueAtTime(0.04, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  };

  const playWarningBeep = () => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    [0, 0.12, 0.24].forEach((delay) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      oscillator.frequency.value = 500;
      oscillator.type = 'square';
      gainNode.gain.setValueAtTime(0.06, ctx.currentTime + delay);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.1);
      oscillator.start(ctx.currentTime + delay);
      oscillator.stop(ctx.currentTime + delay + 0.1);
    });
  };

  // Typing logic
  useEffect(() => {
    if (!started) return;
    if (currentLineIndex >= terminalSequence.length) {
      setTimeout(() => {
        setTerminalComplete(true);
        setShowFlicker(true);
        setTimeout(() => {
          setShowFlicker(false);
          setShowVideo(true);
          // Play video for real now
          if (videoRef.current) {
            videoRef.current.play().catch(e => console.error(e));
          }
        }, 1200);
      }, 800);
      return;
    }

    const currentLine = terminalSequence[currentLineIndex];
    if (currentCharIndex === 0 && currentLine.type === 'warning') playWarningBeep();

    if (currentCharIndex < currentLine.text.length) {
      const timeout = setTimeout(() => {
        setLines(prev => {
          const newLines = [...prev];
          if (newLines.length <= currentLineIndex) {
            newLines.push({ ...currentLine, text: '', displayText: '' });
          }
          newLines[currentLineIndex] = {
            ...currentLine,
            displayText: currentLine.text.substring(0, currentCharIndex + 1)
          };
          return newLines;
        });
        if (currentLine.text[currentCharIndex] !== ' ' && currentLine.type !== 'blank') {
          playBeep(350 + Math.random() * 150, 0.015);
        }
        setCurrentCharIndex(prev => prev + 1);
      }, 18);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, currentLine.delay);
      return () => clearTimeout(timeout);
    }
  }, [started, currentLineIndex, currentCharIndex]);

  useEffect(() => {
    if (terminalRef.current) terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [lines]);

  return (
    <div className="crt-container">
      <div className="crt-overlay"></div>
      <div className="scanlines"></div>
      <div className="crt-noise"></div>

      {showFlicker && <div className="intense-flicker"></div>}

      {!started && (
        <div className="start-screen" onClick={handleStart}>
          <div className="start-content">
            <div className="version-tag">V8.0</div>
            <div className="start-prompt">
              <span className="blink">[</span> CLICK TO INITIALIZE <span className="blink">]</span>
            </div>
            <div className="classified-badge">// CLASSIFIED //</div>
          </div>
          <div className="corner-decorators">
            <span className="corner tl"></span><span className="corner tr"></span>
            <span className="corner bl"></span><span className="corner br"></span>
          </div>
        </div>
      )}

      {started && !showVideo && (
        <div className="terminal-fullscreen" ref={terminalRef}>
          <div className="terminal-content">
            {lines.map((line, index) => (
              <div key={index} className={`terminal-line ${line.type}`}>
                {line.displayText}
                {line.cursor && !terminalComplete && <span className="cursor">█</span>}
              </div>
            ))}
            {currentLineIndex < terminalSequence.length && currentLineIndex === lines.length && !terminalSequence[currentLineIndex].cursor && (
              <div className="terminal-line"></div>
            )}
          </div>
          <div className="hud-element hud-top-left"><span>SYS://CONVOKE_8.0</span></div>
          <div className="hud-element hud-top-right"><span>STATUS: ACTIVE</span></div>
          <div className="hud-element hud-bottom-left"><span>SECTOR: CIC</span></div>
          <div className="hud-element hud-bottom-right"><span>2026.03</span></div>
        </div>
      )}

      {/* Video Container - Always rendered but toggled via opacity/pointer-events */}
      <div
        className={`video-container ${showVideo ? 'visible' : 'hidden'}`}
        style={{
          opacity: showVideo ? 1 : 0,
          zIndex: showVideo ? 20 : -1,
          pointerEvents: showVideo ? 'auto' : 'none'
        }}
      >
        <video
          ref={videoRef}
          className="logo-video"
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
        >
          <source src="/3_new.mp4" type="video/mp4" />
        </video>

        {showSocials && (
          <div className="socials-overlay fade-in">
            <div className="socials-container">
              <div className="socials-title">CONNECT_TO_NET:</div>
              <div className="social-links">
                <a href="https://instagram.com/convoke_cic" target="_blank" className="social-link">[ INSTAGRAM ]</a>
                <a href="https://linkedin.com/company/convoke-du-cic" target="_blank" className="social-link">[ LINKEDIN ]</a>
              </div>
              <div className="final-cursor">_</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ComingSoon;
