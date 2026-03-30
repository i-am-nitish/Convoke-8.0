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

const chatWindow = document.getElementById("chatWindow");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");

let botState = "waitingForGreeting";

addMessage("bot", "Signal active. Type hello or hi to begin.");

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userMessage = chatInput.value.trim();
  if (!userMessage) {
    return;
  }

  addMessage("user", escapeHtml(userMessage));
  handleBotReply(userMessage);
  chatInput.value = "";
  chatInput.focus();
});

function handleBotReply(message) {
  const normalizedMessage = normalizeText(message);

  if (botState === "waitingForGreeting") {
    if (normalizedMessage === "hi" || normalizedMessage === "hello") {
      addMessage("bot", "kahan are you?");
      botState = "waitingForLocation";
      return;
    }

    addMessage("bot", 'Please type "Hi" or "hello" to start.');
    return;
  }

  if (botState === "waitingForLocation") {
    if (isCorrectLocation(message)) {
      addMessage(
        "bot",
        `Yeh raha aapka link: <a href="${FINAL_DESTINATION_LINK}" target="_blank" rel="noopener noreferrer">${FINAL_DESTINATION_LINK}</a>`
      );
      botState = "completed";
      return;
    }

    addMessage("bot", "Try again");
    return;
  }

  if (isCorrectLocation(message)) {
    addMessage(
      "bot",
      `Yeh raha aapka link: <a href="${FINAL_DESTINATION_LINK}" target="_blank" rel="noopener noreferrer">${FINAL_DESTINATION_LINK}</a>`
    );
    return;
  }

  addMessage("bot", "Try again");
}

function addMessage(sender, content) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.innerHTML = content;
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function normalizeText(value) {
  return value.trim().toLowerCase();
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
