
let body = document.querySelector('body');
let scroll = document.querySelector('.scroll');
let count = document.querySelector('.count');

window.addEventListener('scroll' , function(){
    let scrollToTOP = this.window.scrollY;
    let totalHeight = body.clientHeight;
    let innerHeight = this.window.innerHeight;
    let countHeight = totalHeight - innerHeight;
    let rslt = Math.round((100/countHeight) * scrollToTOP);
    
    

    scroll.style.background = ` conic-gradient(blue , blue ${rslt}% , purple ${rslt}%)`;


    count.innerHTML = rslt;
})


let nav = document.querySelector('nav');
let a = 0;
window.addEventListener('scroll' , function(){

    

    if(a > window.scrollY ){
        nav.classList.add('active');

    }
    else{
        nav.classList.remove('active');
    }
    a = this.window.scrollY;
})