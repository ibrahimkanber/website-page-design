const readMoreLight=document.querySelector(".readMore.light");
const readMoreDark=document.querySelector(".readMore.dark");
readMoreLight.addEventListener("click",showText);
readMoreDark.addEventListener("click",showText);

function showText(e){
      e.target.parentElement.children[0].classList.toggle("show")

}