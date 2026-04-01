import { useState } from 'react';
import './Events.css';
import SectionHeader from './SectionHeader';

const EVENTS = {
    TECH: [
        { name: 'COMPETITIVE PROGRAMMING', desc: 'Battle it out with algorithms and data structures in this intense coding showdown.', team: '1', tag: 'CODE', register: '#' },
        { name: 'HashHacks', desc: '24-hour hackathon to build innovative solutions for real-world problems.', team: '1-4', tag: 'BUILD', register: 'https://devnovate.co/event/hashhacks-convoke-90-ducic' },
        { name: 'DATA SCIENCE — KNOWLEDGEQUARRY', desc: 'Dive deep into data, uncover patterns, and present insights.', team: '1-3', tag: 'DATA', register: 'https://devnovate.co/event/knowledgequarry-data-science-challenge-2' },
    ],
    'NON-TECH': [
        { name: 'GAMING', desc: 'Compete in popular esports titles and prove your gaming prowess.', team: '1-5', tag: 'GAME', register: '#' },
        { name: 'JUST A MIN (JAM)', desc: 'Extempore competition to test your spontaneity, clarity of thought, and confidence under pressure.', team: '1', tag: 'FUN', register: 'https://unstop.com/competitions/just-a-minute-jam-extempore-competition-convoke-80-university-of-delhi-du-new-delhi-1667560' },
        { name: 'IPL AUCTION', desc: 'Strategize and build your dream cricket team in this auction simulation.', team: '1-3', tag: 'BID', register: 'https://unstop.com/o/ELgz6eZ' },
        { name: 'TREASURE HUNT', desc: 'Decode clues, solve puzzles, and race to find the hidden treasure.', team: '3-5', tag: 'HUNT', register: '#'  },
        { name: 'ESCAPE ROOM', desc: 'Solve mysteries and escape before time runs out in this thrilling challenge.', team: '3-4', tag: 'ESC', register: 'https://unstop.com/competitions/escape-room-cluster-innovation-centre-ducic-university-of-delhi-du-delhi-1659155'  },
        { name: 'QUIZ', desc: 'A fun general knowledge quiz spanning multiple genres and domains.', team: '1-3', tag: 'QUIZ', register: 'https://unstop.com/quiz/quiztopia-convoke-80-university-of-delhi-du-new-delhi-1667540'  },
        { name: 'CODE THE COUTURE', desc: 'Decode clues, solve puzzles, and race to find the hidden treasure.', team: '1-2', tag: 'DSGN', register: 'https://unstop.com/competitions/code-the-couture-convoke-80-convoke-80-cluster-innovation-centre-university-of-delhi-du-new-delhi-1664091'  },
    ],
    'MINI': [
        { name: 'SPEED TYPING', desc: 'How fast can your fingers fly? Race against the clock.', team: '1', tag: 'TYPE', register: '#'  },
        { name: 'MEME WARS', desc: 'Create the dankest memes and win hearts (and prizes).', team: '1', tag: 'MEME', register: '#'  },
        { name: 'TECH DEBATE', desc: 'Argue your stance on the hottest tech topics.', team: '1-2', tag: 'TALK', register: '#'  },
        { name: 'UI/UX CHALLENGE', desc: 'Design sleek interfaces under time pressure.', team: '1-2', tag: 'DSGN', register: '#'  },
    ],
    'ROBOTICS': [
        { name: 'LINE FOLLOWER', desc: 'Build a robot that can detect and follow a path with accuracy and efficiency. This challenge tests your control systems, sensor integration, and optimization skills.', team: '2-4', tag: 'BOT', register: 'https://unstop.com/o/q9XGpDw?lb=0zB3TEoO&utm_medium=Share&utm_source=saisao36725&utm_campaign=Competitions'  },

        { name: 'ROBO SOCCER', desc: 'Build and control your bot to dribble, pass, and score in an exciting robotic football match. Strategy, teamwork, and control are key to victory.', team: '2-4', tag: 'WAR', register: 'https://unstop.com/o/P4Oychd?lb=0zB3TEoO&utm_medium=Share&utm_source=saisao36725&utm_campaign=Competitions'  },
        
        { name: 'MICRO MOUSE', desc: 'Design an autonomous robot to navigate a maze and reach the goal in minimum time. It’s a true test of algorithms, logic, and smart decision-making.', team: '2-4', tag: 'NAV', register:'https://unstop.com/o/kDhVMyu?lb=0zB3TEoO&utm_medium=Share&utm_source=saisao36725&utm_campaign=Competitions' },
        // { name: 'TERRAIN TRAVERSER', desc: 'Design sleek interfaces under time pressure.', team: '2-4', tag: 'TRACK' , register: '#' },
    ],
};

const TABS = Object.keys(EVENTS);

function Events() {
    const [activeTab, setActiveTab] = useState('TECH');

    return (
        <section className="section events" id="events">
            <SectionHeader text="LOADING_SECTION://EVENTS" subtitle="// SCANNING EVENT DATABASE..." />

            {/* Tabs */}
            <div className="events__tabs">
                {TABS.map(tab => (
                    <button
                        key={tab}
                        className={`events__tab ${activeTab === tab ? 'events__tab--active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        [{tab}]
                    </button>
                ))}
            </div>

            {/* Event Grid */}
            <div className="events__grid">
                {EVENTS[activeTab].map((event, i) => (
                    <div className="retro-card events__card" key={event.name} style={{ animationDelay: `${i * 0.08}s` }}>
                        <div className="events__card-tag">{event.tag}</div>
                        <h3 className="events__card-name">{event.name}</h3>
                        <p className="events__card-desc">{event.desc}</p>
                        <div className="events__card-footer">
                            <span className="events__card-team">TEAM: {event.team}</span>
                            <a href={event.register} className="retro-btn retro-btn--small" target="_blank" rel="noopener noreferrer">
                                REGISTER
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Events;
