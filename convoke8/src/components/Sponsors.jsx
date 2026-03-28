import './Sponsors.css';
import SectionHeader from './SectionHeader';
import { playSelectSound } from '../utils/audio';

const SPONSORS = [
    { name: 'GeeksforGeeks', caption: 'Title Sponsor for Competitive Programming & Platform Sponsor for Knowledge Quarry', logo: '/gfg-gg-logo.svg', website: 'https://www.geeksforgeeks.org' },
    { name: 'XYZ', caption: 'Domain Sponsor for HashHacks', logo: '/xyz_logo.png', website: 'https://gen.xyz/' },
    { name: 'Devfolio', caption: 'Tech Partner', logo: '/devfolio_logo.png', website: 'https://devfolio.co' },
    { name: 'Devnovate', caption: 'Domain Sponsor for HashHacks', logo: '/devnovate_logo.png', website: 'http://devnovate.co/' },
    { name: 'DU Beat', caption: 'Media Partner', logo: '/dubeat_logo.png', website: 'https://dubeat.com/' },
];

function Sponsors() {
    const handleSponsorClick = (sponsor) => {
        playSelectSound();
        if (sponsor.website && sponsor.website.trim()) {
            window.open(sponsor.website, '_blank');
        }
    };

    return (
        <section className="section sponsors" id="sponsors">
            <SectionHeader text="LOADING_SECTION://SPONSORS" subtitle="// FETCHING ALLIANCE DATA..." />

            <div className="sponsors__grid">
                {SPONSORS.map((sponsor, i) => (
                    <div
                        key={i}
                        className="sponsors__card"
                        role={sponsor.website ? 'button' : undefined}
                        tabIndex={sponsor.website ? 0 : -1}
                        onClick={() => handleSponsorClick(sponsor)}
                        onKeyDown={(e) => {
                            if (sponsor.website && (e.key === 'Enter' || e.key === ' ')) {
                                handleSponsorClick(sponsor);
                            }
                        }}
                    >
                        <div className="sponsors__card-inner">
                            <div className="sponsors__image-wrapper">
                                {sponsor.logo ? (
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="sponsors__logo"
                                    />
                                ) : (
                                    <span className="sponsors__placeholder">
                                        {sponsor.name || 'Sponsor Logo'}
                                    </span>
                                )}
                                <div className="sponsors__image-overlay"></div>
                            </div>
                            <div className="sponsors__details">
                                <h4 className="sponsors__name">{sponsor.name}</h4>
                                {sponsor.caption && <p className="sponsors__caption">{sponsor.caption}</p>}
                                <p className="sponsors__card-link">→ Visit Website</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="sponsors__cta">
                <p className="sponsors__cta-text">INTERESTED IN SPONSORING CONVOKE 8?</p>
                <a href="mailto:convoke@cic.du.ac.in" className="retro-btn retro-btn--cyan retro-btn--small">
                    [ CONTACT US ]
                </a>
            </div>
        </section>
    );
}

export default Sponsors;
