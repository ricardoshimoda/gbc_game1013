var currentSettingIndex = 0;
var settingArray = [
    'Gameplay Settings',
    'Accessibility Settings',
    'Controller Mappings',
    'Audio Settings',
    'Graphics Settings',    
];
var settingPlaceholder = [
    'Gameplay',
    'Access',
    'Control',
    'Audio',
    'Graphics',        
];
var backTo = '';

var setSettings = function (){
    currentSettingIndex = 0;
    backTo = previousScene;
    var setSettingsTitle = document.getElementById('currentSettingsTitle');
    setSettingsTitle.innerHTML = settingArray[currentSettingIndex];
    removeOverlay('configPlaceholder');
    document.getElementById(settingPlaceholder[currentSettingIndex]).display='block';
};

var backSettings = function(){
    currentSettingIndex--;
    document.getElementById('btnNextSettings').style.visibility = 'visible';
    document.getElementById('btnBackSettings').className = 'halfButton lastButton';
    if(currentSettingIndex < 0){
        transitionScene('settings', backTo);
        backTo = '';
    }
    else{
        removeOverlay('configPlaceholder');
        document.getElementById(settingPlaceholder[currentSettingIndex]).display='block';
        document.getElementById('currentSettingsTitle').innerHTML = settingArray[currentSettingIndex];
    }
};

var nextSettings = function(){
    currentSettingIndex++;
    if(currentSettingIndex == settingArray.length-1){
        document.getElementById('btnNextSettings').style.visibility = 'hidden';
        document.getElementById('btnBackSettings').className = 'lastButton';
    }
    removeOverlay('configPlaceholder');
    document.getElementById(settingPlaceholder[currentSettingIndex]).display='block';
    document.getElementById('currentSettingsTitle').innerHTML = settingArray[currentSettingIndex];
};

document.getElementById('btnBackSettings').addEventListener('click', backSettings)
document.getElementById('btnNextSettings').addEventListener('click', nextSettings)
