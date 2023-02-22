// function moveUp(){
//     var skeleton = document.querySelectorAll('#skeleton');
//     skeleton.setAttribute('position', '0 7 -5');
// }
// var scene = document.querySelector('a-scene');
// if (scene.hasLoaded) {
//     moveUp();
// } else {
//     scene.addEventListener('loaded', moveUp);
// }

AFRAME.registerComponent("jump",{
    init: function(){
        var el = this.el;
        el.addEventListener('click', function(){
            var newPos = "0 7 -5"
            el.setAttribute('position', newPos);
        });
    }
});