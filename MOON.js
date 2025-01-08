const ids = [];

const MOON = (speed) => {
  const id = setInterval(() => {
    const button = document.getElementById("moon-btn");
    if (button) {
      button.click();
    } else {
      console.info("Unable to find moon-btn")
      stopAllIntervals();
    }
  }, speed);

  ids.push(id);
  console.log(`Added interval with ID: ${id}, Speed: ${speed}ms`);
};

const clearMOON = () => {
  ids.forEach((id) => {
    clearInterval(id);
    console.log(`Cleared interval with ID: ${id}`);
  });
  ids.length = 0;
  console.log("All intervals cleared.");
};
