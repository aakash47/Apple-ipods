const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1")

const section = document.querySelector("section");
const end = section.querySelector("h1");

//scrolMagic
const controller = new ScrollMagic.Controller();
//scene
let scene = new ScrollMagic.Scene({
    duration:60000,
    triggerElement:intro,
    triggerHook:0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);
//video animation
let accelamount = 0.5;
let scrollpos =0;
let delay = 0;
//text animation
const textAnim = TweenMax.fromTo(text,3,{opacity:1},{opacity:0});
let scene2 = new ScrollMagic.Scene({
    duration:3000,
    triggerElement:intro,
    triggerHook:0
})
.setTween(textAnim)
.addTo(controller)

scene.on('update',e=>{
    scrollpos=e.scrollPos / 1000;
    console.log(scrollpos);
    console.log(e)
})

setInterval(()=>{
    delay += (scrollpos - delay)*accelamount;
    console.log(scrollpos,delay);
    video.currentTime=delay;
},103.3);
//1000/frame rate of video