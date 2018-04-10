var setWalking = function(){

}

var unsetWalking = function(){
}

var weaponSelectionActive = false;
var powerSelectionActive = false;

function mouseWheelWalkingHandler(e)
{
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    if(weaponSelectionActive){
        if(delta > 0){
            playerWeaponSelected ++;
        }
        else{
            playerWeaponSelected--;
        }
        if(playerWeaponSelected > 4){
            playerWeaponSelected = 0;
        }
        else if(playerWeaponSelected < 0){
            playerWeaponSelected = 4;
        }
    }
    else if(powerSelectionActive){
        if(delta > 0){
            playerPowerSelected ++;
        }
        else{
            playerPowerSelected--;
        }
        if(playerPowerSelected > 2){
            playerPowerSelected = 0;
        }
        else if(playerPowerSelected < 0){
            playerPowerSelected = 2;
        }
    }


    return false;
}

var captureOverlayLetGo = function(keyCode){
    switch(keyCode){
        case 84:
        case 116:            
            window.removeEventListener('mousewheel',mouseWheelWalkingHandler);    
            var selectionAreas = document.getElementById('weaponOvershadow');
            selectionAreas.style.display = 'none';
            var weaponSelectionArea = document.getElementById('weaponPopUp');
            weaponSelectionArea.style.display = 'none';
            weaponSelectionActive = false;
            return true;
        case 86:
        case 118:
            powerSelectionActive = false;
            window.removeEventListener('mousewheel',mouseWheelWalkingHandler);    
            var selectionAreas = document.getElementById('weaponOvershadow');
            selectionAreas.style.display = 'none';
            var powerSelectionArea = document.getElementById('powerPopUp');
            powerSelectionArea.style.display = 'none';            
            return true;
    }
}

var capturePlayerWalkingActions = function(keyCode){
    switch(keyCode){
        case 72:
        case 104:
            /* Harm the Player randomly */
            playerHealth -= Math.floor(Math.random() * 9 + 1);
            if(playerHealth <= 0)
            {
                unsetGame();
                transitionScene(currentScene, 'death');
            }
            return true;
        case 79:
        case 111:
            playerHealth += 10; // Always fixed value for health packs
            if(playerHealth > 100){
                playerHealth = 100;
            }
            return true;
        case 67:
        case 99:
            if (playerMana >= 10){
                playerMana -= 10; // Always fixed value for mana usage
                showPopUp('Power Deployed');
            }
            else{
                console.log('where is this pop-up!');
                showPopUp('No more mana - fail');
            }
            return true;
        case 90:
        case 122:
            playerMana += 10; // Always fixed value for mana replenishment
            if(playerMana > 100){
                playerMana = 100;
            }
            return true;
        case 77:
        case 109:
            var expenses = Math.random()*100 + 50;
            if(playerMoney < expenses){
                showPopUp('You can\'t buy this: $' + expenses.toFixed(2));
            }
            else{
                playerMoney -= expenses;
                showPopUp('You just bought: $' + expenses.toFixed(2));
            }
            return true;
        case 81:
        case 113:
            if(playerGun > 0){
                playerGun--;
                showPopUp('You used your weapon ');
            }
            else{
                showPopUp('Fix / reload your weapon ');
            }
            return true;
        case 65:
        case 97:
            playerGun = 20;
            showPopUp('Weapon fixed / reloaded');
            return true;
        case 84:
        case 116:
            weaponSelectionActive = true;
            window.addEventListener('mousewheel',mouseWheelWalkingHandler, true);    
            var selectionAreas = document.getElementById('weaponOvershadow');
            selectionAreas.style.display = 'block';
            var weaponSelectionArea = document.getElementById('weaponPopUp');
            weaponSelectionArea.style.display = 'block';            
            return true;
        case 86:
        case 118:
            powerSelectionActive = true;
            window.addEventListener('mousewheel',mouseWheelWalkingHandler, true);    
            var selectionAreas = document.getElementById('weaponOvershadow');
            selectionAreas.style.display = 'block';
            var powerSelectionArea = document.getElementById('powerPopUp');
            powerSelectionArea.style.display = 'block';            
            return true;
       
    }
}

