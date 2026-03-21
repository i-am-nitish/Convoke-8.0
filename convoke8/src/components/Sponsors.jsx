import './Sponsors.css';
import SectionHeader from './SectionHeader';

const SPONSORS = {
    'TITLE SPONSOR': [
        { name: 'Sponsor 1', logo: null },
    ],
    'GOLD SPONSORS': [
        { name: 'Sponsor 2', logo: null },
        { name: 'Sponsor 3', logo: null },
    ],
    'MEDIA PARTNERS': [
        { name: 'Media 1', logo: null },
        { name: 'Media 2', logo: null },
        { name: 'Media 3', logo: null },
    ],
    'COMMUNITY PARTNERS': [
        { name: 'Community 1', logo: null },
        { name: 'Community 2', logo: null },
        { name: 'Community 3', logo: null },
        { name: 'Community 4', logo: null },
    ],
};

function Sponsors() {
    return (
        <section className="section sponsors" id="sponsors">
            <SectionHeader text="LOADING_SECTION://SPONSORS" subtitle="// FETCHING ALLIANCE DATA..." />

            {Object.entries(SPONSORS).map(([tier, sponsors]) => (
                <div className="sponsors__tier" key={tier}>
                    <h3 className="sponsors__tier-title">{tier}</h3>
                    <div className="sponsors__grid" data-count={sponsors.length}>
                        {sponsors.map((s, i) => (
                            <div className="sponsors__logo-box" key={i}>
                                <span className="sponsors__placeholder">{s.name}</span>
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
