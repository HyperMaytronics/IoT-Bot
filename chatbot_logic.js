
// Chatbot Response Database
const chatbotResponses = [
    {
        "intents": ["wifi", "internet not working", "cannot connect to wifi"],
        "response": `**Steps to Troubleshoot Wi-Fi Issues**:
        1. Ensure your Wi-Fi network is set to **2.4 GHz**.
        2. Check the Wi-Fi strength near the PWS.
        3. Restart your router and reconnect the app.
        4. If unresolved, escalate to HQ.`,
        "followUp": `If the above steps didn't help, confirm specific errors or retry the steps. Escalate with detailed observations to HQ.`
    },
    {
        "intents": ["otp", "not receiving otp", "incorrect otp"],
        "response": `**Steps to Resolve OTP Issues**:
        1. Verify the registered email address is correct.
        2. Check spam/junk folders for the OTP email.
        3. Request a new OTP if the previous one expired.
        4. If unresolved, escalate to HQ with the customer's email.`,
        "followUp": `If this doesn't resolve the issue, escalate to leadership or HQ with specific details like timestamps or errors.`
    },
    {
        "intents": ["fallback"],
        "response": `I'm sorry, but I'm unable to provide an answer to this query. Please consult your team leads or HQ for further guidance. Thank you for your understanding!`
    }
];

// Chatbot Processing Function
function processChatbotQuery(input) {
    let lowerInput = input.toLowerCase();
    let matchedResponse = chatbotResponses.find(response =>
        response.intents.some(intent => lowerInput.includes(intent))
    );
    return matchedResponse
        ? matchedResponse.response
        : chatbotResponses.find(response => response.intents.includes("fallback")).response;
}

// Chatbot User Interface
document.querySelector("#chatSubmit").addEventListener("click", () => {
    let userInput = document.querySelector("#chatInput").value;
    let botResponse = processChatbotQuery(userInput);
    document.querySelector("#chatOutput").innerText = botResponse;
});
