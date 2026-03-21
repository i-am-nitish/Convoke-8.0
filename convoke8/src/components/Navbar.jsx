import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'events', label: 'EVENTS' },
    { id: 'schedule', label: 'SCHEDULE' },
    { id: 'hackathon', label: 'HACKATHON' },
    { id: 'sponsors', label: 'SPONSORS' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'team', label: 'TEAM' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'CONTACT' },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('home');

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > window.innerHeight * 0.6);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setActive(id);
            setMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar--visible' : ''}`}>
            <div className="navbar__inner">
                <div className="navbar__logo" onClick={() => scrollTo('home')}>
                    <span className="navbar__logo-bracket">[</span>
                    CONVOKE
                    <span className="navbar__logo-bracket">]</span>
                    <span className="navbar__logo-ver">8.0</span>
                </div>

                <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item.id}
                            className={`navbar__link ${active === item.id ? 'navbar__link--active' : ''}`}
                            onClick={() => scrollTo(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                    <a
                        onClick={() => scrollTo(NAV_ITEMS[2].id)}
                        className="retro-btn retro-btn--small navbar__register"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        REGISTER
                    </a>
                </div>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
