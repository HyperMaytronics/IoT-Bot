
const chatbotLogic = (input) => {
    // Replace with actual chatbot logic
    const responses = {
        "wifi": "Check if your router is on and broadcasting at 2.4GHz.",
        "otp": "Ensure your registered email is correct and check your spam folder.",
        "robot offline": "Restart your app and ensure the robot is within range.",
        "app crash": "Update the app to the latest version and restart your device.",
        "bluetooth issues": "Ensure Bluetooth is enabled and within range.",
    };
    
    for (const key in responses) {
        if (input.toLowerCase().includes(key)) {
            return [responses[key], "Follow the steps and try again."];
        }
    }
    
    return ["I'm sorry, I couldn't understand your query. Please consult HQ or team leads.", null];
};
const options = {
    includeScore: true,
    threshold: 0.3,  // This controls how "fuzzy" the matching is. Lower is stricter.
};

// Array of objects that represent chatbot intents and responses
const responses = [
    { intent: "wifi", response: "Check if your router is on and broadcasting at 2.4GHz." },
    { intent: "otp", response: "Ensure your registered email is correct and check your spam folder." },
    { intent: "robot offline", response: "Restart your app and ensure the robot is within range." },
    { intent: "app crash", response: "Update the app to the latest version and restart your device." },
    { intent: "bluetooth issues", response: "Ensure Bluetooth is enabled and within range." }
];

// Initialize Fuse with the responses array
const fuse = new Fuse(responses, options);
