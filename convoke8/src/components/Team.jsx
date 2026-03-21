import './Team.css';
import SectionHeader from './SectionHeader';

const TEAM_DATA = {
    'FACULTY ADVISORS': [
        { name: 'Dr. Faculty Name', role: 'Faculty Advisor', initial: 'FA' },
        { name: 'Dr. Faculty Name', role: 'Faculty Co-Advisor', initial: 'FC' },
    ],
    'CORE TEAM': [
        { name: 'Coordinator Name', role: 'Overall Coordinator', initial: 'OC' },
        { name: 'Member Name', role: 'Technical Head', initial: 'TH' },
        { name: 'Member Name', role: 'Design Head', initial: 'DH' },
        { name: 'Member Name', role: 'Events Head', initial: 'EH' },
        { name: 'Member Name', role: 'Marketing Head', initial: 'MH' },
        { name: 'Member Name', role: 'Sponsorship Head', initial: 'SH' },
    ],
    'STUDENT COORDINATORS': [
        { name: 'Coordinator 1', role: 'Tech Events', initial: 'C1' },
        { name: 'Coordinator 2', role: 'Non-Tech Events', initial: 'C2' },
        { name: 'Coordinator 3', role: 'Logistics', initial: 'C3' },
        { name: 'Coordinator 4', role: 'PR & Outreach', initial: 'C4' },
    ],
};

function Team() {
    return (
        <section className="section team" id="team">
            <SectionHeader text="LOADING_SECTION://TEAM" subtitle="// ACCESSING PERSONNEL DATABASE..." />

            {Object.entries(TEAM_DATA).map(([group, members]) => (
                <div className="team__group" key={group}>
                    <h3 className="team__group-title">{group}</h3>
                    <div className="team__grid">
                        {members.map((m, i) => (
                            <div className="retro-card team__card" key={i}>
                                <div className="team__avatar">{m.initial}</div>
                                <div className="team__info">
                                    <span className="team__name">{m.name}</span>
                                    <span className="team__role">{m.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Team;
