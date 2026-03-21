import './Hackathon.css';
import SectionHeader from './SectionHeader';

function Hackathon() {
    return (
        <section className="section hackathon" id="hackathon">
            <SectionHeader text="LOADING_SECTION://HACKATHON" subtitle="// ACCESSING RESTRICTED FILES..." />

            <div className="hackathon__hero">
                <div className="hackathon__badge">★ FLAGSHIP EVENT ★</div>
                <h3 className="hackathon__title">24-HOUR HACKATHON</h3>
                <p className="hackathon__subtitle">Build. Innovate. Disrupt.</p>
            </div>

            <div className="hackathon__grid">
                <div className="retro-card hackathon__card">
                    <div className="hackathon__card-icon">📋</div>
                    <h4 className="hackathon__card-title">PROBLEM STATEMENTS</h4>
                    <p className="hackathon__card-text">
                        Multiple problem statements across domains — HealthTech, EdTech, FinTech, Sustainability,
                        and Open Innovation. Choose your challenge and build a working prototype.
                    </p>
                </div>

                <div className="retro-card hackathon__card">
                    <div className="hackathon__card-icon">⚖️</div>
                    <h4 className="hackathon__card-title">JUDGING CRITERIA</h4>
                    <ul className="hackathon__list">
                        <li><span className="hackathon__bullet">{'>'}</span> Innovation & Creativity — 30%</li>
                        <li><span className="hackathon__bullet">{'>'}</span> Technical Complexity — 25%</li>
                        <li><span className="hackathon__bullet">{'>'}</span> Impact & Feasibility — 25%</li>
                        <li><span className="hackathon__bullet">{'>'}</span> Presentation & Demo — 20%</li>
                    </ul>
                </div>

                <div className="retro-card hackathon__card">
                    <div className="hackathon__card-icon">🕐</div>
                    <h4 className="hackathon__card-title">TIMELINE</h4>
                    <ul className="hackathon__list">
                        <li><span className="hackathon__bullet">{'>'}</span> Registration Deadline: April 5</li>
                        <li><span className="hackathon__bullet">{'>'}</span> Hackathon Starts: April 9, 10:00 AM</li>
                        <li><span className="hackathon__bullet">{'>'}</span> Submissions: April 10, 10:00 AM</li>
                        <li><span className="hackathon__bullet">{'>'}</span> Judging & Results: April 11</li>
                    </ul>
                </div>

                <div className="retro-card hackathon__card">
                    <div className="hackathon__card-icon">👥</div>
                    <h4 className="hackathon__card-title">TEAM INFO</h4>
                    <ul className="hackathon__list">
                        <li><span className="hackathon__bullet">{'>'}</span> Team Size: 2-4 members</li>
                        <li><span className="hackathon__bullet">{'>'}</span> Open to all college students</li>
                        <li><span className="hackathon__bullet">{'>'}</span> Bring your own laptops</li>
                        <li><span className="hackathon__bullet">{'>'}</span> Mentors available on-site</li>
                    </ul>
                </div>
            </div>

            <div className="hackathon__cta">
                <a href="https://devnovate.co/event/hashhacks-convoke-90-ducic" className="retro-btn" target="_blank" rel="noopener noreferrer">
                    [ REGISTER FOR HACKATHON ]
                </a>
            </div>
        </section>
    );
}

export default Hackathon;
