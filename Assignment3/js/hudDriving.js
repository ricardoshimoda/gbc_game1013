var setDriving = function(){
    
};

var unsetDriving = function(){
    
};

var capturePlayerDrivingActions = function(keyCode){
    switch(keyCode){
        case 82:
        case 114:
            var carDamage = Math.floor(Math.random() * 9 + 1);
            if(playerCarArmor > 0){
                playerCarArmor -= carDamage;
                if(playerCarArmor < 0){
                    playerCarHealth -= playerCarArmor;
                    playerCarArmor = 0; 
                }
            }
            else{
                playerCarHealth -= carDamage;
            }
            if(playerCarHealth < 0){
                unsetGame();
                transitionScene(currentScene, 'death');
            }
            return true;
        case 75:
        case 107:
            playerCarHealth += 10; 
            if(playerCarHealth > 100){
                playerCarHealth = 100;
            }
            return true;
        case 71:
        case 103:
            playerCarArmor = 100;
            playerCarHealth = 100;
            return true;
    }
}
