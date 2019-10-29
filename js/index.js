
const funBus = document.querySelector(".logo-heading")
if (funBus) {
    funBus.addEventListener("mouseenter", (event) => {
    event.target.style.color = "red";
    
    setTimeout(function() {
    event.target.style.color = "";
   }, 500);
});
}

const body = document.querySelector("body");
body.addEventListener("click", (event) => {
 body.style.backgroundColor="pink";
  console.log("end")
  event.stopPropagation();

    setTimeout(function() {
    body.style.backgroundColor = "";
   }, 500);
});


const topImg = document.querySelector(".intro img")
    topImg.addEventListener("wheel", (event) => {
    console.log('top')
    event.stopPropagation();
});

document.querySelectorAll(".nav a").forEach(ev => {
    ev.addEventListener("click", () => {
      ev.style.color="purple"
      ev.style.textDecoration = "line-through"

      setTimeout(() => {
        ev.style.color = "";
        ev.style.textDecoration = "";
        }, 500);
    })
  })

window.addEventListener("load", (event) => {
    alert("The page has loaded");
    });

const middleImg = document.querySelector('.img-content')
    middleImg.addEventListener("mouseenter", () => {
        middleImg.style.transform ="scale(1.2)";
        middleImg.style.transition = "all 0.3s"
    })
    middleImg.addEventListener("mouseleave", () => {
        middleImg.style.transform ="scale(1)";
        middleImg.style.transition = "all 0.3s"
    })

const changeImg = document.querySelector('.intro img');
    changeImg.addEventListener("dblclick", () => {
    changeImg.src = "https://images.unsplash.com/photo-1570942872213-1242607a35eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"

});

const yuh = document.querySelector('.text-content p');
yuh.addEventListener('copy', () => {
    event.preventDefault();
    alert('STOP COPYING!')
});

const text = document.querySelector('.intro h2')
    text.addEventListener('select', (text) => {
        const selection = text.target.value.substring(text.target.selectionStart, text.target.selectionEnd);
        log.textContent = `You selected: ${selection}`;

});

const last = document.querySelector('.content-destination');
last.addEventListener('mouseenter', (event) => {
  event.target.style.border = '2px dashed red';
});

last.addEventListener('mouseleave', (event) => {
  event.target.style.border = 'none';
});

const img3 = document.querySelector('.img-fluid-rounded');
img3.addEventListener('mousedown', (event) => { 
  event.target.style.opacity = '0';
});

img3.addEventListener('mouseup', (event) => {
  event.target.style.opacity = '1';
});

document.querySelectorAll(".btn").forEach(bt =>{
    bt.addEventListener('click', () => {
        bt.style.color = "rebeccapurple"
    })
});


