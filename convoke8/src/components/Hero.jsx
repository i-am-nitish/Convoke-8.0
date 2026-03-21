import { useState, useEffect } from 'react';
import './Hero.css';

const TARGET_DATE = new Date('2026-04-09T00:00:00+05:30');

function getTimeLeft() {
    const diff = TARGET_DATE - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
    };
}

function Hero() {
    const [time, setTime] = useState(getTimeLeft);

    useEffect(() => {
        const id = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    const pad = (n) => String(n).padStart(2, '0');

    return (
        <section className="hero" id="home">
            {/* CRT Effects */}
            <div className="hero__scanlines"></div>
            <div className="hero__vignette"></div>

            <div className="hero__content">
                {/* HUD corners */}
                <div className="hero__corners">
                    <span className="hero__corner hero__corner--tl"></span>
                    <span className="hero__corner hero__corner--tr"></span>
                    <span className="hero__corner hero__corner--bl"></span>
                    <span className="hero__corner hero__corner--br"></span>
                </div>

                {/* HUD info */}
                <div className="hero__hud hero__hud--tl">// SYS://CONVOKE_8.0</div>
                <div className="hero__hud hero__hud--tr">// STATUS: ACTIVE</div>

                {/* Logo placeholder */}
                <div className="hero__logo-area">
                    <img
                        src="/convokelogo.jpeg"
                        alt="CONVOKE Logo"
                        className="hero__logo-img"
                        width="120"
                        height="120"
                    />
                </div>

                {/* Title */}
                <h1 className="hero__title">CONVOKE</h1>
                <div className="hero__season">SEASON 8.0</div>
                <p className="hero__tagline">THE ANNUAL TECH FEST OF CLUSTER INNOVATION CENTRE</p>

                {/* Countdown */}
                <div className="hero__countdown">
                    <div className="hero__countdown-item">
                        <span className="hero__countdown-num">{pad(time.days)}</span>
                        <span className="hero__countdown-label">DAYS</span>
                    </div>
                    <span className="hero__countdown-sep">:</span>
                    <div className="hero__countdown-item">
                        <span className="hero__countdown-num">{pad(time.hours)}</span>
                        <span className="hero__countdown-label">HRS</span>
                    </div>
                    <span className="hero__countdown-sep">:</span>
                    <div className="hero__countdown-item">
                        <span className="hero__countdown-num">{pad(time.minutes)}</span>
                        <span className="hero__countdown-label">MIN</span>
                    </div>
                    <span className="hero__countdown-sep">:</span>
                    <div className="hero__countdown-item">
                        <span className="hero__countdown-num">{pad(time.seconds)}</span>
                        <span className="hero__countdown-label">SEC</span>
                    </div>
                </div>

                {/* Info */}
                <div className="hero__info">
                    <span className="hero__date">9 — 11 APRIL 2026</span>
                    <span className="hero__venue">CLUSTER INNOVATION CENTRE, UNIVERSITY OF DELHI</span>
                </div>

                {/* CTA */}
                <div className="hero__cta">
                    <a href="#" className="retro-btn" target="_blank" rel="noopener noreferrer">
                        [ REGISTER NOW ]
                    </a>
                    <button className="retro-btn retro-btn--cyan" onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}>
                        [ EXPLORE EVENTS ]
                    </button>
                </div>

                {/* Scroll indicator */}
                <div className="hero__scroll-hint">
                    <span>SCROLL DOWN</span>
                    <span className="hero__scroll-arrow">▼</span>
                </div>
            </div>

            {/* HUD bottom */}
            <div className="hero__hud hero__hud--bl">// SECTOR: CIC</div>
            <div className="hero__hud hero__hud--br">// 2026.04</div>
        </section>
    );
}

export default Hero;
