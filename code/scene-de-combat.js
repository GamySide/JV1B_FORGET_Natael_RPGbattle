class Player {
    constructor(name,color) {
        this.name = name;

        this.p = document.createElement('div');
        this.p.className = "player";
        this.p.style.backgroundColor=color;
        this.p.style.width="665px";
        this.p.style.height="180px";
        document.body.appendChild(this.p);
    }
}
class Monster {
    constructor(name,color) {
        this.name = name;

        this.p = document.createElement('div');
        this.p.className = "monster";
        this.p.style.backgroundColor=color;
        this.p.style.width="665px";
        this.p.style.height="180px";
        document.body.appendChild(this.p);
    }
}

let players = new Map();
players.set("Ren", new Player("Ren", "grey"));
players.set("Ragis", new Player("Ragis", "red"));
players.set("Allia", new Player("Allia", "grey"));
players.set("Succubis", new Player("Succubis", "grey"));
let monsters = new Map();
monsters.set("Dogemadon", new Monster("Dogemadon", "grey"));
monsters.set("Katculub", new Monster("Katculub", "grey"));
monsters.set("Bunarok", new Monster("Bunarok", "grey"));
console.log(players,monsters)

let renIdleSprite = document.getElementById("renIdleSpriten");
let renAtkSprite = document.getElementById("renAtkSprite");
let renSkillSprite = document.getElementById("renSkillSprite");
let ragisIdleSprite = document.getElementById("ragisIdleSprite");
let ragisAtkSprite = document.getElementById("ragisAtkSprite");
let ragisSkillSprite = document.getElementById("ragisSkillSprite");
let alliaIdleSprite = document.getElementById("alliaIdleSprite");
let alliaAtkSprite = document.getElementById("alliaAtkSprite");
let alliaSkillSprite = document.getElementById("alliaSkillSprite");
let succubisIdleSprite = document.getElementById("succubisIdleSprite");
let succubisAtkSprite = document.getElementById("succubisAtkSprite");
let succubisSkillSprite = document.getElementById("succubisSkillSprite");
let DogenadonSprite = document.getElementById("DogenadonSprite");
let katculubSprite = document.getElementById("katculubSprite");
let BunarokSprite = document.getElementById("BunarokSprite");
let biteOnRen = document.getElementById("biteOnRen");
let biteOnRagis = document.getElementById("biteOnRagis");
let biteOnAllia = document.getElementById("biteOnAllia");
let biteOnSuccubis = document.getElementById("biteOnSuccubis");
let clawOnRen = document.getElementById("clawOnRen");
let clawOnRagis = document.getElementById("clawOnRagis");
let clawOnAllia = document.getElementById("clawOnAllia");
let clawOnSuccubis = document.getElementById("clawOnSuccubis");
let charmOnDogenadon = document.getElementById("charmOnDogenadon");
let charmOnKatculub = document.getElementById("charmOnKatculub");
let charmOnBunarok = document.getElementById("charmOnBunarok");
let cutOnDogenadon = document.getElementById("cutOnDogenadon");
let cutOnKatculub = document.getElementById("cutOnKatculub");
let cutOnBunarok = document.getElementById("cutOnBunarok");
let fireBoomOnDogenadon = document.getElementById("fireBoomOnDogenadon");
let fireBoomOnKatculub = document.getElementById("fireBoomOnKatculub");
let fireBoomOnBunarok = document.getElementById("fireBoomOnBunarok");
let healOnRen = document.getElementById("healOnRen");
let healOnRagis = document.getElementById("healOnRagis");
let healOnAllia = document.getElementById("healOnAllia");
let healOnSuccubis = document.getElementById("healOnSuccubis");
let laserOnDogenadon = document.getElementById("laserOnDogenadon");
let laserOnKatculub = document.getElementById("laserOnKatculub");
let laserOnBunarok = document.getElementById("laserOnBunarok");
let tourDeRen = document.getElementById("tourDeRen");
let tourDeRagis = document.getElementById("tourDeRagis");
let tourDeAllia = document.getElementById("tourDeAllia");
let tourDeSuccubis = document.getElementById("tourDeSuccubis");
let multihitOnDogenadon = document.getElementById("multihitOnDogenadon");
let multihitOnKatculub = document.getElementById("multihitOnKatculub");
let multihitOnBunarok = document.getElementById("multihitOnBunarok");
let magicpunchOnDogenadon = document.getElementById("magicpunchOnDogenadon");
let magicpunchOnKatculub = document.getElementById("magicpunchOnKatculub");
let magicpunchOnBunarok = document.getElementById("magicpunchOnBunarok");
let seismeOnDogenadon = document.getElementById("seismeOnDogenadon");
let seismeOnKatculub = document.getElementById("seismeOnKatculub");
let seismeOnBunarok = document.getElementById("seismeOnBunarok");











renPv = renPv - 10;
renStatistique.style.display = "block";
var progBar = document.getElementById("progBar");
progBar.setAttribute("value", "renPv")

