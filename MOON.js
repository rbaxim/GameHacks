const ids = [];

// Function to start clicking the "moon-btn" at a specified interval
const startMoonClicks = (baseSpeed) => {
  // Add slight randomness to the speed to mimic human behavior
  const speed = baseSpeed + Math.floor(Math.random() * 200) - 100; // ±100ms variation
  const id = setInterval(() => {
    const button = document.getElementById("moon-btn");
    if (button) {
      button.click();
      console.log("Clicked moon-btn");
    } else {
      console.warn("moon-btn not found");
      stopAllIntervals(); // Stop intervals if the button disappears
    }
  }, speed);

  ids.push(id);
  console.log(`Added interval with ID: ${id}, Speed: ${speed}ms`);
};

// Function to clear all intervals
const stopAllIntervals = () => {
  ids.forEach((id) => {
    clearInterval(id);
    console.log(`Cleared interval with ID: ${id}`);
  });
  ids.length = 0; // Clear the array
  console.log("All intervals cleared.");
};
