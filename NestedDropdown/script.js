var toggler = document.getElementsByClassName("arrow");
var i;

for(i=0; i<toggler.length; i++){
    toggler[i].addEventListener("click",function(){
        this.parentElement.querySelector(".more").classList.toggle("show");
        this.classList.toggle("arrow-down")
    })
}