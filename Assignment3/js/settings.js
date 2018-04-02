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
    document.getElementById(settingPlaceholder[currentSettingIndex]).style.display='block';
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
        document.getElementById(settingPlaceholder[currentSettingIndex]).style.display='block';
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
    document.getElementById(settingPlaceholder[currentSettingIndex]).style.display='block';
    document.getElementById('currentSettingsTitle').innerHTML = settingArray[currentSettingIndex];
};

document.getElementById('frontwalk').addEventListener('click', function(){
    console.log(this.innerHTML);
    var letter = this.innerHTML;
    document.getElementById('frontwalkinput').style.display='inline';
    document.getElementById('frontwalkinput').value=letter;
    document.getElementById('frontwalkbtn').style.display='inline';
    this.style.display='none';
});
document.getElementById('frontwalkbtn').addEventListener('click',function(){
    document.getElementById('frontwalk').innerHTML = document.getElementById('frontwalkinput').value;
    document.getElementById('frontwalkinput').style.display='none';
    document.getElementById('frontwalkbtn').style.display='none';
    document.getElementById('frontwalk').style.display='inline';
});

document.getElementById('backwalk').addEventListener('click', function(){
    console.log(this.innerHTML);
    var letter = this.innerHTML;
    document.getElementById('backwalkinput').style.display='inline';
    document.getElementById('backwalkinput').value=letter;
    document.getElementById('backwalkbtn').style.display='inline';
    this.style.display='none';
});
document.getElementById('backwalkbtn').addEventListener('click',function(){
    document.getElementById('backwalk').innerHTML = document.getElementById('backwalkinput').value;
    document.getElementById('backwalkinput').style.display='none';
    document.getElementById('backwalkbtn').style.display='none';
    document.getElementById('backwalk').style.display='inline';
});
document.getElementById('leftwalk').addEventListener('click', function(){
    console.log(this.innerHTML);
    var letter = this.innerHTML;
    document.getElementById('leftwalkinput').style.display='inline';
    document.getElementById('leftwalkinput').value=letter;
    document.getElementById('leftwalkbtn').style.display='inline';
    this.style.display='none';
});
document.getElementById('leftwalkbtn').addEventListener('click',function(){
    document.getElementById('leftwalk').innerHTML = document.getElementById('leftwalkinput').value;
    document.getElementById('leftwalkinput').style.display='none';
    document.getElementById('leftwalkbtn').style.display='none';
    document.getElementById('leftwalk').style.display='inline';
});
document.getElementById('rightwalk').addEventListener('click', function(){
    console.log(this.innerHTML);
    var letter = this.innerHTML;
    document.getElementById('rightwalkinput').style.display='inline';
    document.getElementById('rightwalkinput').value=letter;
    document.getElementById('rightwalkbtn').style.display='inline';
    this.style.display='none';
});
document.getElementById('rightwalkbtn').addEventListener('click',function(){
    document.getElementById('rightwalk').innerHTML = document.getElementById('rightwalkinput').value;
    document.getElementById('rightwalkinput').style.display='none';
    document.getElementById('rightwalkbtn').style.display='none';
    document.getElementById('rightwalk').style.display='inline';
});


document.getElementById('frontdrive').addEventListener('click', function(){
    console.log(this.innerHTML);
    var letter = this.innerHTML;
    document.getElementById('frontdriveinput').style.display='inline';
    document.getElementById('frontdriveinput').value=letter;
    document.getElementById('frontdrivebtn').style.display='inline';
    this.style.display='none';
});
document.getElementById('frontdrivebtn').addEventListener('click',function(){
    document.getElementById('frontdrive').innerHTML = document.getElementById('frontdriveinput').value;
    document.getElementById('frontdriveinput').style.display='none';
    document.getElementById('frontdrivebtn').style.display='none';
    document.getElementById('frontdrive').style.display='inline';
});

document.getElementById('backdrive').addEventListener('click', function(){
    console.log(this.innerHTML);
    var letter = this.innerHTML;
    document.getElementById('backdriveinput').style.display='inline';
    document.getElementById('backdriveinput').value=letter;
    document.getElementById('backdrivebtn').style.display='inline';
    this.style.display='none';
});
document.getElementById('backdrivebtn').addEventListener('click',function(){
    document.getElementById('backdrive').innerHTML = document.getElementById('backdriveinput').value;
    document.getElementById('backdriveinput').style.display='none';
    document.getElementById('backdrivebtn').style.display='none';
    document.getElementById('backdrive').style.display='inline';
});
document.getElementById('leftdrive').addEventListener('click', function(){
    console.log(this.innerHTML);
    var letter = this.innerHTML;
    document.getElementById('leftdriveinput').style.display='inline';
    document.getElementById('leftdriveinput').value=letter;
    document.getElementById('leftdrivebtn').style.display='inline';
    this.style.display='none';
});
document.getElementById('leftdrivebtn').addEventListener('click',function(){
    document.getElementById('leftdrive').innerHTML = document.getElementById('leftdriveinput').value;
    document.getElementById('leftdriveinput').style.display='none';
    document.getElementById('leftdrivebtn').style.display='none';
    document.getElementById('leftdrive').style.display='inline';
});
document.getElementById('rightdrive').addEventListener('click', function(){
    console.log(this.innerHTML);
    var letter = this.innerHTML;
    document.getElementById('rightdriveinput').style.display='inline';
    document.getElementById('rightdriveinput').value=letter;
    document.getElementById('rightdrivebtn').style.display='inline';
    this.style.display='none';
});
document.getElementById('rightdrivebtn').addEventListener('click',function(){
    document.getElementById('rightdrive').innerHTML = document.getElementById('rightdriveinput').value;
    document.getElementById('rightdriveinput').style.display='none';
    document.getElementById('rightdrivebtn').style.display='none';
    document.getElementById('rightdrive').style.display='inline';
});

document.getElementById('btnBackSettings').addEventListener('click', backSettings)
document.getElementById('btnNextSettings').addEventListener('click', nextSettings)
setSettings();
