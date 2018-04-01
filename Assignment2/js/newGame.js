var heroSelected = false;
var powerOneSelected = false;
var powerTwoSelected = false;

var heroSelection = function(){
    heroSelected = true;
    var heroName = this.getAttribute('hero');
    document.getElementById('chosenCharacter').src='img/'+heroName+'.png';
    var selectedHeros = document.getElementsByClassName('selectedHeroOverlay');
    for(var sho = 0; sho < selectedHeros.length; sho++){
        selectedHeros[sho].style.display='none';
    }
    var childs = this.childNodes;
    for(var ch = 0; ch < childs.length; ch++){
        console.log(ch);
        if(childs[ch] != undefined && childs[ch].className == 'selectedHeroOverlay'){
            childs[ch].style.display='block';
            break;
        }
    }
};

var heroControls = document.getElementsByClassName('hero');
for(var hcs = 0; hcs < heroControls.length; hcs++){
    heroControls[hcs].addEventListener('click',heroSelection);
}

