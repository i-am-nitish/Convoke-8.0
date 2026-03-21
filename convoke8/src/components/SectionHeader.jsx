import { useTypewriter } from '../hooks/useTypewriter';
import './SectionHeader.css';

/**
 * Reusable section header with typewriter effect.
 * Text types out as user scrolls to the section.
 * Plays circuit buzz + typing sounds.
 */
function SectionHeader({ text, subtitle }) {
    const { ref, displayText, isDone } = useTypewriter(text, 30);

    return (
        <div className="section-header-wrap" ref={ref}>
            <h2 className="section-header">
                <span className="section-header__prefix">&gt; </span>
                <span className="section-header__text">
                    {displayText}
                    {!isDone && <span className="section-header__cursor">█</span>}
                </span>
            </h2>
            {subtitle && (
                <p className={`section-subheader ${isDone ? 'section-subheader--visible' : ''}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}

export default SectionHeader;
