import './Gallery.css';
import SectionHeader from './SectionHeader';

const GALLERY_ITEMS = [
    { label: 'Hackathon 7.0', category: 'EVENT' },
    { label: 'Robotics Arena', category: 'EVENT' },
    { label: 'Winning Team — Hackathon', category: 'WINNERS' },
    { label: 'Workshop on AI/ML', category: 'WORKSHOP' },
    { label: 'Gaming Tournament', category: 'EVENT' },
    { label: 'Prize Ceremony', category: 'WINNERS' },
    { label: 'CP Marathon', category: 'EVENT' },
    { label: 'Team CONVOKE 7.0', category: 'TEAM' },
];

function Gallery() {
    return (
        <section className="section gallery" id="gallery">
            <SectionHeader text="LOADING_SECTION://GALLERY" subtitle="// LOADING ARCHIVED MEMORIES..." />

            <div className="gallery__grid">
                {GALLERY_ITEMS.map((item, i) => (
                    <div className="gallery__item" key={i}>
                        <div className="gallery__placeholder">
                            <span className="gallery__placeholder-icon">📷</span>
                            <span className="gallery__placeholder-text">{item.label}</span>
                        </div>
                        <div className="gallery__overlay">
                            <span className="gallery__category">[{item.category}]</span>
                            <span className="gallery__label">{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            <p className="gallery__note">
        // MORE PHOTOS FROM PREVIOUS EDITIONS COMING SOON...
            </p>
        </section>
    );
}

export default Gallery;
