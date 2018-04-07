var setWalking = function(){
    window.addEventListener('mousewheel',mouseWheelWalkingHandler, true);    
}

function mouseWheelWalkingHandler(event)
{
    console.log(event);
    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    event.stopPropagation();
    return false;
}
