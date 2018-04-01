document.getElementById('btnResumeGame').addEventListener('click', function(){
    transitionScene('pauseMenu', 'game', false, setGame);
});
document.getElementById('btnInventory').addEventListener('click', function(){

});
document.getElementById('btnMissions').addEventListener('click', function(){

});
document.getElementById('btnBudget').addEventListener('click', function(){

});
document.getElementById('btnTraits').addEventListener('click', function(){

});
document.getElementById('btnSettings').addEventListener('click', function(){

});
document.getElementById('btnStatistics').addEventListener('click', function(){

});
document.getElementById('btnPauseQuit').addEventListener('click', function(){
    transitionScene('pauseMenu', 'confirmQuit');
});