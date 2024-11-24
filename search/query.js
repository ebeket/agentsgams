function openWindow(link, title) {
    var win = window.open()
    win.document.body.style.margin = '0'
    win.document.body.style.height = '100vh'
    win.document.title = title + " - agents gams"
    var iframe = win.document.createElement('iframe')
    iframe.style.border = 'none'
    iframe.style.width = '100%'
    iframe.style.height = '100%'
    iframe.style.margin = '0'
    iframe.src = link
    win.document.body.appendChild(iframe)
}

function addItem(formalname, gamelink, iframe) {
    var firstLetter = formalname.charAt(0).toUpperCase();
    var listElement = document.createElement("li");
    var anchorElement;

    if (iframe) {
        anchorElement = document.createElement("a");
        anchorElement.onclick = function () {
            openWindow(gamelink, formalname);
        };
        anchorElement.className = "normal";
        anchorElement.textContent = formalname;
    } else {
        anchorElement = document.createElement("a");
        anchorElement.href = gamelink;
        anchorElement.className = "normal";
        anchorElement.textContent = formalname;
    }

    listElement.appendChild(anchorElement);

    var headerElement = document.querySelector(`[class*="${firstLetter}"]`);
    if (headerElement) {
        var ulElement = headerElement.parentNode;
        ulElement.insertBefore(listElement, headerElement.nextSibling);
    } else {
        console.log(`No header element found for letter ${firstLetter}`);
    }
}

var baseurl = "https://agentsgams.github.io/projects/"

addItem("Epic Boss Battle", "https://agentn86.github.io/epicbossbattle/v1.3.3/",)
addItem("SMnake", "https://taco-eating-truck.glitch.me/index.html",)
addItem("Coin Collector", "https://coincollecor.glitch.me/index.html",)
addItem("3D Maze", `${baseurl}3dmaze.html`,)
addItem("Alien Shooter", `${baseurl}alienshooter.html`,)
addItem("Bitcoin Clicker", "https://julianyaman.github.io/bitcoin-clicker/",)
addItem("Cookie Clicker", `${baseurl}cookieclicker`,)
addItem("Papa's Pizzeria", `${baseurl}flash/papapizzera.html`,)
addItem("Papa's Burgeria", `${baseurl}flash/papaburger.html`,)
addItem("Age of War 2", `${baseurl}flash/ageofwar2.html`,)
addItem("Run 2", `${baseurl}flash/run2.html`,)
addItem("Whack your Boss", `${baseurl}flash/whackboss.html`,)
addItem("Duck Life", `${baseurl}flash/ducklife.html`,)
addItem("The Impossible Quiz", `${baseurl}flash/impossiblequiz.html`,)
addItem("The World's Hardest Game", `${baseurl}flash/worldhardgame.html`,)
addItem("Portal: The Flash Version", `${baseurl}flash/portalflash.html`,)
addItem("Age of War", `${baseurl}flash/ageofwar.html`,)
addItem("Papa's Freezeria", `${baseurl}flash/papafreezer.html`,)
addItem("Papa's Pancakeria", `${baseurl}flash/papapancake.html`,)
addItem("Bloons Tower Defense 5", `${baseurl}flash/bloontd5.html`,)
addItem("SLOPE", `${baseurl}slope`,)
addItem("Basketball Stars", `${baseurl}basketballstars`,)
addItem("Time Shooter 3", `${baseurl}timeshooter3`,)
addItem("Fancy Pants Adventures", `${baseurl}flash/fancypants.html`,)
addItem("Alien Hominid", `${baseurl}flash/alienhom.html`,)
addItem("Toss the Turtle", `${baseurl}flash/tosstheturtle.html`,)
addItem("Bloxorz", `${baseurl}flash/bloxorz.html`,)
addItem("Wasted Sky", `${baseurl}flash/wastedsky.html`,)
addItem("The Impossible Quiz 2", `${baseurl}flash/impossiblequiz2.html`,)
addItem("Whack your Computer", `${baseurl}flash/whackcomputer.html`,)
addItem("Papa's Cheeseria", `${baseurl}flash/papaCheese.html`,)
addItem("Papa's Cupcakeria", `${baseurl}flash/papaCupcake.html`,)
addItem("Papa's Donut", `${baseurl}flash/papaDonut.html`,)
addItem("Papa's Hotdogeria", `${baseurl}flash/papaHotDog.html`,)
addItem("Papa's Pastaria", `${baseurl}flash/papaPastaria.html`,)
addItem("Papa's Scooperia", `${baseurl}flash/papaScooperia.html`,)
addItem("Papa's Sushiria", `${baseurl}flash/papaSushiria.html`,)
addItem("Papa's Taco Mia", `${baseurl}flash/papaTacoMia.html`,)
addItem("Papa's Wingeria", `${baseurl}flash/papaWingeria.html`,)
addItem("Deep Sleep", `${baseurl}flash/deepsleep.html`,)
addItem("Deeper Sleep", `${baseurl}flash/deepersleep.html`,)
addItem("SM63", `${baseurl}flash/sm63.html`,)
addItem("Insane Orb", `${baseurl}flash/insaneorb.html`,)
addItem("Interactive Buddy", `${baseurl}flash/interactivebuddy.html`,)
addItem("Interactive Buddy 2", `${baseurl}flash/interactivebuddy2.html`,)
addItem("Fireboy & Watergirl in The Forest Temple", `${baseurl}flash/fireboywatergirl.html`,)
addItem("Eaglercraft", "https://drive.google.com/uc?export=download&id=1-MduluUms_LG7tUJyMkAPBw82O40R11R",true)
addItem("SSF2", `${baseurl}flash/ssf2.html`,)
addItem("House of Hazards", `${baseurl}houseofhazards/index.html`,)
addItem("1v1.LOL", `${baseurl}xml/1v1lol.html`, true)
addItem("GeoDash", `${baseurl}geodash`,)
addItem("Moto X3M", `${baseurl}iframe/motox3m`,)
addItem("Moto X3M 2", `${baseurl}iframe/motox3m2`,)
addItem("Moto X3M 3", `${baseurl}iframe/motox3m3`,)
addItem("Big Shot Boxing", `${baseurl}xml/bigshotboxing.html`, true)
addItem("Snow Rider 3D 2", `${baseurl}xml/snowrider3d2.html`)
addItem("SLOPE 2 Players", `${baseurl}xml/slope2player.html`, true)
addItem("Soccer Legends", `${baseurl}xml/soccerlegends.html`, true)
addItem("Hello Kitty Adventure", `${baseurl}xml/hellokittyadventure.html`, true)
addItem("Retro Bowl", `${baseurl}retrobowl`,)
addItem("Flappy Plane", `${baseurl}flappyplane/index.html`,)
addItem("Gun Mayhem 2", `${baseurl}flash/gunmayhem2.html`,)
addItem("Minesweeper", "https://agentn86.github.io/js-minesweeper/",)
addItem("Polytrack", `${baseurl}xml/polytrack.html`, true)
addItem("Drift Boss", `${baseurl}driftboss`,)
addItem("Eggy Car", `${baseurl}eggycar`,)
addItem("Pro Football", `${baseurl}flash/profootball.html`,)
addItem("Pixel Speedrun", `${baseurl}xml/pixelspeedrun.html`, true)
addItem("DooM", "https://diekmann.github.io/wasm-fizzbuzz/doom/", true)
addItem("Javelin Fighting", `${baseurl}xml/javelinfighting.html`, true)
addItem("Bottle Flip", `${baseurl}iframe/bottleflip.html`, false)
addItem("Time Shooter 2", `${baseurl}xml/timeshooter2.html`, true)
addItem("Sport Heads: Ice Hockey", `${baseurl}xml/1on1hockey.html`, false)
addItem("Five Nights at Freddys", `${baseurl}xml/fnaf.html`, true)
addItem("Douchebag Workout 2", `${baseurl}xml/douchebagworkout2.html`, true)
addItem("Unicycle Hero", `${baseurl}xml/unicyclehero.html`, true)
addItem("Garfield's Scary Scavenger Hunt", `${baseurl}xml/garfieldscaryhunt.html`, false)
addItem("Dunk Shot", `${baseurl}xml/dunkshot.html`, true)
addItem("agents tetris", "https://agentn86.github.io/tetris-html/", false)
addItem("Learn to Fly", `${baseurl}flash/learntofly.html`, false)
addItem("Learn to Fly 2", `${baseurl}flash/learntofly2.html`, false)
addItem("Minecraft Tower Defense", `${baseurl}flash/minecrafttowerdefense.html`, false)
addItem("QWOP", `${baseurl}flash/qwop.html`, false)
addItem("Picos School", `${baseurl}flash/picoschool.html`, false)
addItem("Riddle School", `${baseurl}flash/riddleschool.html`, false)
addItem("Riddle School 2", `${baseurl}flash/riddleschool2.html`, false)
addItem("Riddle School 3", `${baseurl}flash/riddleschool3.html`, false)
addItem("Sport Heads: Football Championship", `${baseurl}flash/sportsheadssoccer.html`, false)
addItem("Run", `${baseurl}flash/run.html`, false)
addItem("Run 3", `${baseurl}flash/run3.html`, false)
addItem("Earthbound", "https://agentsgams.github.io/emulatorjs/earthbound.html", false)
addItem("Block Blast", `${baseurl}blockblast`, false)
addItem("Big Tower Tiny Square", `${baseurl}bigtowertinysquare`, false)
addItem("Drift Hunters", `https://www.hoodamath.com/mobile/games/drift-hunters/game.html`, false)
addItem("Soccer Random", `${baseurl}soccerrandom`, false)
addItem("Basket Random", `${baseurl}basketrandom`, false)
addItem("Cluster Rush", `${baseurl}clusterrush`, false)
addItem("Tiny Fishing", `${baseurl}tinyfishing`, false)
addItem("BitLife", `${baseurl}bitlife`, false)
addItem("Boxing Random", `${baseurl}boxingrandom`, false)
addItem("Volley Random", `${baseurl}volleyrandom`, false)
addItem("SUPERHOT", `${baseurl}superhot`, false)
addItem("Murder", `${baseurl}murder`, false)
addItem("Paper.IO 2", `${baseurl}paperio2`, false)

// after all the items are added, we add the search bar
document.getElementById('searchBar').style.display = "block"