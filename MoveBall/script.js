// variables
const ball = document.getElementById('ball');
const box = document.getElementById('box');

let num=box.getBoundingClientRect();
let vw = (num.width) - 106.8;
// console.log(vw);
// to move left or right
let h = 10;
// to move up and down
let v = 10;

document.addEventListener('keydown', function(event) {
    // console.log("key pressed" , event.key);
    if(event.key==='w') {
        if(v<=0) return;
        v-=10;
        ball.style.marginTop= v+'px';
    } else if(event.key==='a') {
        if(h<=0) return;
        h-=10;
        ball.style.marginLeft=h+'px';
    } else if(event.key==='s') {
        if(v>=400) return;
        v+=10;
        ball.style.marginTop= v+'px';
    } else if(event.key==='d') {
        if(h>vw) return;
        h+=10;
        ball.style.marginLeft=h+'px';
    }
});