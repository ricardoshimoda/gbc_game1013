var inter = {};
var mainTop = 0;

window.onload = function()
{
    var start = document.getElementById('start');
    start.style.height = '0px';
    start.style.visibility = 'visible';
    inter = this.setInterval(
        function(){
            start.style.height = (mainTop++)+'px';
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
        transitionScene('start','menu');
    }
};

var transitionScene = function (scene1, scene2){
    
}