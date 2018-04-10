
var mapInterval = {};
var goingUp = false;
var goingDown = false;
var goingLeft = false;
var goingRight = false;
var initialPosX = 10;
var initialPosY = 10;
var skip = 20;

var hudInterval = {};
var playerHealth = 100;
var playerMana = 100;
var playerOxygen = 100;
var playerCarArmor = 100;
var playerCarHealth = 100;
var playerCarTemperature = 0;
var playerMoney = 2000.00;
var playerXP = 10638;
var playerLevel = 0;
var playerGun = 20;
var playerWeaponSelected = 4;
var playerPowerSelected = 0;
var playerCurrentMission = 'Get Next Piece Of Clothing';

var titleEventSet = false;

var playerMaxGun = 20;
var XPLevels = [
    100000, 200000, 300000, 400000, 500000, 750000, 1000000
];

var resetPlayerValues = function(){
    playerHealth = 100;
    playerMana = 100;
    playerOxygen = 100;
    playerCarArmor = 100;
    playerCarHealth = 100;
    playerCarTemperature = 0;
    playerMoney = 2000.00;
    playerXP = 10638;
    playerLevel = 0;
    playerGun = 20;
    weaponSelected = 4;
};

var capturePageTransitions = function(keyCode){
    switch(keyCode){
        case 68:
        case 100: // DRIVING
            if(currentScene != 'driving'){
                unsetGame();
                transitionScene(currentScene, 'driving', false, setGame);
            }
            return true;
        case 83:
        case 115: // SWIMMING
            if(currentScene != 'swimming'){
                unsetGame();
                transitionScene(currentScene, 'swimming', false, setGame);
            }
            return true;
        case 87:
        case 119: // WALKING
            if(currentScene != 'game'){
                unsetGame();
                transitionScene(currentScene, 'game', false, setGame);
            }
            return true;
        case 80:
        case 112: // PAUSE MENU
            unsetGame();
            transitionScene(currentScene, 'pauseMenu', false, setPauseBack);    
            return true;
        case 76:
        case 108: // RELOAD
            unsetGame();
            transitionScene(currentScene, 'charging', false, chargingBegin);
            return true;
    }
    return false;
}

var captureMapMove = function(keyCode){
    switch(keyCode){
        /* Setting up the variables that move the map */
        case 37: // GOING LEFT
            goingLeft = true;
            return true;
        case 38: // GOING UP
            goingUp = true;
            return true;
        case 39: // GOING RIGHT
            goingRight = true;
            return true;
        case 40: // GOING DOWN
            goingDown = true;
            return true;
    }
    return false;
}

var capturePlayerCommonActions = function(keyCode){
    /* Common actions which affect the player no matter what */
    switch(keyCode){
        case 69:
        case 101: 
            playerMoney += (Math.random() * 75);
            return true;
        case 88:
        case 120:
            playerXP += Math.floor(Math.random() * 7500 );
            if(playerXP > XPLevels[playerLevel]){
                playerXP = 0;
                playerLevel++;
            }
            return true;        
    }
    return false;
}

var redrawControls = function(){
    var healthControls = document.getElementsByClassName('HUDHealthBar');
    for(var ctrl = 0; ctrl < healthControls.length; ctrl++)
    {
        healthControls[ctrl].style.width = (1.7*playerHealth) + 'px';
    }
    var manaControls = document.getElementsByClassName('HUDPowerBar');
    for(var ctrl = 0; ctrl < manaControls.length; ctrl++)
    {
        manaControls[ctrl].style.width = (1.7*playerMana) + 'px';
    }
    var oxygenControls = document.getElementsByClassName('HUDOxygenBar');
    for(var ctrl = 0; ctrl < oxygenControls.length; ctrl++)
    {
        oxygenControls[ctrl].style.width = (1.7*playerOxygen) + 'px';
    }
    var moneyControls = document.getElementsByClassName('HUDMoneyContent');
    for(var ctrl = 0; ctrl < moneyControls.length; ctrl++)
    {
        moneyControls[ctrl].innerHTML = '$' + playerMoney.toFixed(2);
    }
    var xpControls = document.getElementsByClassName('HUDXPContent');
    for(var ctrl = 0; ctrl < xpControls.length; ctrl++)
    {
        xpControls[ctrl].innerHTML = playerXP + ' / ' + XPLevels[playerLevel];
    }
    var gunControlShoot = document.getElementById('HUDWeaponAmmo');
    gunControlShoot.innerHTML = playerGun + ' / ' + playerMaxGun;

    var turretTemperatureImage = 'img/HUDGauge/' + (Math.floor(playerCarTemperature / 10) * 10) + '.png';
    if(playerCarTemperature >= 100){
        turretTemperatureImage = 'img/HUDGauge/100.png'; 
    }

    var gaugeImage = document.getElementById('HUDEngineGauge');
    gaugeImage.src = turretTemperatureImage;

    var carArmorIndicator = document.getElementById('HUDArmorBar');
    carArmorIndicator.style.width = (1.7*playerCarArmor) + 'px';

    var carHealthIndicator = document.getElementById('HUDCarBar');
    carHealthIndicator.style.width =(1.7*playerCarHealth) + 'px';

    var weaponOverlays = document.getElementsByClassName('selectedItemOverlay');
    for(var ctrl = 0; ctrl < weaponOverlays.length; ctrl++)
    {
        weaponOverlays[ctrl].style.display='none';
    }
    var selectedWeaponOverlay = document.getElementById('weaponSelectedOverlay_' + playerWeaponSelected);
    selectedWeaponOverlay.style.display='block';
    var selectedWeaponHUD = document.getElementById('HUDWeaponImage');
    selectedWeaponHUD.style.backgroundImage = 'url(img/I' + playerWeaponSelected + '.png)';

    var powerOverlays = document.getElementsByClassName('selectedPowerOverlay');
    for(var ctrl = 0; ctrl < powerOverlays.length; ctrl++)
    {
        powerOverlays[ctrl].style.display='none';
    }
    var selectedPowerOverlay = document.getElementById('powerSelectedOverlay_' + playerPowerSelected);
    selectedPowerOverlay.style.display='block';
    var selectedPowerHUDs = document.getElementsByClassName('HUDSpell');
    for(var ctrl = 0; ctrl < selectedPowerHUDs.length; ctrl++)
    {
        selectedPowerHUDs[ctrl].style.backgroundImage = 'url(img/P' + playerPowerSelected + '.png)';
    }

    var missionBillboards = document.getElementsByClassName('HUDMissionHighlight');
    for(var ctrl = 0; ctrl < missionBillboards.length; ctrl++)
    {
        missionBillboards[ctrl].innerHTML=playerCurrentMission;
    }
    
}

var goingPlaces = function(event){
    if(capturePageTransitions(event.keyCode))
        return;
    if(captureMapMove(event.keyCode))
        return;
    if(capturePlayerCommonActions(event.keyCode))
        return;
    /* Actions that depend on the game scene */
    if(currentScene == 'game'){
        capturePlayerWalkingActions(event.keyCode);
    }
    else if(currentScene == 'swimming'){
        capturePlayerSwimmingActions(event.keyCode);
    }
    else{
        capturePlayerDrivingActions(event.keyCode);
    }
    event.preventDefault();
}

var stopMovingMap = function(event){
    switch (event.keyCode)
	{
        /* Setting up the variables that move the map */
        case 37: // GOING LEFT
            goingLeft = false;
            return;
        case 38: // GOING UP
            goingUp = false;
            return;
        case 39: // GOING RIGHT
            goingRight = false;
            return;
        case 40: // GOING DOWN
            goingDown = false;
            return;        
    }
    if(currentScene == 'game')
    {
        captureOverlayLetGo(event.keyCode);
    }
    else if(currentScene == 'swimming'){
        captureOverlaySwimmingLetGo(event.keyCode);
    }
    event.preventDefault();
};

var unsetGame = function(){
    window.removeEventListener('keydown',goingPlaces);
    window.addEventListener('keyup',stopMovingMap);
    clearInterval(mapInterval);
    clearInterval(hudInterval);
    if(currentScene == 'game'){
        unsetWalking();
    }
    else if(currentScene == 'swimming'){
        unsetSwimming();
    }
    else{
        unsetDriving();
    }
};


var setGame = function(){
    if(!titleEventSet){
        titleEventSet = true;
        var missionContainers = document.getElementsByClassName('HUDMissionContainer');
        for(var ctrl = 0; ctrl < missionContainers.length; ctrl++)
        {
            missionContainers[ctrl].addEventListener('dblclick', function(){
                var missionTitle = '';
                while (missionTitle == ''){
                    missionTitle = prompt("Please enter the new mission title", playerCurrentMission);
                }
                playerCurrentMission = missionTitle;
            });
        }
        }
    /* every time we enter the game again we reset the player values */
    resetPlayerValues();
    window.addEventListener('keydown',goingPlaces, true);
    window.addEventListener('keyup',stopMovingMap, true);
    if(currentScene == 'game'){
        setWalking();
    }
    else if(currentScene == 'swimming'){
        setSwimming();
    }
    else{
        setDriving();
    }
    var mapArray = document.getElementsByClassName('HUDMap');
    for(var mp = 0; mp < mapArray.length; mp++){
        mapArray[mp].style.top = (window.innerHeight-200) + 'px';
        mapArray[mp].style.left = '20px';
    }
    var myCurrentMap = document.getElementById(currentScene + 'Map');
    myCurrentMap.style.backgroundPosition = (initialPosX)+'px ' + initialPosY + 'px';
    mapInterval = setInterval(moveMap, 100);
    hudInterval = setInterval(redrawControls, 500);
};

var moveMap = function(){
    if(goingUp)
    {
        initialPosY+=skip;
    }
    if(goingDown){
        initialPosY-=skip;
    }
    if(goingLeft){
        initialPosX+=skip;
    }
    if(goingRight){
        initialPosX-=skip;
    }
    var myCurrentMap = document.getElementById(currentScene + 'Map');
    myCurrentMap.style.backgroundPosition = (initialPosX)+'px ' + initialPosY + 'px';
};

