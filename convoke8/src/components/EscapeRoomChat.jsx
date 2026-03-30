import { useState, useRef, useEffect } from 'react';
import './EscapeRoomChat.css';

const FINAL_DESTINATION_LINK = "https://svetlana2006.github.io/Escape_room_final_R2/";
const VALID_LOCATIONS = [
    "\u0938\u0902\u0915\u0941\u0932 \u0928\u0935\u092a\u094d\u0930\u0935\u0930\u094d\u0924\u0928 \u0915\u0947\u0902\u0926\u094d\u0930", // Sankul Navpravartan Kendra
    "\u0938\u0902\u0915\u0941\u0932 \u0928\u0935\u093e\u092a\u094d\u0930\u0935\u0930\u094d\u0924\u0928 \u0915\u0947\u0902\u0926\u094d\u0930", // Sankul Navapravartan Kendra
    "संकुल नवप्रवर्तन केंद्र",
    "संकुल नवाप्रवर्तन केंद्र",
    "संकुल नवप्रवर्तन केन्द्र",
    "संकुल नवाप्रवर्तन केन्द्र"
];

function isCorrectLocation(msg) {
    const cleanUser = msg.trim().replace(/\s+/g, " ");
    return VALID_LOCATIONS.some(loc => loc === cleanUser);
}

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function EscapeRoomChat() {
    const [messages, setMessages] = useState([
        { sender: 'bot', content: 'Signal active. Type hello or hi to begin.' }
    ]);
    const [botState, setBotState] = useState('waitingForGreeting');
    const [inputValue, setInputValue] = useState('');
    const chatWindowRef = useRef(null);

    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]);

    const addMessage = (sender, content) => {
        setMessages(prev => [...prev, { sender, content }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputValue.trim();
        if (!userMessage) return;

        addMessage('user', escapeHtml(userMessage));
        setInputValue('');

        const normalized = userMessage.trim().toLowerCase();

        if (botState === 'waitingForGreeting') {
            if (normalized === 'hi' || normalized === 'hello') {
                setTimeout(() => {
                    addMessage('bot', 'kahan are you?');
                    setBotState('waitingForLocation');
                }, 300);
            } else {
                setTimeout(() => addMessage('bot', 'Please type "Hi" or "hello" to start.'), 300);
            }
            return;
        }

        if (botState === 'waitingForLocation') {
            if (isCorrectLocation(userMessage)) {
                setTimeout(() => {
                    addMessage('bot', `Yeh raha aapka link: <a href="${FINAL_DESTINATION_LINK}" target="_blank" rel="noopener noreferrer">${FINAL_DESTINATION_LINK}</a>`);
                    setBotState('completed');
                }, 300);
            } else {
                setTimeout(() => addMessage('bot', 'Try again'), 300);
            }
            return;
        }

        if (isCorrectLocation(userMessage)) {
            setTimeout(() => {
                addMessage('bot', `Yeh raha aapka link: <a href="${FINAL_DESTINATION_LINK}" target="_blank" rel="noopener noreferrer">${FINAL_DESTINATION_LINK}</a>`);
            }, 300);
            return;
        }

        setTimeout(() => addMessage('bot', 'Try again'), 300);
    };

    return (
        <div className="escape-room">
            <div className="er-scanlines" aria-hidden="true"></div>
            <div className="er-grain" aria-hidden="true"></div>
            <div className="er-lava-floor" aria-hidden="true"></div>
            <div className="er-fog" aria-hidden="true"></div>

            <div className="er-spores" aria-hidden="true">
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span>
            </div>

            <div className="er-light-string" aria-hidden="true">
                <span className="er-bulb er-on"></span>
                <span className="er-bulb er-dim er-b3"></span>
                <span className="er-bulb er-on er-b4"></span>
                <span className="er-bulb er-dim er-b5"></span>
                <span className="er-bulb er-on er-b6"></span>
                <span className="er-bulb er-on"></span>
                <span className="er-bulb er-dim er-b3"></span>
                <span className="er-bulb er-on er-b4"></span>
                <span className="er-bulb er-dim"></span>
                <span className="er-bulb er-on er-b5"></span>
                <span className="er-bulb er-on er-b6"></span>
                <span className="er-bulb er-dim er-b3"></span>
            </div>

            <main className="er-page-shell">
                <section className="er-chat-card" aria-label="Escape room chatbot">
                    <header className="er-chat-header">
                        <div className="er-avatar" aria-hidden="true">C</div>
                        <div>
                            <p className="er-eyebrow">Convoke 8.0 signal channel</p>
                            <h1 data-text="Rift Chat">Rift Chat</h1>
                        </div>
                    </header>

                    <div className="er-chat-intro">
                        <p>The walls are listening. Only the right location opens the next path.</p>
                    </div>

                    <div className="er-chat-window" ref={chatWindowRef} aria-live="polite" aria-label="Chat messages">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`er-message er-${msg.sender}`}
                                dangerouslySetInnerHTML={{ __html: msg.content }}
                            />
                        ))}
                    </div>

                    <form className="er-chat-form" onSubmit={handleSubmit}>
                        <label className="er-sr-only" htmlFor="erChatInput">Type your message</label>
                        <input
                            id="erChatInput"
                            name="message"
                            type="text"
                            placeholder="Type Hi or hello to start"
                            autoComplete="off"
                            required
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit">Send</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default EscapeRoomChat;
