var dialog = document.getElementById("dialogue");
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

atkInteraction.onclick = function(){
    if(turn==1 || turn==2 || turn==3 || turn==4){
        if(turn==1){
            
        }
    }
}


/*if(turn==1){
    renStatistique.style.display = "block";
    
    if(atkSelect==1){
        console.log('je rentre dans le if')
        dialog.innerHTML = "qui attaquer vous?";
        if(dogenadonSelect==1){
            dogenadonPv = dogenadonPv - renAtk;
            renDef=10;
            turn++;
        }
        else if(katculubSelect==1){
            katculubPv = katculubPv - renAtk;
            renDef=10;
            turn++;
        }
        else if(bunarokSelect==1){
            bunarokPv = bunarokPv - renAtk;
            renDef=10;
            turn++;
        }
    }
    else if(defSelect==1){
        renDef=20;
        turn++;
    }
    else if(skillSelect==1){
        if(RenSelect=1){
            renPv=150;
            turn++;
        }
        if(RagisSelect==1){
            ragisPv=200;
            turn++;
        }
        if(AlliaSelect==1){
            alliaPv=100;
            turn++;
        }
        if(SuccubisSelect==1){
            succubisPv=100;
            turn++;
        }

    }
}




    
while(( renPv > 0 , ragisPv > 0 , alliaPv > 0 , succubisPv > 0 )||( dogenadon > 0 , katculub > 0 , bunarok > 0));*/
