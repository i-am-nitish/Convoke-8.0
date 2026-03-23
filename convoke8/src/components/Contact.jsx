import './Contact.css';
import SectionHeader from './SectionHeader';

function Contact() {
    return (
        <>
            <section className="section contact" id="contact">
                <SectionHeader text="LOADING_SECTION://CONTACT" subtitle="// OPENING COMMUNICATION CHANNELS..." />

                <div className="contact__grid">
                    <div className="retro-card contact__card">
                        <h3 className="contact__card-title">EMAIL</h3>
                        <a href="mailto:convoke@cic.du.ac.in" className="contact__link">
                            convoke@cic.du.ac.in
                        </a>
                    </div>

                    <div className="retro-card contact__card">
                        <h3 className="contact__card-title">PHONE</h3>
                        <a href="tel:+919836962506" className="contact__link">
                            ABITATHA: +91 98369 62506
                        </a>
                        <br/>
                        <br/>
                        <a href="tel:+917439640610" className="contact__link">
                            DEBASMI: +91 7439 640 610
                        </a>
                    </div>

                    <div className="retro-card contact__card">
                        <h3 className="contact__card-title">LOCATION</h3>
                        <p className="contact__text">
                            Cluster Innovation Centre<br />
                            University Stadium<br />
                            University of Delhi, North Campus<br />
                            New Delhi — 110007
                        </p>
                    </div>

                    <div className="retro-card contact__card">
                        <h3 className="contact__card-title">SOCIALS</h3>
                        <div className="contact__socials">
                            <a href="https://instagram.com/convoke_cic" target="_blank" rel="noopener noreferrer" className="contact__social">
                                [ INSTAGRAM ]
                            </a>
                            <a href="https://linkedin.com/company/convoke-du-cic" target="_blank" rel="noopener noreferrer" className="contact__social">
                                [ LINKEDIN ]
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="pixel-divider"></div>
                <div className="footer__content">
                    <div className="footer__logo">
                        <span className="footer__logo-bracket">[</span>
                        CONVOKE 8.0
                        <span className="footer__logo-bracket">]</span>
                    </div>
                    <p className="footer__text">
                        THE ANNUAL TECH FEST OF CLUSTER INNOVATION CENTRE, UNIVERSITY OF DELHI
                    </p>
                    <div className="footer__links">
                        <a href="https://instagram.com/convoke_cic" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                        <span>|</span>
                        <a href="https://linkedin.com/company/convoke-du-cic" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                    </div>
                    <p className="footer__copy">
                        © 2026 CONVOKE • CLUSTER INNOVATION CENTRE • UNIVERSITY OF DELHI
                    </p>
                    <p className="footer__credits">
                        {'>'} CRAFTED WITH <span className="footer__heart">♥</span> AT CIC
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Contact;
