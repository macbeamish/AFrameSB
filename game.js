console.log("game.js loaded");
AFRAME.registerComponent("sprite-jump", {
    init: function() {
      // when clicked attach the body and the shape, and apply the impulse
      this.el.addEventListener("keydown", evt => {
        if(keyCode === 32 ){
        const force = new Ammo.btVector3(0, 2, 0);
        const pos = new Ammo.btVector3(skeleton.object3D.position.x, skeleton.object3D.position.y, skeleton.object3D.position.z);
        ball.body.applyImpulse(force, pos);
        Ammo.destroy(force);
        Ammo.destroy(pos);}
        else{console.log("wrong key")}
      })
      // check if the events are working by changing a the boxes color
      document.querySelector("#backboard").addEventListener("collidestart", evt => {
        document.querySelector("#backboard").setAttribute("color", "green");
      })
    }
  })
AFRAME.registerComponent("random-hex", {
    init: function(){
      this.el.addEventListener("click", evt => {
        console.log("box clicked")
        this.el.setAttribute("material", {
          color: "white"
        });
        });
    }
});

  AFRAME.registerComponent("foo", {
    init: function() {
      // when clicked attach the body and the shape, and apply the impulse
      this.el.addEventListener("click", evt => {
        this.el.setAttribute("ammo-body", {
          type: "dynamic"
        });
        this.el.setAttribute("ammo-shape", {
          type: "sphere",
          fit: "manual",
          sphereRadius: 0.15
        });
        const force = new Ammo.btVector3(0, 7, -3);
        const pos = new Ammo.btVector3(this.el.object3D.position.x, ball.object3D.position.y, ball.object3D.position.z);
        ball.body.applyImpulse(force, pos);
        Ammo.destroy(force);
        Ammo.destroy(pos);
      })
      // check if the events are working by changing a the boxes color
      document.querySelector("#backboard").addEventListener("collidestart", evt => {
        document.querySelector("#backboard").setAttribute("color", "green");
      })
    }
  })