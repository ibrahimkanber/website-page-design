const html=document.querySelector(".html");
const css=document.querySelector(".css");
const graphic=document.querySelector(".graphic")

html.addEventListener("click",showDescription);
css.addEventListener("click",showDescription);
graphic.addEventListener("click",showDescription);


function showDescription(e){
    e.target.parentElement.children[2].classList.toggle("showP")
}

