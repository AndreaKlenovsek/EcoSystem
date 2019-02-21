const navToggle = document.querySelector(".hero")


navToggle.addEventListener("click", e => {
const contBtnop = e.target.closest(".icon-open")
const contBtncl = e.target.closest(".icon-close")
console.log("test")


if (contBtnop) {
    contBtnop.parentNode.parentNode.classList.add("nav-is-open")
  }
  
  if (contBtncl) {
    contBtncl.parentNode.parentNode.classList.remove("nav-is-open")
  }
})

const nav = document.querySelector("nav")

nav.addEventListener("click", e => {
document.body.classList.remove("nav-is-open")
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {


  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("nav").style.top = "0";
    
  } 

  else if (screen.width <=850)  {
    document.querySelector("nav").style.top = "0";
    console.log("test")
  }
 
 
  else {
    document.querySelector("nav").style.top = "-7vh";
  }
}