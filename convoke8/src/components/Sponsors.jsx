import './Sponsors.css';
import SectionHeader from './SectionHeader';

const SPONSORS = {
    'TITLE SPONSOR FOR COMPETITIVE PROGRAMMING': [
        { name: 'GeeksforGeeks', logo: '/gfg-gg-logo.svg', website: 'https://www.geeksforgeeks.org' },
    ],
    'PLATFORM SPONSOR FOR KNOWLEDGE QUARRY': [
        { name: 'GeeksforGeeks', logo: '/gfg-gg-logo.svg', website: 'https://www.geeksforgeeks.org' },
    ],
    'DOMAIN SPONSOR FOR HashHacks': [
        { name: 'XYZ', logo: '/xyz_logo.png', website: '' },
    ],
    // 'COMMUNITY PARTNERS': [
    //     { name: 'Community 1', logo: null, website: '' },
    //     { name: 'Community 2', logo: null, website: '' },
    //     { name: 'Community 3', logo: null, website: '' },
    //     { name: 'Community 4', logo: null, website: '' },
    // ],
};

function Sponsors() {
    const handleSponsorClick = (sponsor) => {
        if (sponsor.website && sponsor.website.trim()) {
            window.open(sponsor.website, '_blank');
        }
    };

    return (
        <section className="section sponsors" id="sponsors">
            <SectionHeader text="LOADING_SECTION://SPONSORS" subtitle="// FETCHING ALLIANCE DATA..." />

            {Object.entries(SPONSORS).map(([tier, sponsors]) => (
                <div className="sponsors__tier" key={tier}>
                    <h3 className="sponsors__tier-title">{tier}</h3>
                    <div className="sponsors__grid" data-count={sponsors.length}>
                        {sponsors.map((sponsor, i) => (
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
                                <div className="sponsors__logo-box">
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
                                </div>
                                <h4 className="sponsors__name">{sponsor.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

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
