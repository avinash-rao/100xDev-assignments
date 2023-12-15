// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function waitForTimeout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

async function counter() {
    // Initialize the counter
    let counter = 1;

    while (true) {
        console.clear();
        console.log(counter++);
        await waitForTimeout(1000);
    }
}

counter();