var swimmingInterval = {};
var setSwimming = function(){
    window.addEventListener('mousewheel',mouseWheelSwimmingHandler, true);    
    swimmingInterval = setInterval(decreaseOxygen, 1000);
};
var decreaseOxygen = function(){
    initialOxygen
}

var unsetSwimming = function(){
    window.removeEventListener('mousewheel',mouseWheelSwimmingHandler);    

};

var mouseWheelSwimmingHandler = function(event){

} ;

var capturePlayerSwimmingActions = function(keyCode){
    switch(keyCode){
        case 66:
        case 98:
            playerOxygen = 100;
            break;
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

       
    }
}
