function main(Delay){
  setInterval(function() {
    Game.shimmers.forEach(function(shimmer) {
        if (shimmer.type == "golden") { 
          shimmer.pop() 
        }
    Game.ClickCookie();
    for (i = 0; i < Game.wrinklers.length; i++) { Game.wrinklers[i].type = 1; }
    Game.priceIncrease = 1
    Game.ObjectsById[Math.random(0, 19)].level += 1000;
    Game.recalculateGains=1;
  }, Delay);
  setInterval(function() {
    Game.PopRandomWrinkler()
  }, 10000)
  customTickers.push("Made using Cookie Clicker Hacks");
}
