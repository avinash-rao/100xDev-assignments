// Create a counter in JavaScript
// It should go up as time goes by in intervals of 1 second

// Initialize the counter
let i = 1;
setInterval(() => {
    // Clear the console
    console.clear();

    // Print the counter
    console.log(i++)
}, 1000);