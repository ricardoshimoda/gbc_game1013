document.getElementById('btnBackDeathMenu').addEventListener('click', function(){
    transitionScene('death', 'menu');
});
document.getElementById('btnContinueDeathCharging').addEventListener('click', function(){
    transitionScene('death', 'charging', false, chargingBegin);
});