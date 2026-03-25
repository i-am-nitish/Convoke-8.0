import './Team.css';
import SectionHeader from './SectionHeader';
import { playSelectSound } from '../utils/audio';

const TEAM_DATA = {
    'CORE TEAM': [
        
        
        { 
            name: 'Abitatha Roy', 
            role: 'Human Resources, Outreach & Event Organizer', 
            image: '/team_photos/abitatha_roy.jpeg',
            linkedin: 'https://linkedin.com/in/abitatha'
        },
        
        { 
            name: 'Sai Prashant Sao', 
            role: 'Robotics Head', 
            image: '/team_photos/prashant_sao.jpeg',
            linkedin: 'https://www.linkedin.com/in/sai-prashant-sao-496122289'
        },
        { 
            name: 'Sajal Samveg', 
            role: 'Design Head', 
            image: '/team_photos/sajal_samveg.jpeg',
            linkedin: 'https://www.linkedin.com/in/sajalsamveg'
        },
        
        
        { 
            name: 'Debasmi Basu', 
            role: 'Human Resources & Event Organizer',
            image: '/team_photos/debasmi_basu.jpeg',
            linkedin: 'https://www.linkedin.com/in/debasmi-basu-513726288'
        },
        { 
            name: 'Vijay Samant', 
            role: 'Tech Head', 
            image: '/team_photos/vijay_samant.jpeg',
            linkedin: 'https://linkedin.com/in/vijay-samant'
        },
        
    ],
    'ORGANIZING TEAM': [
        { 
            name: 'Abarna A', 
            role: 'Event Organizer', 
            image: '/team_photos/abarna_a.jpeg',
            linkedin: 'https://linkedin.com/in/abarna-a'
        },
        { 
            name: 'Abhi Singh', 
            role: 'Event Organizer', 
            image: '/team_photos/abhi_singh.jpeg',
            linkedin: 'https://linkedin.com/in/abhi-singh'
        },
        { 
            name: 'Ahrnish Dahal', 
            role: 'Event Organizer',
            image: '/team_photos/ahrnish_dahal.jpeg',
            linkedin: 'https://linkedin.com/in/ahrnish-dahal'
        },
        { 
            name: 'Amitesh Mahapatra', 
            role: 'Event Organizer',
            image: '/team_photos/amitesh_m.jpeg',
            linkedin: 'https://linkedin.com/in/amitesh-m'
        },
        { 
            name: 'Atharva Tadse', 
            role: 'Design',
            image: '/team_photos/atharva_t.jpeg',
            linkedin: 'https://linkedin.com/in/atharva-t'
        },
        { 
            name: 'Anushka Sharma', 
            role: 'Event Organizer', 
            image: '/team_photos/anushka_sharma.jpeg',
            linkedin: 'https://www.linkedin.com/in/anushka-sharma-aba5bb285'
        },
        { 
            name: 'Harsh Lodhi', 
            role: 'Event Organizer',
            image: '/team_photos/harsh_lodhi.jpeg',
            linkedin: 'https://linkedin.com/in/harsh-lodhi'
        },
        { 
            name: 'Harshit Singh', 
            role: 'Event Organizer',
            image: '/team_photos/harshit_singh.jpeg',
            linkedin: 'https://linkedin.com/in/harshit-singh'
        },
        { 
            name: 'Jaskaran Singh', 
            role: 'Event Organizer',
            image: '/team_photos/jaskaran_singh.jpeg',
            linkedin: 'https://www.linkedin.com/in/jaskaransingh1808'
        },
        { 
            name: 'Navtez Singh', 
            role: 'Event Organizer',
            image: '/team_photos/navtej_bambra.jpeg',
            linkedin: 'https://linkedin.com/in/navtej'
        },
        { 
            name: 'Paras Yadav', 
            role: 'Event Organizer',
            image: '/team_photos/paras_yadav.jpeg',
            linkedin: 'https://linkedin.com/in/paras-yadav'
        },
        { 
            name: 'Prakhar Raghuwanshi', 
            role: 'Event Organizer', 
            image: '/team_photos/prakhar_r.jpeg',
            linkedin: 'https://linkedin.com/in/prakhar-r'
        },
        { 
            name: 'Prateeksha', 
            role: 'Event Organizer', 
            image: '/team_photos/prateeksha_y.jpeg',
            linkedin: 'https://linkedin.com/in/prateeksha-y'
        },
        { 
            name: 'Pratham Singh Chauhan', 
            role: 'Event Organizer', 
            image: '/team_photos/pratham_c.jpeg',
            linkedin: 'https://www.linkedin.com/in/pratham-singh-chauhan-306624288'
        },
        { 
            name: 'Priyanshu Yadav', 
            role: 'Event Organizer', 
            image: '/team_photos/priyanshu_y.jpeg',
            linkedin: 'https://linkedin.com/in/priyanshuyadav08'
        },
        { 
            name: 'Rajanya Roy', 
            role: 'Design Team', 
            image: '/team_photos/rajanya_roy.jpeg',
            linkedin: 'https://www.linkedin.com/in/rajanya-roy-barman-270577222'
        },
        { 
            name: 'Ravina Rastogi', 
            role: 'Event Organizer', 
            image: '/team_photos/ravina_rastogi.jpeg',
            linkedin: 'https://www.linkedin.com/in/ravina-rastogi'
        },
        { 
            name: 'Sujatro Bhadra', 
            role: 'Event Organizer', 
            image: '/team_photos/sujatro_bhadra.jpeg',
            linkedin: ''
        },
        { 
            name: 'Svetlana Neogi', 
            role: 'Event Organizer', 
            image: '/team_photos/svetlana_neogi.jpeg',
            linkedin: 'https://www.linkedin.com/in/svetlana-neogi-939549204'
        },
        { 
            name: 'Tanishk Tiwari', 
            role: 'Event Organizer', 
            image: '/team_photos/tanishk_tiwari.jpeg',
            linkedin: 'https://linkedin.com/in/tanishk-tiwari'
        },
        { 
            name: 'Varun Jogi', 
            role: 'Event Organizer',
            image: '/team_photos/varun_jogi.jpeg',
            linkedin: 'https://linkedin.com/in/varun-jogi'
        },
    ],
};

function Team() {
    const handleCardClick = (member) => {
        playSelectSound();
        if (member.linkedin) {
            window.open(member.linkedin, '_blank');
        }
    };

    return (
        <section className="section team" id="team">
            <SectionHeader text="LOADING_SECTION://TEAM" subtitle="// ACCESSING PERSONNEL DATABASE..." />

            {Object.entries(TEAM_DATA).map(([group, members]) => (
                <div className="team__group" key={group}>
                    <h3 className="team__group-title">{group}</h3>
                    <div className="team__grid">
                        {members.map((member, i) => (
                            <div 
                                className="team__card" 
                                key={i}
                                data-group={group}
                                onClick={() => handleCardClick(member)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        handleCardClick(member);
                                    }
                                }}
                            >
                                <div className="team__card-inner">
                                    <div className="team__image-wrapper">
                                        <img 
                                            src={member.image} 
                                            alt={member.name}
                                            className="team__image"
                                        />
                                        <div className="team__image-overlay"></div>
                                    </div>
                                    <div className="team__details">
                                        <h4 className="team__card-name">{member.name}</h4>
                                        <p className="team__card-role">{member.role}</p>
                                        <p className="team__card-link">→ LinkedIn Profile</p>
                                    </div>
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
