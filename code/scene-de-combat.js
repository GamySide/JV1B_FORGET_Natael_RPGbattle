var renPv = document.getElementById("renPv").value;
var ragisPv = document.getElementById("ragisPv").value;
var alliaPv = document.getElementById("alliaPv").value;
var succubisPv = document.getElementById("succubisPv").value;
var renMana = document.getElementById("renMana").value;
var ragisMana = document.getElementById("ragisMana").value;
var alliaMana = document.getElementById("alliaMana").value;
var succubisMana = document.getElementById("succubisMana").value;
var dogenadonPv = document.getElementById("dogenadonPv").value;
var katculubPv = document.getElementById("katculubPv").value;
var bunarokPv = document.getElementById("bunarokPv").value;
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
var turn = 1

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
var atkSelect = document.getElementById("atkInteraction").onclick;
var defSelect = document.getElementById("defInteraction").onclick;
var skillSelect = document.getElementById("skillInteraction").onclick;
var RenSelect = document.getElementById("renSprite").onclick;
var RagisSelect = document.getElementById("ragisSprite").onclick;
var AlliaSelect = document.getElementById("alliaSprite").onclick;
var SuccubisSelect = document.getElementById("succubisSprite").onclick;
var DogenadonSelect = document.getElementById("dogenadonSprite").onclick;
var KatculubSelect = document.getElementById("katculubSprite").onclick;
var BunarokSelect =document.getElementById("bunarokSprite").onclick;


if(turn=1){
    renStatistique.style.display = "block";
    if(atkSelect=true){
        if(DogenadonSelect=true){
            dogenadonPv = dogenadonPv - renAtk;
            renDef=10
            turn++
        }
        else if(KatculubSelect=true){
            katculubPv = katculubPv - renAtk;
            renDef=10
            turn++
        }
        else if(BunarokSelect=true){
            bunarokPv = bunarokPv - renAtk;
            renDef=10
            turn++
        }
    }
    else if(defSelect=true){
        renDef=20
    }
    else if(skillSelect=true){
        if(RenSelect=true){
            renPv=150;
        }
        if(RagisSelect=true){
            ragisPv=200;
        }
        if(AlliaSelect=true){
            alliaPv=100;
        }
        if(SuccubisSelect=true){
            succubisPv=100;
        }

    }
}



/*do
    renStatistique.style.display = "block";
while(( renPv > 0 , ragisPv > 0 , alliaPv > 0 , succubisPv > 0 )||( dogenadon > 0 , katculub > 0 , bunarok > 0));*/
