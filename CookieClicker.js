function main(Delay) {
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

    // Cost becomes normal
    Game.priceIncrease = 1;

    // Upgrade Buildings
    var randomBuildingId = Math.floor(Math.random() * 20);
    Game.ObjectsById[randomBuildingId].level += 1000;
    Game.recalculateGains = 1;
      
  }, Delay);
  
  setInterval(function() {
    // Pop Wrinkler
    Game.PopRandomWrinkler();
  }, 10000);
  customTickers.push("Made using Cookie Clicker Hacks");
}
