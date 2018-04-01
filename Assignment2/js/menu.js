document.getElementById('btnNewGame').addEventListener('click',function(){
    transitionScene('menu', 'newGame');
});
document.getElementById('btnLoadGame').addEventListener('click',function(){
    transitionScene('menu', 'loadGame');
});
document.getElementById('btnSettings').addEventListener('click',function(){
    transitionScene('menu', 'settings', false, setSettings);
});
document.getElementById('btnCredits').addEventListener('click',function(){
    transitionScene('menu', 'credits');
});
document.getElementById('btnQuit').addEventListener('click',function(){
    transitionScene('menu', 'quit');
});
