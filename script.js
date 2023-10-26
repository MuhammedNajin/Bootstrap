window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        myFunction();
    }
}

function myFunction(){
document.getElementById("show").style.display="block";
}

let btn=document.getElementById("button");

btn.addEventListener("click",function(){
document.getElementById("show").style.display="none";
})