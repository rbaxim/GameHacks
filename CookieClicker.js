(function (Party) {
    var Delay = 1;
    var LaggyDelay = 6000;
    Game.Popup('Lets start hacking');
    if (Party) {
        Game.PARTY = Party;
        Game.Popup('PARTY TIME');
    }
    Game.OpenSesame();
    var customTickers = [
        "Made using Cookie Clicker Hacks",
        "News reports hacking as a new way to make cookies",
        "Some cookies were found with microchips",
        "Game.ClickCookie(); was found on a stolen Cookie Clicker Computer"
    ];

    // if (typeof Game !== 'undefined' && Game.customTickers) {
    //     Game.customTickers.push(customTickers);
    // } else {
    //     console.error("Game or Game.customTickers is not defined.");
    // }

    setInterval(function() {
        // Golden Cookies
        Game.shimmers.forEach(function(shimmer) {
            if (shimmer.type == "golden") {
                shimmer.pop();
                Game.Popup('Pop the golden Cookie');
            }
        });

        // Click The Cookie
        Game.ClickCookie();

        // Wrinklers
        for (var i = 0; i < Game.wrinklers.length; i++) {
            Game.wrinklers[i].type = 1;
        }

        // Buildings
        Game.priceIncrease = 1;

    }, Delay);

    // Laggy Features
    if (LaggyDelay > 5000) {
        setInterval(function() {
            var randomBuildingId = Math.floor(Math.random() * 20);
            Game.ObjectsById[randomBuildingId].level += 1000;
            Game.recalculateGains = 1;
            for (var i = 0; i < Game.ObjectsById.length; i++) {
                Game.ObjectsById[i].amount += 5000;
            }
            var time = 13; // assuming 'time' is 13 seconds for Click Frenzy
            Game.clickFrenzy = Game.fps * time;
            Game.recalculateGains = 1;
            Game.Popup('Click frenzy! Clicking power x777 for ' + time + ' seconds!');
        }, LaggyDelay);
    } else {
        console.error("Too fast for laggy features");
        Game.Popup('Way to fast for laggy features');
    }

    Game.AchievementsById.forEach(function(e) {
        // if (e.hide != 3)
        Game.Win(e.name);
    });

    setInterval(function() {
        for (i = 0; i < Game.wrinklers.length; i++) { Game.wrinklers[i].type = Game.wrinklers[i].type || 1 }
        Game.registerHook('logic', () => { Game.wrinklers.forEach(me => me.hp -= Number.MAX_VALUE) });
      Game.Popup('Killed a wrinkler');
    }, 10000);

})(false);
