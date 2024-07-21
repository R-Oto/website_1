/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scrollsition = document.querySelector('#scrollsition')
window.onscroll = function() {
 scrollFunction();
};

function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   scrollToTopBtn.style.display = "block";
   scrollsition.classList.add('transition');
 } else {
   scrollToTopBtn.style.display = "none";
   scrollsition.classList.remove('transition');
 }
}

scrollToTopBtn.addEventListener("click", function() {
 window.scrollTo({ top: 0, behavior: 'smooth' });
});