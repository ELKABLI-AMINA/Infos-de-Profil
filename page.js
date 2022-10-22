var r1=document.querySelector("#r1");
var r2=document.querySelector("#r2");
var ch1=document.querySelector("#ch1");
var nomsocieté=document.querySelector("#nomsocieté");
var profil=document.querySelector("#profil");
var pays=document.querySelector("#pays");
var telephone=document.querySelector("#telephone");
var ch2=document.querySelector("#ch2");
var tarifs=document.querySelector("#tarifs");
var s1=document.querySelector("#s1");
var s2=document.querySelector("#s2");
var s3=document.querySelector("#s3");
var diverreur=document.querySelector("#diverreur");
var k=0;
function ajouter() {
    var i= s1.selectedIndex;
    var j= s2.selectedIndex;
    k++;
    s3.options[s3.options.length]= new Option(s1.options[i].text+" - "s2.options[j].text,k)
    
}
function valider() {
    if(profil.value==""){
        diverreur.innerHTML="profil obligatoir";
        return;
    }
    if(pays.selectedIndex<=0){
        diverreur.innerHTML="choisir pays";
        return;

    }
    
}

