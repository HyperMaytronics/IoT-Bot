
const chatbotResponses = [
    {
        "keywords": ["connectivity", "wifi", "connection issue"],
        "response": "Ensure your Wi-Fi network is set to 2.4 GHz and has a strong signal near the PWS. Reset the PWS and reconnect the app."
    },
    {
        "keywords": ["bluetooth", "bluetooth issue"],
        "response": "Ensure Bluetooth is enabled on your phone and you are within 3 feet of the PWS. Restart the PWS and try reconnecting."
    },
    {
        "keywords": ["robot not responding", "communication issue"],
        "response": "Check the blue cable for damage or water penetration. Restart the robot and ensure it's properly connected to the PWS."
    }
];

function handleChat() {
    const input = document.getElementById("chatbotInput").value.toLowerCase();
    const messagesContainer = document.getElementById("chatbotMessages");

    // Add user's message
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.textContent = input;
    messagesContainer.appendChild(userMessage);

    // Find matching response
    let response = "I'm sorry, I couldn't find a solution. Please try rephrasing.";
    for (let entry of chatbotResponses) {
        for (let keyword of entry.keywords) {
            if (input.includes(keyword)) {
                response = entry.response;
                break;
            }
        }
    }

    // Add bot's response
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");
    botMessage.textContent = response;
    messagesContainer.appendChild(botMessage);

    // Clear input field and scroll to bottom
    document.getElementById("chatbotInput").value = "";
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
