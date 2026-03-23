import { useState } from 'react';
import './Schedule.css';
import SectionHeader from './SectionHeader';

const SCHEDULE = {
    'DAY 1 — APR 9': [
        { time: '09:00', event: 'QUIZ CHALLENGE', type: 'fun' },
        { time: '10:00', event: 'JUST A MIN (JAM)', type: 'fun' },
        { time: '10:00', event: 'IPL AUCTION', type: 'fun' },
        { time: '10:00', event: 'PHOTOGRAPHY', type: 'fun' },
        { time: '10:00', event: 'TREASURE HUNT', type: 'fun' },
        { time: '10:00', event: 'LINE FOLLOWER', type: 'robotics' },
        { time: '11:00', event: 'COMPETITIVE PROGRAMMING', type: 'tech' },
        { time: '11:00', event: 'ROBO SOCCER', type: 'robotics' },
        { time: '13:00', event: 'CODE THE COUTURE', type: 'fun' },
        { time: '18:00', event: 'END OF DAY 1', type: 'EOD1' },
    ],
    'DAY 2 — APR 10': [
        { time: '10:00', event: 'KNOWLEDGE QUARRY', type: 'tech' },
        { time: '10:00', event: 'ESCAPE ROOM', type: 'fun' },
        { time: '11:00', event: 'ROBO WAR', type: 'robotics' },
        { time: '11:00', event: 'MICRO MOUSE', type: 'robotics' },
        { time: '11:00', event: 'HashHacks - HACKATHON START', type: 'tech' },
        { time: '15:00', event: 'GAMING', type: 'fun' },
    ],
    'DAY 3 — APR 11': [
        { time: '11:00', event: 'HACKATHON SUBMISSIONS', type: 'tech' },
        { time: '12:00', event: 'LUNCH BREAK', type: 'break' },
        { time: '14:00', event: 'HACKATHON JUDGING & DEMOS', type: 'tech' },
    ],
};

const DAYS = Object.keys(SCHEDULE);

function Schedule() {
    const [activeDay, setActiveDay] = useState(DAYS[0]);

    const typeColor = (type) => {
        switch (type) {
            case 'tech': return 'var(--cyan)';
            case 'fun': return 'var(--green)';
            case 'ceremony': return 'var(--amber-bright)';
            default: return 'var(--amber-dim)';
        }
    };

    return (
        <section className="section schedule" id="schedule">
            <SectionHeader text="LOADING_SECTION://SCHEDULE" subtitle="// RETRIEVING TIMELINE DATA..." />

            {/* Day Tabs */}
            <div className="schedule__tabs">
                {DAYS.map(day => (
                    <button
                        key={day}
                        className={`events__tab ${activeDay === day ? 'events__tab--active' : ''}`}
                        onClick={() => setActiveDay(day)}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* Timeline */}
            <div className="schedule__timeline">
                {SCHEDULE[activeDay].map((item, i) => (
                    <div className="schedule__item" key={i} style={{ animationDelay: `${i * 0.06}s` }}>
                        <div className="schedule__time">{item.time}</div>
                        <div className="schedule__dot" style={{ borderColor: typeColor(item.type) }}>
                            <span style={{ background: typeColor(item.type) }}></span>
                        </div>
                        <div className="schedule__event">
                            <span className="schedule__event-name">{item.event}</span>
                            <span className="schedule__event-type" style={{ color: typeColor(item.type) }}>
                                [{item.type.toUpperCase()}]
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Schedule;
