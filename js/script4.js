const headerBlock=document.querySelector(".header"),headerHeight=headerBlock.offsetHeight;let headerHighlighted=!1;const startHeight=document.querySelector(".start").offsetHeight,scrolled=window.scrollY;console.log(scrolled);const animItems=document.querySelectorAll("._anim-items");if(animItems.length>0){function animOnScroll(){window.scrollY>startHeight+headerHeight?(headerBlock.classList.add("header__scroll"),headerHighlighted=!0):window.scrollY<startHeight+headerHeight&&(headerBlock.classList.remove("header__scroll"),headerHighlighted=!1);for(let e=0;e<animItems.length;e++){const t=animItems[e],o=t.offsetHeight,r=offset(t).top,l=2;let n=window.innerHeight-o/l;o>window.innerHeight&&(n=window.innerHeight-window.innerHeight/l),pageYOffset>r-n&&pageYOffset<r+o?t.classList.add("an_active"):t.classList.contains("_anim-no-hide")||t.classList.remove("an_active")}}function offset(e){const t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft;return scrollTop=window.pageYOffset||document.documentElement.scrollTop,{top:t.top+scrollTop,left:t.left+o}}window.addEventListener("scroll",animOnScroll),setTimeout((()=>{animOnScroll()}),400)}function headerLight(){}window.addEventListener("scroll",headerLight);const burgerButton=document.querySelector(".burger__button"),burgerBody=document.querySelector(".burger__body"),burgDecor=document.querySelector(".burger__decor"),burgerButtonDecors=document.querySelectorAll(".burger__button__decor"),mainBody=document.querySelector("body");burgerButton.addEventListener("click",(function(){mainBody.classList.toggle("body_noScroll"),burgDecor.classList.toggle("burger__dec__active"),1==headerHighlighted&&headerBlock.classList.toggle("header__scroll"),burgerBody.classList.length<2||burgerBody.classList.toggle("burger__hide"),burgerBody.classList.toggle("burger__show");for(let e=0;e<burgerButtonDecors.length;e++)burgerButtonDecors[e].classList.toggle("burger__dec__active")}));
const popUpButtons = document.querySelectorAll('.how__pop__up__subrow');

const popUps = document.querySelectorAll('.how__pop__up');

const decorWingsLeft = document.querySelectorAll('.how__pop__up__dec__elem');

const decorWingsRight = document.querySelectorAll('.how__pop__up__dec__elem_2')


for (let i = 0; i < popUpButtons.length; i++) {
    popUpButtons[i].addEventListener('click', function ()  {
        popUps[i].classList.toggle('pop__up__show');
        popUpButtons[i].classList.toggle('pop__up__show');
        decorWingsLeft[i].classList.toggle('pop__up__show');
        decorWingsRight[i].classList.toggle('pop__up__show');
    });
    
}