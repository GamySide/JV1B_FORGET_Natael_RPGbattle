class Player {
    constructor(name,color) {
        this.name = name;

        this.p = document.createElement('div');
        this.p.className = "player";
        this.p.style.backgroundColor=color;
        this.p.style.width="400px";
        this.p.style.height="100px";
        document.body.appendChild(this.p);
    }
}
class Monster {
    constructor(name,color) {
        this.name = name;

        this.p = document.createElement('div');
        this.p.className = "monster";
        this.p.style.backgroundColor=color;
        this.p.style.width="400px";
        this.p.style.height="100px";
        document.body.appendChild(this.p);
    }
}


let players = new Map();
players.set("Ren", new Player("Ren", "grey"));
players.set("Ragis", new Player("Ragis", "grey"));
players.set("Allia", new Player("Allia", "grey"));
players.set("Succubis", new Player("Succubis", "grey"));

let monsters = new Map();
monsters.set("Dogemadon", new Monster("Dogemadon", "grey"));
monsters.set("Katculub", new Monster("Katculub", "grey"));
monsters.set("Bunarok", new Monster("Bunarok", "grey"));



/*let dialogue = document.getElementById("dialogue");
let atkInteraction = document.getElementById("atkInteraction");
let defInteraction = document.getElementById("defInteraction");
let skillInteraction = document.getElementById("skillInteraction");
let renStatistique = document.getElementById("renStatistique");



var dogenadonPv = document.getElementById("dogenadonPv");
var katculubPv = document.getElementById("katculubPv");
var bunarok = document.getElementById("bunarokPv");
var renPv = document.getElementById("renPv");

renPv = renPv - 10;
renStatistique.style.display = "block";
var progBar = document.getElementById("progBar");
progBar.setAttribute("value", "renPv");*/

