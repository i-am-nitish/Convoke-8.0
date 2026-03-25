import { useState } from 'react';
import './FAQ.css';
import SectionHeader from './SectionHeader';

const FAQS = [
    {
        q: 'WHO CAN PARTICIPATE?',
        a: 'CONVOKE 8.0 is open to all college students across India. Some events may have specific eligibility criteria mentioned in their descriptions.',
    },
    {
        q: 'WHAT ARE THE REGISTRATION FEES?',
        a: 'Registration fees vary by event. Most individual events range from ₹100-₹300 per team. Hackathon registration is ₹200 per team. Check individual event pages for exact pricing.',
    },
    {
        q: 'WHAT IS THE TEAM SIZE FOR EVENTS?',
        a: 'Team sizes vary per event — from individual participation to teams of 5. Each event listing specifies the allowed team size on the Events section.',
    },
    {
        q: 'WHERE IS THE VENUE?',
        a: 'CONVOKE 8.0 is held at Cluster Innovation Centre (CIC), University of Delhi, 3rd Floor, University Stadium, North Campus.',
    },
    {
        q: 'WHEN DOES CONVOKE 8.0 START?',
        a: 'CONVOKE 8.0 runs from April 9th to April 11th, 2026. Check the Schedule section for the detailed timeline.',
    },
    {
        q: 'CAN I PARTICIPATE IN MULTIPLE EVENTS?',
        a: 'Yes! You can register for multiple events as long as they don\'t have time conflicts. Check the schedule to plan accordingly.',
    },
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="section faq" id="faq">
            <SectionHeader text="LOADING_SECTION://FAQ" subtitle="// QUERYING KNOWLEDGE BASE..." />

            <div className="faq__list">
                {FAQS.map((item, i) => (
                    <div
                        className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
                        key={i}
                    >
                        <button className="faq__question" onClick={() => toggle(i)}>
                            <span className="faq__q-prefix">{'>'}</span>
                            <span className="faq__q-text">{item.q}</span>
                            <span className="faq__toggle">{openIndex === i ? '[-]' : '[+]'}</span>
                        </button>
                        {openIndex === i && (
                            <div className="faq__answer">
                                <span className="faq__a-prefix">{'>>>'}</span>
                                {item.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;
