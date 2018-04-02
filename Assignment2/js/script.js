var inter = {};
var mainTop = 0;
const step =10;
var previousScene = '';

window.onload = function(){
    //showStartScreen();
    showAnyScreen('traits');
}

var showAnyScreen = function(name){
    var screen = document.getElementById(name);
    screen.style.visibility = 'visible';
    screen.style.top = '0px';
    screen.style.height = '100%';
    screen.style.width = '100%';
}

var showStartScreen =  function()
{
    var start = document.getElementById('start');
    start.style.height = '0px';
    start.style.visibility = 'visible';
    inter = this.setInterval(
        function(){
            mainTop = mainTop+step;
            start.style.height = (mainTop)+'px';
            if(parseInt(start.style.height) >= window.innerHeight){
                start.style.height = '100%';
                clearInterval(inter);
                var progressEnsemble = document.getElementById('progressEnsemble');
                progressEnsemble.visibility='visible';
                var topleftlogo = document.getElementById('topleftlogo');
                topleftlogo.style.visibility='visible';
                inter = this.setInterval(percentageBar,100);
            } 
        }
        ,10);

};

var currentFill = 0;
var percentageBar = function(){
    var filler = document.getElementById('currentProgress');
    var message = document.getElementById('loadingText');
    if(Math.random() > .3){
        filler.style.width = (currentFill++) + '%';
    }
    if(currentFill > 15 && currentFill < 30){
        message.innerHTML = 'This might take a while...';
    }
    else if(currentFill >= 30 && currentFill < 50){
        message.innerHTML = 'Let me tell a joke';
    }
    else if(currentFill >= 50 && currentFill < 65){
        message.innerHTML = 'How many ears does Spock have?';
    }
    else if(currentFill >= 65 && currentFill < 90 ){
        message.innerHTML = '3. The left ear, the right ear, and the final front-ear!';
    }
    else if(currentFill >= 90 ){
        message.innerHTML = 'Time flies when we are having fun - it is ready!';
    }
    if(currentFill > 100){
        clearInterval(inter);
        transitionScene('start','menu', true);
    }
};

var transitionScene = function (sceneId1, sceneId2, hide, callback){
    previousScene = sceneId1; /* just in case */
    var scene1 = document.getElementById(sceneId1);
    var scene2 = document.getElementById(sceneId2);
    scene2.style.visibility = 'visible';
    scene2.style.top = window.innerHeight + 'px';
    scene2.style.height = window.innerHeight + 'px';
    scene2.style.minHeight = window.innerHeight + 'px';
    mainTop = 0;
    if(hide){
        var childrenOfScene1 = scene1.childNodes;
        for(var ch = 0; ch < childrenOfScene1.length; ch++) {
            if(childrenOfScene1[ch].style != undefined){
                childrenOfScene1[ch].style.visibility = 'hidden';
            }
        }
    }
    inter = setInterval(gradualTransition, 5,scene1,scene2,callback);
};

var isFunction = function (functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
};

var gradualTransition = function(scene1, scene2, onload){
    mainTop++;
    scene1.style.top = ((-1) * mainTop )+'px';
    scene2.style.top = (window.innerHeight + (-1)*mainTop)+'px';
    if(parseInt(scene2.style.top) <= 0){
        scene1.style.visibility = 'hidden';
        scene2.style.top = '0px';
        clearInterval(inter);
        if(isFunction(onload)){
            onload();
        }
    }
};

var removeOverlay = function(overlayName){
    var affectedOverlays = document.getElementsByClassName(overlayName);
    for(var ovl = 0; ovl < affectedOverlays.length; ovl++){
        affectedOverlays[ovl].style.display='none';
    }
};
var printOverlay = function(overlayName, nodes, width){
    for(var nds = 0; nds < nodes.length; nds++){
        if(nodes[nds] != undefined && nodes[nds].className == overlayName){
            if(width && width!=undefined){
                nodes[nds].style.width = width+'px';
            }
            nodes[nds].style.display='block';
            break;
        }
    }
};

