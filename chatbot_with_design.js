
let chatbotResponses = [{'intent': 'bluetooth', 'response': "\n**Steps to Troubleshoot Bluetooth Issues**:\n1. Ensure Bluetooth is enabled on your phone.\n2. Make sure your phone is within **3 feet** of the PWS.\n3. Restart the PWS and retry connecting.\n4. If unresolved, escalate the issue to HQ and provide the robot's serial number.\n\n**Need More Help?** Let me know what else I can assist you with!\n        "}, {'intent': 'wifi', 'response': '\n**Steps to Troubleshoot Wi-Fi Issues**:\n1. Ensure your Wi-Fi network is set to **2.4 GHz**.\n2. Check the Wi-Fi strength near the PWS.\n3. Restart your router and reconnect the app.\n4. If unresolved, escalate the issue to HQ.\n\n**Still Not Working?** Feel free to ask about other issues or escalate the case.\n        '}];

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

    // Intent matching with smarter NLP approximation (basic)
    const matchedResponse = chatbotResponses.find(res => input.includes(res.intent));

    if (matchedResponse) {
        response = matchedResponse.response;
    } else {
        response = "I’m sorry, I couldn’t understand your query. Could you rephrase it or ask about a specific issue?";
    }

    // Add bot's response with formatting
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");
    botMessage.innerHTML = response; // Allow formatted HTML response
    messagesContainer.appendChild(botMessage);

    // Clear input field and scroll to bottom
    document.getElementById("chatbotInput").value = "";
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
