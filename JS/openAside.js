
function neco(item){
    const pathString = window.location.pathname.substring(1)
    console.log(pathString)

    // if(pathString.includes("learn") || pathString.includes("kapitola") ){

        item.classList.toggle("block")
        item.style.display = "block"
    
        var aside = document.getElementById("aside");
        aside.classList.toggle("hidden");

    // }
    
}