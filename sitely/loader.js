window.onload = function(){ 
    var loadScreen = document.getElementById("loadingScreen");
    loadScreen.style.opacity = "0";
    document.body.style.overflowY = "auto";
    setTimeout(function(){loadScreen.style.display = "none"}, 300);
}