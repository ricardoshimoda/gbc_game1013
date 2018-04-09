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
            }
            else{
                // say that invocation failed
            }
            return true;
        case 80:
        case 112:
            playerMana += 10; // Always fixed value for mana replenishment
            if(playerMana > 100){
                playerMana = 100;
            }
            return true;
        case 77:
        case 109:
            var expenses = math.random()*100 + 50;
            if(playerMoney < expenses){
                // Sorry - you can't buy this item
            }
            else{
                player -= expenses;
            }
            return true;
       
    }
}

