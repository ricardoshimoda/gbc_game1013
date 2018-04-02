document.getElementById('btnBackPauseMenu').addEventListener('click',function(){
    transitionScene('confirmQuit', 'pauseMenu');
});
document.getElementById('btnContinueMainMenu').addEventListener('click',function(){
    transitionScene('confirmQuit', 'menu');
});