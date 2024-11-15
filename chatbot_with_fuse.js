// Initialize Fuse.js options
const options = {
    includeScore: true,
    threshold: 0.3,  // This controls how "fuzzy" the matching is. Lower is stricter.
};

// Define the responses
const responses = [
    { intent: "wifi", response: "Check if your router is on and broadcasting at 2.4GHz." },
    { intent: "otp", response: "Ensure your registered email is correct and check your spam folder." },
    { intent: "robot offline", response: "Restart your app and ensure the robot is within range." },
    { intent: "app crash", response: "Update the app to the latest version and restart your device." },
    { intent: "bluetooth issues", response: "Ensure Bluetooth is enabled and within range." }
];

// Initialize Fuse with the responses array
const fuse = new Fuse(responses, options);

// Define chatbot logic
const chatbotLogic = (input) => {
    // Use Fuse.js to search for the best match for the input
    const result = fuse.search(input);

    // If a result is found and the score is acceptable (lower score is better match)
    if (result.length > 0 && result[0].score < 0.3) {
        return [result[0].item.response, "Follow the steps and try again."];
    } else {
        return ["I'm sorry, I couldn't understand your query. Please consult HQ or team leads.", null];
    }
};
