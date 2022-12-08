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

console.log(renPv);
console.log(ragisPv);
console.log(alliaPv);
console.log(succubisPv);
console.log(renMana);
console.log(ragisMana);
console.log(alliaMana);
console.log(succubisMana);

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


renStatistique.style.display = "block";
ragisStatistique.style.display = "none";
alliaStatistique.style.display = "none";
succubisStatistique.style.display = "none";
atkInteraction.onclick = function(){
    if(turn==1 || turn==2 || turn==3 || turn==4){
        if(turn==1 && renPv > 0){
            if(dogenadonSelect==1){
                dogenadonPv = dogenadonPv - renAtk;
                dialog.innerHTML = "vous taper le Dogenadon";
                renDef=10;
                document.getElementById("dogenadonPv").value = dogenadonPv;
                cutOnDogenadon.style.display = "block";
                renAtkSprite.style.display = "block";
                renIdleSprite.style.display = "none";
                setTimeout(() =>{
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
                bunarokSelect = 0
                if(dogenadonPv <= 0){
                    dogenadonSprite.style.display = "none";
                }
            }
            else if(katculubSelect==1){
                katculubPv = katculubPv - renAtk;
                renDef=10;
                document.getElementById("katculubPv").value = katculubPv;
                cutOnKatculub.style.display = "block";
                renAtkSprite.style.display = "block";
                renIdleSprite.style.display = "none";
                setTimeout(() =>{
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
                bunarokSelect = 0
                if(katculubPv <= 0){
                    katculubSprite.style.display = "none";
                }
            }
            else if(bunarokSelect==1){
                bunarokPv = bunarokPv - renAtk;
                renDef=10;
                document.getElementById("bunarokPv").value = bunarokPv;
                cutOnBunarok.style.display = "block";
                renAtkSprite.style.display = "block";
                renIdleSprite.style.display = "none";
                setTimeout(() =>{
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
                bunarokSelect = 0
                if(bunarokPv <= 0){
                    bunarokSprite.style.display = "none";
                }
            }
        }
        dialog.innerHTML = "choisissez votre cible";
        if(turn==2 && ragisPv > 0){
            renStatistique.style.display = "none";
            ragisStatistique.style.display = "block";
            alliaStatistique.style.display = "none";
            succubisStatistique.style.display = "none";
            dialog.innerHTML = "qui attaquez vous?";
            if(dogenadonSelect==1){
                dogenadonPv = dogenadonPv - ragisAtk;
                ragisDef=10;
                document.getElementById("dogenadonPv").value = dogenadonPv;
                multihitOnDogenadon.style.display = "block";
                ragisAtkSprite.style.display = "block";
                ragisIdleSprite.style.display = "none";
                setTimeout(() =>{
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
                if(dogenadonPv <= 0){
                    dogenadonSprite.style.display = "none";
                }
            }
            else if(katculubSelect==1){
                katculubPv = katculubPv - ragisAtk;
                ragisDef=10;
                document.getElementById("katculubPv").value = katculubPv;
                multihitOnKatculub.style.display = "block";
                ragisAtkSprite.style.display = "block";
                ragisIdleSprite.style.display = "none";
                setTimeout(() =>{
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
                if(katculubPv <= 0){
                    katculubSprite.style.display = "none";
                }
            }
            else if(bunarokSelect==1){
                bunarokPv = bunarokPv - ragisAtk;
                ragisDef=10;
                document.getElementById("bunarokPv").value = bunarokPv;
                multihitOnBunarok.style.display = "block";
                ragisAtkSprite.style.display = "block";
                ragisIdleSprite.style.display = "none";
                setTimeout(() =>{
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
                if(bunarokPv <= 0){
                    bunarokSprite.style.display = "none";
                }
            }
        }
        dialog.innerHTML = "choisissez votre cible";
        if(turn==3 && alliaPv > 0){
            renStatistique.style.display = "none";
            ragisStatistique.style.display = "none";
            alliaStatistique.style.display = "block";
            succubisStatistique.style.display = "none";
            dialog.innerHTML = "qui attaquez vous?";
            if(dogenadonSelect==1){
                dogenadonPv = dogenadonPv - alliaAtk;
                alliaDef=10;
                document.getElementById("dogenadonPv").value = dogenadonPv;
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0;
                if(dogenadonPv <= 0){
                    dogenadonSprite.style.display = "none";
                }
            }
            else if(katculubSelect==1){
                katculubPv = katculubPv - alliaAtk;
                alliaDef=10;
                document.getElementById("katculubPv").value = katculubPv;
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0
                if(katculubPv <= 0){
                    katculubSprite.style.display = "none";
                }
            }
            else if(bunarokSelect==1){
                bunarokPv = bunarokPv - alliaAtk;
                alliaDef=10;
                document.getElementById("bunarokPv").value = bunarokPv;
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0;
                if(bunarokPv <= 0){
                    bunarokSprite.style.display = "none";
                }
            }
        }
        dialog.innerHTML = "choisissez votre cible";
        if(turn==4 && succubisPv > 0){
            renStatistique.style.display = "none";
            ragisStatistique.style.display = "none";
            alliaStatistique.style.display = "none";
            succubisStatistique.style.display = "block";
            dialog.innerHTML = "qui attaquez vous?";
            if(dogenadonSelect==1){
                dogenadonPv = dogenadonPv - succubisAtk;
                succubisDef=10;
                document.getElementById("dogenadonPv").value = dogenadonPv;
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0
                if(dogenadonPv <= 0){
                    dogenadonSprite.style.display = "none";
                }
            }
            else if(katculubSelect==1){
                katculubPv = katculubPv - succubisAtk;
                renDef=10;
                document.getElementById("katculubPv").value = katculubPv;
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0
                if(katculubPv <= 0){
                    katculubSprite.style.display = "none";
                }
            }
            else if(bunarokSelect==1){
                bunarokPv = bunarokPv - succubisAtk;
                renDef=10;
                document.getElementById("bunarokPv").value = bunarokPv;
                turn++;
                dogenadonStatistique.style.display = "none";
                katculubStatistique.style.display = "none";
                bunarokStatistique.style.display = "none";
                dogenadonSelect = 0;
                katculubSelect = 0;
                bunarokSelect = 0;
                if(bunarokPv <= 0){
                    bunarokSprite.style.display = "none";
                }
            }
        }
    }     
}




