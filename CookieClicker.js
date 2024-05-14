function main(Delay){
  setInterval(function() {
    Game.shimmers.forEach(function(shimmer) {
        if (shimmer.type == "golden") { shimmer.pop() }
    if (Object.keys(Game.buffs).length>0) Game.ClickCookie();
    Game.ObjectsById[Math.random(0, 19)].level += 1000; Game.recalculateGains=1;
    })
  for (i = 0; i < Game.wrinklers.length; i++) { Game.wrinklers[i].type = 1; }
  }, Delay);
  Game.priceIncrease = 1
  setInterval(function() {
    Game.PopRandomWrinkler()
  }, 10000)
  customTickers.push("Made using Cookie Clicker Hacks");
}
