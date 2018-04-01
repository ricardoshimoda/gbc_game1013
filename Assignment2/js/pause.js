document.getElementById('btnResumeGame').addEventListener('click', function(){
    transitionScene('pauseMenu', 'game', false, setGame);
});
document.getElementById('btnInventory').addEventListener('click', function(){
    transitionScene('pauseMenu', 'inventory', false, setSettings);
});
document.getElementById('btnMissions').addEventListener('click', function(){
    transitionScene('pauseMenu', 'missions', false, setSettings);
});
document.getElementById('btnBudget').addEventListener('click', function(){
    transitionScene('pauseMenu', 'budget', false, setSettings);
});
document.getElementById('btnTraits').addEventListener('click', function(){
    transitionScene('pauseMenu', 'traits', false, setSettings);
});
document.getElementById('btnSettings').addEventListener('click', function(){
    transitionScene('pauseMenu', 'settings', false, setSettings);
});
document.getElementById('btnStatistics').addEventListener('click', function(){
    transitionScene('pauseMenu', 'statistics', false, setSettings);
});
document.getElementById('btnPauseQuit').addEventListener('click', function(){
    transitionScene('pauseMenu', 'confirmQuit');
});