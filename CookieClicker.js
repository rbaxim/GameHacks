function main(Delay, LaggyDelay) {
  Objects = ["Cursor", "Grandma", "Farm", "Mine", "Factory", "Bank", "Temple", "Wizard tower", "Shipment", "Alchemy lab", "Portal", "Time machine", "Antimatter condesnser", "Prism", "Chancemaker", "Fractal engine", "Javascript console", "Idleverse", "Cortex baker", "You"]
  setInterval(function() {
    //Golden Cookies
    Game.shimmers.forEach(function(shimmer) {
      if (shimmer.type == "golden") { 
        shimmer.pop(); 
      }
    });

    // Click The Cookie
    Game.ClickCookie();

    // Wrinklers
    for (i = 0; i < Game.wrinklers.length; i++) { 
      Game.wrinklers[i].type = 1; 
    }

    // Buildings
    Game.priceIncrease = 1;
    var randomBuildingId = Math.floor(Math.random() * 20);
    Game.ObjectsById[randomBuildingId].level += 1000;
    Game.recalculateGains = 1;
      
  }, Delay);
  // Laggy Features
  if (LaggyDelay > 5000){
    setInterval(function() {
      for (var i = 0; i < Objects.length; i++){
        Game.Objects[Objects[i]].amount += 5000;
      }
    }, LaggyDelay);
  } else {
    console.error("Too slow for laggy features")
  }
  setInterval(function() {
    // Pop Wrinkler
    Game.PopRandomWrinkler();
  }, 10000);
  customTickers.push("Made using Cookie Clicker Hacks");
}
