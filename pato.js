var photos = ["master-slides-03.jpg", "master-slides-02.jpg", "master-slides-01.jpg"];
var currentPhoto = 0;
document.getElementById("counter").innerHTML = photos.length;
var slidePhotoTimer = setInterval((counter) => {
    if(currentPhoto < photos.length){
        document.querySelector("#container img").setAttribute("src", "images/" + photos[currentPhoto++]);
        document.getElementById().innerHTML = currentPhoto + " / " + photos.length;
    }
    else{
        currentPhoto = 0;
        document.querySelector("#container img").setAttribute("src", "images/" + photos[currentPhoto++]);
        document.getElementById(counter).innerHTML = photos.length;
    }
}, 4000);

function toggle (isOpen) {
    debugger;
    let width = '0%';
    if(isOpen){
        width = '25%';
    }
     document.querySelector('.r-menu').style.width = width;
}