
let chatbotResponses = [{'intent': 'bluetooth', 'steps': ['Step 1: Check if Bluetooth is enabled on your phone.', 'Step 2: Ensure your phone is within 3 feet of the PWS.', 'Step 3: Restart the PWS and retry connecting.', "If unresolved, escalate the issue to HQ and provide the robot's serial number."], 'followup': 'If Bluetooth troubleshooting didn’t work, let me know what else I can assist with!'}, {'intent': 'wifi', 'steps': ['Step 1: Ensure your Wi-Fi network is set to 2.4 GHz.', 'Step 2: Check the Wi-Fi strength near the PWS.', 'Step 3: Restart your router and reconnect the app.', 'If unresolved, escalate the issue to HQ.'], 'followup': 'If Wi-Fi troubleshooting didn’t help, feel free to ask about other issues or escalate the case.'}];
let activeIntent = null;

document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("chatbotInput");
    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            handleChat();
        }
    });
});

function handleChat() {
    const input = document.getElementById("chatbotInput").value.toLowerCase();
    const messagesContainer = document.getElementById("chatbotMessages");

    // Add user's message
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.textContent = input;
    messagesContainer.appendChild(userMessage);

    let response = "";

    // Check for follow-up inputs
    if (activeIntent && (input.includes("didn't work") || input.includes("what now") || input.includes("still not working"))) {
        response = chatbotResponses.find(res => res.intent === activeIntent).followup;
        activeIntent = null; // Reset context after follow-up
    } else {
        // Intent matching
        const matchedIntent = chatbotResponses.find(res => input.includes(res.intent));
        if (matchedIntent) {
            activeIntent = matchedIntent.intent; // Track active intent
            response = "Here’s how to troubleshoot your issue:\n\n";
            matchedIntent.steps.forEach((step, index) => {
                response += (index + 1) + ". " + step + "\n";
            });
        } else {
            response = "I’m sorry, I couldn’t understand your query. Could you rephrase it or ask about a specific issue?";
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
