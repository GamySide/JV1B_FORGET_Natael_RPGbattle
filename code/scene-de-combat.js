/*création des variable*/
var dialog = document.getElementById("dialogue");
var renPv = 150
var ragisPv = 200
var alliaPv = 100
var succubisPv = 100
var renMana = 80
var ragisMana = 40
var alliaMana = 200
var succubisMana = 160
var dogenadonPv = 100
var katculubPv = 100
var bunarokPv = 100
var renAtk = 20;
var ragisAtk = 30;
var alliaAtk = 10;
var succubisAtk = 10;
var dogenadonAtk = 20;
var katculubAtk = 20;
var bunarokAtk = 20;
var renDef = 10;
var ragisDef = 10;
var alliaDef = 10;
var succubisDef = 10;
var turn = 1;
var dogenadonSelect = 0;
var katculubSelect = 0;
var bunarokSelect = 0;
var renSelect = 0;
var ragisSelect = 0;
var alliaSelect = 0;
var succubisSelect = 0;
var atkSelect = 0;
var defSelect = 0;
var skillSelect = 0;
var charmDogenadon = 0;
var charmKatculub = 0;
var charmBunarok = 0;
var chooseRen = 1;
var chooseRagis = 2;
var chooseAllia = 3;
var chooseSuccubis = 4;
var dogenadonStatut = 0;
var katculubStatut = 0;
var bunarokStatut = 0;
var renStatut = 0;
var ragisStatut = 0;
var alliaStatut = 0;
var succubisStatut = 0;

/*controle des statistique*/
console.log(renPv);
console.log(ragisPv);
console.log(alliaPv);
console.log(succubisPv);
console.log(renMana);
console.log(ragisMana);
console.log(alliaMana);
console.log(succubisMana);


/*création des interaction*/
document.getElementById("dogenadonSprite").addEventListener("mouseover", function(){
    dogenadonStatistique.style.display = "block";
    katculubStatistique.style.display = "none";
    bunarokStatistique.style.display = "none";
});
document.getElementById("katculubSprite").addEventListener("mouseover", function(){
    dogenadonStatistique.style.display = "none";
    katculubStatistique.style.display = "block";
    bunarokStatistique.style.display = "none";
});
document.getElementById("bunarokSprite").addEventListener("mouseover", function(){
    dogenadonStatistique.style.display = "none";
    katculubStatistique.style.display = "none";
    bunarokStatistique.style.display = "block";
});
document.getElementById("dogenadonSprite").addEventListener("click", function(){
    dogenadonSelect = 1;
    katculubSelect = 0;
    bunarokSelect = 0
});
document.getElementById("katculubSprite").addEventListener("click", function(){
    dogenadonSelect = 0;
    katculubSelect = 1;
    bunarokSelect = 0;
});
document.getElementById("bunarokSprite").addEventListener("click", function(){
    dogenadonSelect = 0;
    katculubSelect = 0;
    bunarokSelect = 1;
});



/*les tour en attaque*/
renStatistique.style.display = "block";
ragisStatistique.style.display = "none";
alliaStatistique.style.display = "none";
succubisStatistique.style.display = "none";
atkInteraction.onclick = function () {
    if (turn == 1 || turn == 2 || turn == 3 || turn == 4) {
        if (turn == 1 && renPv > 0 && renStatut != 1){
            if (dogenadonSelect == 1) {
                dogenadonPv = dogenadonPv - renAtk;
                renDef = 10;
                document.getElementById("dogenadonPv").value = dogenadonPv;
                cutOnDogenadon.style.display = "block";
                renAtkSprite.style.display = "block";
                renIdleSprite.style.display = "none";
                setTimeout(() => {
                    cutOnDogenadon.style.display = "none";
                    renAtkSprite.style.display = "none";
                    renIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0;
                if (dogenadonPv <= 0) {
                    dogenadonSprite.style.display = "none";
                    dogenadonStatut = 1;
                }
            }
            else if (katculubSelect == 1) {
                katculubPv = katculubPv - renAtk;
                renDef = 10;
                document.getElementById("katculubPv").value = katculubPv;
                cutOnKatculub.style.display = "block";
                renAtkSprite.style.display = "block";
                renIdleSprite.style.display = "none";
                setTimeout(() => {
                    cutOnKatculub.style.display = "none";
                    renAtkSprite.style.display = "none";
                    renIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0;
                if (katculubPv <= 0) {
                    katculubSprite.style.display = "none";
                    katculubStatut = 1;
                }
            }
            else if (bunarokSelect == 1) {
                bunarokPv = bunarokPv - renAtk;
                renDef = 10;
                document.getElementById("bunarokPv").value = bunarokPv;
                cutOnBunarok.style.display = "block";
                renAtkSprite.style.display = "block";
                renIdleSprite.style.display = "none";
                setTimeout(() => {
                    cutOnBunarok.style.display = "none";
                    renAtkSprite.style.display = "none";
                    renIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0;
                if (bunarokPv <= 0) {
                    bunarokSprite.style.display = "none";
                    bunarokStatut = 1;
                }
            }
        }
        else if(renStatut = 1){
            turn++
        }
        if (turn == 2 && ragisPv > 0 && ragisStatut != 1) {
            renStatistique.style.display = "none";
            ragisStatistique.style.display = "block";
            alliaStatistique.style.display = "none";
            succubisStatistique.style.display = "none";
            if (dogenadonSelect == 1) {
                dogenadonPv = dogenadonPv - ragisAtk;
                ragisDef = 10;
                document.getElementById("dogenadonPv").value = dogenadonPv;
                multihitOnDogenadon.style.display = "block";
                ragisAtkSprite.style.display = "block";
                ragisIdleSprite.style.display = "none";
                setTimeout(() => {
                    multihitOnDogenadon.style.display = "none";
                    ragisAtkSprite.style.display = "none";
                    ragisIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0
                if (dogenadonPv <= 0) {
                    dogenadonSprite.style.display = "none";
                    dogenadonStatut = 1;
                }
            }
            else if (katculubSelect == 1) {
                katculubPv = katculubPv - ragisAtk;
                ragisDef = 10;
                document.getElementById("katculubPv").value = katculubPv;
                multihitOnKatculub.style.display = "block";
                ragisAtkSprite.style.display = "block";
                ragisIdleSprite.style.display = "none";
                setTimeout(() => {
                    multihitOnKatculub.style.display = "none";
                    ragisAtkSprite.style.display = "none";
                    ragisIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0;
                if (katculubPv <= 0) {
                    katculubSprite.style.display = "none";
                    katculubStatut = 1;
                }
            }
            else if (bunarokSelect == 1) {
                bunarokPv = bunarokPv - ragisAtk;
                ragisDef = 10;
                document.getElementById("bunarokPv").value = bunarokPv;
                multihitOnBunarok.style.display = "block";
                ragisAtkSprite.style.display = "block";
                ragisIdleSprite.style.display = "none";
                setTimeout(() => {
                    multihitOnBunarok.style.display = "none";
                    ragisAtkSprite.style.display = "none";
                    ragisIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0;
                if (bunarokPv <= 0) {
                    bunarokSprite.style.display = "none";
                    bunarokStatut = 1;
                }
            }
        }  
        else if(ragisStatut = 1){
            turn++
        }
        if (turn == 3 && alliaPv > 0 && alliaStatut != 1) {
            renStatistique.style.display = "none";
            ragisStatistique.style.display = "none";
            alliaStatistique.style.display = "block";
            succubisStatistique.style.display = "none";
            if (dogenadonSelect == 1) {
                dogenadonPv = dogenadonPv - alliaAtk;
                alliaDef = 10;
                document.getElementById("dogenadonPv").value = dogenadonPv;
                magicpunchOnDogenadon.style.display = "block";
                alliaAtkSprite.style.display = "block";
                alliaIdleSprite.style.display = "none";
                setTimeout(() => {
                    magicpunchOnDogenadon.style.display = "none";
                    alliaAtkSprite.style.display = "none";
                    alliaIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0;
                if (dogenadonPv <= 0) {
                    dogenadonSprite.style.display = "none";
                    dogenadonStatut = 1;
                }
            }
            else if (katculubSelect == 1) {
                katculubPv = katculubPv - alliaAtk;
                alliaDef = 10;
                document.getElementById("katculubPv").value = katculubPv;
                magicpunchOnKatculub.style.display = "block";
                alliaAtkSprite.style.display = "block";
                alliaIdleSprite.style.display = "none";
                setTimeout(() => {
                    magicpunchOnKatculub.style.display = "none";
                    alliaAtkSprite.style.display = "none";
                    alliaIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0
                if (katculubPv <= 0) {
                    katculubSprite.style.display = "none";
                    katculubStatut = 1;
                }
            }
            else if (bunarokSelect == 1) {
                bunarokPv = bunarokPv - alliaAtk;
                alliaDef = 10;
                document.getElementById("bunarokPv").value = bunarokPv;
                magicpunchOnBunarok.style.display = "block";
                alliaAtkSprite.style.display = "block";
                alliaIdleSprite.style.display = "none";
                setTimeout(() => {
                    magicpunchOnBunarok.style.display = "none";
                    alliaAtkSprite.style.display = "none";
                    alliaIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0;
                if (bunarokPv <= 0) {
                    bunarokSprite.style.display = "none";
                    bunarokStatut = 1;
                }
            }
        }
        else if(alliaStatut = 1){
            turn++
        }
        if (turn == 4 && succubisPv > 0 && succubisStatut != 1) {
            renStatistique.style.display = "none";
            ragisStatistique.style.display = "none";
            alliaStatistique.style.display = "none";
            succubisStatistique.style.display = "block";
            if (dogenadonSelect == 1) {
                dogenadonPv = dogenadonPv - succubisAtk;
                succubisDef = 10;
                document.getElementById("dogenadonPv").value = dogenadonPv;
                laserOnDogenadon.style.display = "block";
                succubisAtkSprite.style.display = "block";
                succubisIdleSprite.style.display = "none";
                setTimeout(() => {
                    laserOnDogenadon.style.display = "none";
                    succubisAtkSprite.style.display = "none";
                    succubisIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0
                if (dogenadonPv <= 0) {
                    dogenadonSprite.style.display = "none";
                    dogenadonStatut = 1;
                }
            }
            else if (katculubSelect == 1) {
                katculubPv = katculubPv - succubisAtk;
                renDef = 10;
                document.getElementById("katculubPv").value = katculubPv;
                laserOnKatculub.style.display = "block";
                succubisAtkSprite.style.display = "block";
                succubisIdleSprite.style.display = "none";
                setTimeout(() => {
                    laserOnKatculub.style.display = "none";
                    succubisAtkSprite.style.display = "none";
                    succubisIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0
                if (katculubPv <= 0) {
                    katculubSprite.style.display = "none";
                    katculubStatut = 1;
                }
            }
            else if (bunarokSelect == 1) {
                bunarokPv = bunarokPv - succubisAtk;
                renDef = 10;
                document.getElementById("bunarokPv").value = bunarokPv;
                laserOnBunarok.style.display = "block";
                succubisAtkSprite.style.display = "block";
                succubisIdleSprite.style.display = "none";
                setTimeout(() => {
                    laserOnBunarok.style.display = "none";
                    succubisAtkSprite.style.display = "none";
                    succubisIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0;
                if (bunarokPv <= 0) {
                    bunarokSprite.style.display = "none";
                    bunarokStatut = 1;
                }
            }
        }
        else if(succubisStatut = 1){
            turn++
        }
        if (turn == 5 || turn == 6 || turn == 7) {
            if (turn == 5 && dogenadonPv > 0 && dogenadonStatut != 1) {
                console.log("i'm in")
                var randomDogenadon = Math.floor(Math.random() * 4) + 1;
                if (randomDogenadon = chooseRen) {
                    renPv = renPv - dogenadonAtk + renDef
                    document.getElementById("renPv").value = renPv;
                    clawOnRen.style.display = "block";
                    setTimeout(() => {
                        clawOnRen.style.display = "none";
                    }, "1000")
                    biteOnRen.style.display = "block";
                    setTimeout(() => {
                        biteOnRen.style.display = "none";
                    }, "1000")
                    turn++
                    if(renPv <= 0){
                        renIdleSprite.style.display = "none";
                        renStatut = 1;
                    }
                }
                else if (randomDogenadon = chooseRagis) {
                    ragisPv = ragisPv - dogenadonAtk + ragisDef
                    document.getElementById("ragisPv").value = ragisPv;
                    clawOnRagis.style.display = "block";
                    setTimeout(() => {
                        clawOnRagis.style.display = "none";
                    }, "1000")
                    biteOnRagis.style.display = "block";
                    setTimeout(() => {
                        biteOnRagis.style.display = "none";
                    }, "1000")
                    turn++
                    if(ragisPv <= 0){
                        ragisIdleSprite.style.display = "none";
                        ragisStatut = 1;
                    }
                }
                else if (randomDogenadon = chooseAllia) {
                    alliaPv = alliaPv - dogenadonAtk + alliaDef
                    document.getElementById("alliaPv").value = alliaPv;
                    clawOnAllia.style.display = "block";
                    setTimeout(() => {
                        clawOnAllia.style.display = "none";
                    }, "1000")
                    biteOnAllia.style.display = "block";
                    setTimeout(() => {
                        biteOnAllia.style.display = "none";
                    }, "1000")
                    turn++
                    if(alliaPv <= 0){
                        alliaIdleSprite.style.display = "none";
                        alliaStatut = 1;
                    }
                }
                else if (randomDogenadon = chooseSuccubis) {
                    succubisPv = succubisPv - dogenadonAtk + succubisDef
                    document.getElementById("succubisPv").value = succubisPv;
                    clawOnSuccubis.style.display = "block";
                    setTimeout(() => {
                        clawOnSuccubis.style.display = "none";
                    }, "1000")
                    biteOnSuccubis.style.display = "block";
                    setTimeout(() => {
                        biteOnSuccubis.style.display = "none";
                    }, "1000")
                    turn++
                    if(succubisPv <= 0){
                        succubisIdleSprite.style.display = "none";
                        succubisStatut = 1;
                    }
                }
            }
            else if (dogenadonStatut == 1){
                turn++
            }
            if (turn == 6 && katculubPv > 0 && katculubStatut != 1) {
                console.log("i'm in")
                var randomKatculub = Math.floor(Math.random() * 4) + 1;
                if (randomKatculub = chooseRen) {
                    renPv = renPv - katculubAtk + renDef
                    document.getElementById("renPv").value = renPv;
                    clawOnRen.style.display = "block";
                    setTimeout(() => {
                        clawOnRen.style.display = "none";
                    }, "1000")
                    biteOnRen.style.display = "block";
                    setTimeout(() => {
                        biteOnRen.style.display = "none";
                    }, "1000")
                    turn++
                    if(renPv <= 0){
                        renIdleSprite.style.display = "none";
                        renStatut = 1;
                    }
                }
                else if (randomKatculub = chooseRagis) {
                    ragisPv = ragisPv - katculubAtk + ragisDef
                    document.getElementById("ragisPv").value = ragisPv;
                    clawOnRagis.style.display = "block";
                    setTimeout(() => {
                        clawOnRagis.style.display = "none";
                    }, "1000")
                    biteOnRagis.style.display = "block";
                    setTimeout(() => {
                        biteOnRagis.style.display = "none";
                    }, "1000")
                    turn++
                    if(ragisPv <= 0){
                        ragisIdleSprite.style.display = "none";
                        ragisStatut = 1;
                    }
                }
                else if (randomKatculub = chooseAllia) {
                    alliaPv = alliaPv - katculubAtk + alliaDef
                    document.getElementById("alliaPv").value = alliaPv;
                    clawOnAllia.style.display = "block";
                    setTimeout(() => {
                        clawOnAllia.style.display = "none";
                    }, "1000")
                    biteOnAllia.style.display = "block";
                    setTimeout(() => {
                        biteOnAllia.style.display = "none";
                    }, "1000")
                    turn++
                    if(alliaPv <= 0){
                        alliaIdleSprite.style.display = "none";
                        alliaStatut = 1;
                    }
                }
                else if (randomKatculub = chooseSuccubis) {
                    succubisPv = succubisPv - katculubAtk + succubisDef
                    document.getElementById("succubisPv").value = succubisPv;
                    clawOnSuccubis.style.display = "block";
                    setTimeout(() => {
                        clawOnSuccubis.style.display = "none";
                    }, "1000")
                    biteOnSuccubis.style.display = "block";
                    setTimeout(() => {
                        biteOnSuccubis.style.display = "none";
                    }, "1000")
                    turn++
                    if(succubisPv <= 0){
                        succubisIdleSprite.style.display = "none";
                        succubisStatut = 1;
                    }
                }
            }
            else if (katculubStatut == 1){
                turn++
            }
            if (turn == 7 && dogenadonPv > 0 && bunarokStatut != 1) {
                console.log("i'm in")
                var randomBunarok = Math.floor(Math.random() * 4) + 1;
                if (randomBunarok = chooseRen) {
                    renPv = renPv - bunarokAtk + renDef
                    document.getElementById("renPv").value = renPv;
                    clawOnRen.style.display = "block";
                    setTimeout(() => {
                        clawOnRen.style.display = "none";
                    }, "1000")
                    biteOnRen.style.display = "block";
                    setTimeout(() => {
                        biteOnRen.style.display = "none";
                    }, "1000")
                    turn = 1;
                    if(renPv <= 0){
                        renIdleSprite.style.display = "none";
                        renStatut = 1;
                    }
                }
                else if (randomBunarok = chooseRagis) {
                    ragisPv = ragisPv - bunarokAtk + ragisDef
                    document.getElementById("ragisPv").value = ragisPv;
                    clawOnRagis.style.display = "block";
                    setTimeout(() => {
                        clawOnRagis.style.display = "none";
                    }, "1000")
                    biteOnRagis.style.display = "block";
                    setTimeout(() => {
                        biteOnRagis.style.display = "none";
                    }, "1000")
                    turn = 1;
                    if(ragisPv <= 0){
                        ragisIdleSprite.style.display = "none";
                        ragisStatut = 1;
                    }
                }
                else if (randomBunarok = chooseAllia) {
                    alliaPv = alliaPv - bunarokAtk + alliaDef
                    document.getElementById("alliaPv").value = alliaPv;
                    clawOnAllia.style.display = "block";
                    setTimeout(() => {
                        clawOnAllia.style.display = "none";
                    }, "1000")
                    biteOnAllia.style.display = "block";
                    setTimeout(() => {
                        biteOnAllia.style.display = "none";
                    }, "1000")
                    turn = 1;
                    if(alliaPv <= 0){
                        alliaIdleSprite.style.display = "none";
                        alliaStatut = 1;
                    }
                }
                else if (randomBunarok = chooseSuccubis) {
                    succubisPv = succubisPv - bunarokAtk + succubisDef
                    document.getElementById("succubisPv").value = succubisPv;
                    clawOnSuccubis.style.display = "block";
                    setTimeout(() => {
                        clawOnSuccubis.style.display = "none";
                    }, "1000")
                    biteOnSuccubis.style.display = "block";
                    setTimeout(() => {
                        biteOnSuccubis.style.display = "none";
                    }, "1000")
                    turn = 1;
                    if(succubisPv <= 0){
                        succubisIdleSprite.style.display = "none";
                        succubisStatut = 1;
                    }
                }
            }
            else if (bunarokStatut == 1){
                turn++
            }
        }
    }
}
/*si le joueur décide qu'un perso*/
defInteraction.onclick = function () {
    if (turn == 1 || turn == 2 || turn == 3 || turn == 4) {
        if (turn == 1 && renPv > 0){
            renDef = 20;
            console.log(renDef);
            turn++
        }
        else if (turn == 2 && ragisPv > 0){
            ragisDef = 20
            console.log(ragisDef);
            turn++
        }
        else if (turn == 3 && alliaPv > 0){
            alliaDef = 20
            console.log(alliaDef);
            turn++
        }
        else if (turn == 4 && succubisPv > 0){
            succubisDef = 20
            console.log(succubisDef);
            turn++
        }
    }
}
/*définition des skill*/
skillInteraction.onclick = function () {
    if (turn == 1 || turn == 2 || turn == 3 || turn == 4) {
        if (turn == 1 && renPv > 0){
            renDef = 10;
            renPv = 150;
            ragisPv = 200;
            alliaPv = 100;
            succubis = 100;
            healOnRen.style.display = "block";
            healOnRagis.style.display = "block";
            healOnAllia.style.display = "block";
            healOnSuccubis.style.display = "block";
            renSkillSprite.style.display = "block";
            renIdleSprite.style.display = "none";
            setTimeout(() => {
                healOnRen.style.display = "none";
                healOnRagis.style.display = "none";
                healOnAllia.style.display = "none";
                healOnSuccubis.style.display = "none";
                renSkillSprite.style.display = "none";
                renIdleSprite.style.display = "block";
            }, "1000")
            skillInteraction.style.display = "none";
            turn++
        }
        if (turn == 2 && ragisPv > 0){
            renDef = 10;
            dogenadonPv = dogenadonPv - ragisAtk
            katculubPv = katculubPv - ragisAtk
            bunarokPv = bunarokPv - ragisAtk
            seismeOnBunarok.style.display = "block";
            seismeOnDogenadon.style.display = "block";
            seismeOnKatculub.style.display = "block";
            ragisSkillSprite.style.display = "block";
            ragisIdleSprite.style.display = "none";
            setTimeout(() => {
                seismeOnBunarok.style.display = "none";
                seismeOnDogenadon.style.display = "none";
                seismeOnKatculub.style.display = "none"
                ragisSkillSprite.style.display = "none";
                ragisIdleSprite.style.display = "block";
            }, "1000")
            skillInteraction.style.display = "none";
            turn++
        }
        if (turn == 3 && alliaPv > 0){
            if (dogenadonSelect == 1) {
                dogenadonPv = dogenadonPv - alliaAtk - 30;
                alliaDef = 10;
                document.getElementById("dogenadonPv").value = dogenadonPv;
                fireBoomOnDogenadon.style.display = "block";
                alliaSkillSprite.style.display = "block";
                alliaIdleSprite.style.display = "none";
                setTimeout(() => {
                    fireBoomOnDogenadon.style.display = "none";
                    alliaSkillSprite.style.display = "none";
                    alliaIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0;
                skillInteraction.style.display = "none";
                if (dogenadonPv <= 0) {
                    dogenadonSprite.style.display = "none";
                    dogenadonStatut = 1;
                }
            }
            else if (katculubSelect == 1) {
                katculubPv = katculubPv - alliaAtk - 30;
                alliaDef = 10;
                document.getElementById("katculubPv").value = katculubPv;
                fireBoomOnKatculub.style.display = "block";
                alliaSkillSprite.style.display = "block";
                alliaIdleSprite.style.display = "none";
                setTimeout(() => {
                    fireBoomOnKatculub.style.display = "none";
                    alliaSkillSprite.style.display = "none";
                    alliaIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0
                skillInteraction.style.display = "none";
                if (katculubPv <= 0) {
                    katculubSprite.style.display = "none";
                    katculubStatut = 1;
                }
            }
            else if (bunarokSelect == 1) {
                bunarokPv = bunarokPv - alliaAtk - 30;
                alliaDef = 10;
                document.getElementById("bunarokPv").value = bunarokPv;
                fireBoomOnBunarok.style.display = "block";
                alliaSkillSprite.style.display = "block";
                alliaIdleSprite.style.display = "none";
                setTimeout(() => {
                    fireboomOnBunarok.style.display = "none";
                    alliaSkillSprite.style.display = "none";
                    alliaIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0;
                skillInteraction.style.display = "none";
                if (bunarokPv <= 0) {
                    bunarokSprite.style.display = "none";
                    bunarokStatut = 1;
                }
            }
        }
        if (turn == 4 && succubisPv > 0){
            if (dogenadonSelect == 1) {
                dogenadonStatut = 1
                succubisDef = 10;
                document.getElementById("dogenadonPv").value = dogenadonPv;
                charmOnDogenadon.style.display = "block";
                succubisSkillSprite.style.display = "block";
                succubisIdleSprite.style.display = "none";
                setTimeout(() => {
                    charmOnDogenadon.style.display = "none";
                    succubisSkillSprite.style.display = "none";
                    succubisIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0
                skillInteraction.style.display = "none";
                if (dogenadonPv <= 0) {
                    dogenadonSprite.style.display = "none";
                }
            }
            else if (katculubSelect == 1) {
                katculubStatut = 1;
                renDef = 10;
                document.getElementById("katculubPv").value = katculubPv;
                laserOnKatculub.style.display = "block";
                succubisAtkSprite.style.display = "block";
                succubisIdleSprite.style.display = "none";
                setTimeout(() => {
                    laserOnKatculub.style.display = "none";
                    succubisAtkSprite.style.display = "none";
                    succubisIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0
                skillInteraction.style.display = "none";
                if (katculubPv <= 0) {
                    katculubSprite.style.display = "none";
                }
            }
            else if (bunarokSelect == 1) {
                bunarokStatut = 1;
                renDef = 10;
                document.getElementById("bunarokPv").value = bunarokPv;
                laserOnBunarok.style.display = "block";
                succubisAtkSprite.style.display = "block";
                succubisIdleSprite.style.display = "none";
                setTimeout(() => {
                    laserOnBunarok.style.display = "none";
                    succubisAtkSprite.style.display = "none";
                    succubisIdleSprite.style.display = "block";
                }, "1000")
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0;
                skillInteraction.style.display = "none";
                if (bunarokPv <= 0) {
                    bunarokSprite.style.display = "none";
                }
            }
        }
    }
}



