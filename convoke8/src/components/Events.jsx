import { useState } from 'react';
import './Events.css';
import SectionHeader from './SectionHeader';

const EVENTS = {
    TECH: [
        { name: 'COMPETITIVE PROGRAMMING', desc: 'Battle it out with algorithms and data structures in this intense coding showdown.', team: '1', tag: 'CODE', register: '#' },
        { name: 'HACKATHON', desc: '24-hour hackathon to build innovative solutions for real-world problems.', team: '2-4', tag: 'BUILD', register: 'https://devnovate.co/event/hashhacks-convoke-90-ducic' },
        { name: 'DATA SCIENCE — KNOWLEDGEQUARRY', desc: 'Dive deep into data, uncover patterns, and present insights.', team: '1-3', tag: 'DATA', register: 'https://devnovate.co/event/knowledgequarry-data-science-challenge-2' },
        // { name: 'TECHNICAL QUIZ', desc: 'Test your knowledge across technology, science, and innovation.', team: '2-3', tag: 'QUIZ' },
    ],
    'NON-TECH': [
        { name: 'GAMING', desc: 'Compete in popular esports titles and prove your gaming prowess.', team: '1-5', tag: 'GAME', register: '#' },
        { name: 'IPL AUCTION', desc: 'Strategize and build your dream cricket team in this auction simulation.', team: '3-5', tag: 'BID', register: '#' },
        { name: 'TREASURE HUNT', desc: 'Decode clues, solve puzzles, and race to find the hidden treasure.', team: '3-5', tag: 'HUNT', register: '#'  },
        { name: 'ESCAPE ROOM', desc: 'Solve mysteries and escape before time runs out in this thrilling challenge.', team: '2-4', tag: 'ESC', register: '#'  },
        { name: 'QUIZ', desc: 'A fun general knowledge quiz spanning multiple genres and domains.', team: '2-3', tag: 'QUIZ', register: '#'  },
        { name: 'CODE THE COUTURE', desc: 'Decode clues, solve puzzles, and race to find the hidden treasure.', team: '1', tag: 'DSGN', register: '#'  },
    ],
    'MINI': [
        { name: 'SPEED TYPING', desc: 'How fast can your fingers fly? Race against the clock.', team: '1', tag: 'TYPE', register: '#'  },
        { name: 'MEME WARS', desc: 'Create the dankest memes and win hearts (and prizes).', team: '1', tag: 'MEME', register: '#'  },
        { name: 'TECH DEBATE', desc: 'Argue your stance on the hottest tech topics.', team: '1-2', tag: 'TALK', register: '#'  },
        { name: 'UI/UX CHALLENGE', desc: 'Design sleek interfaces under time pressure.', team: '1-2', tag: 'DSGN', register: '#'  },
    ],
    'ROBOTICS': [
        { name: 'LINE FOLLOWER', desc: 'How fast can your fingers fly? Race against the clock.', team: '1', tag: 'BOT', register: '#'  },
        { name: 'ROBO SOCCER', desc: 'Create the dankest memes and win hearts (and prizes).', team: '1', tag: 'WAR', register: '#'  },
        { name: 'MICRO MOUSE', desc: 'Argue your stance on the hottest tech topics.', team: '1-2', tag: 'NAV' },
        { name: 'TERRAIN TRAVERSER', desc: 'Design sleek interfaces under time pressure.', team: '1-2', tag: 'TRACK' , register: '#' },
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
