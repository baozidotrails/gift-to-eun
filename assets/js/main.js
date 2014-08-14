$(function() {
  init = function() {

    jarallax = new Jarallax();
    jarallax.setDefault('.intro', {opacity: "0"});

    

    jarallax.addAnimation('.intro', [{progress: "0%", opacity: '0'}, {progress: "20%", opacity: '1'}, {progress: "40%", opacity: '0'}]);
    jarallax.addAnimation('.intro', [{progress: "0%", top: "50%"}, {progress: "60%", top: "-10%"}]);
  }
});