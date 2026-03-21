import './About.css';
import SectionHeader from './SectionHeader';

function About() {
    return (
        <section className="section about" id="about">
            <SectionHeader text="LOADING_SECTION://ABOUT" subtitle="// DECRYPTING MISSION FILES..." />

            <div className="about__grid">
                <div className="retro-card about__card reveal">
                    <div className="about__card-header">
                        <span className="about__icon">◆</span>
                        WHAT_IS_CONVOKE
                    </div>
                    <p className="about__text">
                        CONVOKE is the annual tech fest of <span className="about__highlight">Cluster Innovation Centre</span>,
                        University of Delhi. Now in its 8th season, CONVOKE brings together the brightest minds
                        to compete, innovate, and create. From intense hackathons to mind-bending quizzes,
                        from robotics battles to gaming showdowns — CONVOKE 8.0 is where technology meets adrenaline.
                    </p>
                </div>

                <div className="retro-card about__card reveal">
                    <div className="about__card-header">
                        <span className="about__icon">◆</span>
                        VISION_8.0
                    </div>
                    <p className="about__text">
                        Season 8 embraces the retro-futuristic spirit — blending <span className="about__highlight">8-bit nostalgia</span> with
                        cutting-edge innovation. We believe in pushing boundaries, breaking conventions, and
                        building the future one pixel at a time. This year&apos;s theme celebrates the origins of computing
                        while looking forward to what&apos;s next.
                    </p>
                </div>

                <div className="retro-card about__card reveal">
                    <div className="about__card-header">
                        <span className="about__icon">◆</span>
                        OUR_LEGACY
                    </div>
                    <p className="about__text">
                        Over 7 successful seasons, CONVOKE has hosted <span className="about__highlight">5000+ participants</span>,
                        <span className="about__highlight">50+ events</span>, and countless memories. From humble beginnings in the
                        corridors of CIC to becoming one of Delhi University&apos;s most anticipated tech fests, our journey
                        has been driven by passion and innovation.
                    </p>
                </div>

                <div className="retro-card about__card reveal">
                    <div className="about__card-header">
                        <span className="about__icon">◆</span>
                        CLUSTER_INNOVATION_CENTRE
                    </div>
                    <p className="about__text">
                        CIC is a premier interdisciplinary centre at the University of Delhi, known for its
                        innovative approach to education. Established to foster creativity and research, CIC
                        combines <span className="about__highlight">Mathematics, IT, and Humanities</span> to produce well-rounded innovators
                        ready to tackle real-world challenges.
                    </p>
                </div>
            </div>

            {/* Stats bar */}
            <div className="about__stats reveal">
                <div className="about__stat">
                    <span className="about__stat-num">8</span>
                    <span className="about__stat-label">SEASONS</span>
                </div>
                <div className="about__stat-sep">|</div>
                <div className="about__stat">
                    <span className="about__stat-num">5K+</span>
                    <span className="about__stat-label">PARTICIPANTS</span>
                </div>
                <div className="about__stat-sep">|</div>
                <div className="about__stat">
                    <span className="about__stat-num">50+</span>
                    <span className="about__stat-label">EVENTS</span>
                </div>
                <div className="about__stat-sep">|</div>
                <div className="about__stat">
                    <span className="about__stat-num">3</span>
                    <span className="about__stat-label">DAYS</span>
                </div>
            </div>
        </section>
    );
}

export default About;
