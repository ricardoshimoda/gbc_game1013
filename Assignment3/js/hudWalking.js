var setWalking = function(){
    window.addEventListener('mousewheel',mouseWheelWalkingHandler, true);    
}

var unsetWalking = function(){
    window.removeEventListener('mousewheel',mouseWheelWalkingHandler);    
}

function mouseWheelWalkingHandler(event)
{
    console.log(event);
    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    event.stopPropagation();
    return false;
}

var capturePlayerWalkingActions = function(keyCode){
    console.log('keyCode pressed: ' + keyCode);
    switch(keyCode){
        case 72:
        case 104:
            console.log('hurt player');
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
       
    }
}

