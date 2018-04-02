
var missionDescriptionArray=[
    '<p>Communication is essential, specially when we are under surveillance</p>'
    + '<p>You have to simpy walk to that post office and deliver a message for us</p>'
    + '<p>But why is that box ticking so loudly?</p>'
    + '<p>FBI investigators: 10</p>'
    + '<p>Undelivered Gifts: 2</p>',

    '<p>This time you had better get it on the green</p>'
    + '<p>Bosses always like to hit things with a stick - a long one</p>'
    + '<p>Can you make a hole in one and deliver results with precision?</p>'
    + '<p>Current Status: 4 under par</p>'
    + '<p>Boss impression: My kid can do better</p>',

    '<p>It\'s been two months since the last time you picked up groceries</p>'
    + '<p>This is not your fault, I know. However, eating out has its price and no cook likes to see your face</p>'
    + '<p>Do the shopping. don\'t forget some fava beans and chianti.</p>'
    + '<p>Intact stores: 6</p>'
    + '<p>Groceries Bags Left: 12</p>',

    '<p>You have to get you boss clothes at the dry cleaners</p>'
    + '<p>However, the shop belongs to a rival gang and they do not seem pleased to see you entering their premises</p>'
    + '<p>Can you save your boss\' clothes and, eventually, show this gang who\'s boss in town?</p>'
    + '<p>Pieces of clothing left: 6</p>'
    + '<p>Mob members alive: 4</p>',
];

var selectMissionGo = function(){
    var missionNumber = parseInt(this.getAttribute('missionId'));
    removeOverlay('missionOverlay');
    printOverlay('missionOverlay', this.childNodes);
    document.getElementById('missionDescription').innerHTML = missionDescriptionArray[missionNumber];
};

var missionControlsGo = document.getElementsByClassName('chooseYourMission');
for(var mcg = 0; mcg < missionControlsGo.length; mcg++){
    missionControlsGo[mcg].addEventListener('click',selectMissionGo);
}


document.getElementById('btnBackMissionsPauseMenu').addEventListener('click',function(){
    transitionScene('missions', 'pauseMenu');
});

