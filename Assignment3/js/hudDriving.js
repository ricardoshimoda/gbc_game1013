var turretInterval = {};

var setDriving = function(){
    turretInterval = setInterval(decreaseTemperature, 1000);
};

var unsetDriving = function(){
    clearInterval(turretInterval);    
};

var decreaseTemperature = function(){
    if(playerCarTemperature > 0){
        playerCarTemperature -= (Math.floor(Math.random() * 5 )+1);
        if(playerCarTemperature < 0){
            playerCarTemperature = 0;
        }
    }
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
        case 84:
        case 116:
            if(playerCarTemperature > 100)
            {
                showPopUp('Too hot to shoot');
            }
            else{
                showPopUp('shooting');
                playerCarTemperature += Math.floor(Math.random() *40);
            }
            return true;
    }
}
