const moonPath = "M17 28.5C17 43.6878 27.5 56 27.5 56C12.3122 56 0 43.6878 0 28.5C0 13.3122 12.3122 1 27.5 1C27.5 -4 17 13.3122 17 28.5Z"
const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"

const darkMode = document.querySelector('#darkMode');

let toggle = false;
darkMode.addEventListener('click', ()=>{
const timeline = anime.timeline({
    duration : 750,
    easing : "easeOutExpo"
})
timeline.add({
    targets : ".sun",
    d : [
        {value: toggle ? sunPath : moonPath}
    ]
}) 
.add({
    targets: '#darkMode',
    rotate:320
}, '-=350')
.add({
    targets : "section", 
    backgroundColor : toggle ? 'rgb(255,255,255)' : 'rgb(22, 22, 22)',
    color: toggle ? 'rgb(22, 22, 22)' : 'rgb(255,255,255)' 
},'-=700')

if(!toggle){
    toggle = true;
}else {
toggle = false;
}

});