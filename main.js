/* PREVENT AREA EXTERNAL LINK */
$("#1,#2,#3,#4").on("click", function(e){
    e.preventDefault();
});

/*HIGHLIGHT IMG */

$('.img').maphilight();

/* MODAL TRIGGER */

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*MODAL DISPLAY RELEVANT PRODUCT INFOS */

//Creating the objects

var product_1 = {
    logo_image_path: "img/ropelogo.png",
    short_description:"Out of the many hundreds of knots that exist, snake sticks are one of the few that appears symmetrical, beautiful and harmonious. One can see it used anywhere in the world, where Used to lift barrels. And now the trip has come to something else - a mirror. We welcome the snake plug within.",
    price:"DKK 490.00",
    img_src:"img/mirrorPano.png"

};
var product_2 = {
    logo_image_path: "img/pilgrimlogo.png",
    short_description:"The Pilgrim Stroller is easy to move, no matter where the next destination is. Tabrer's handle is waiting for a firm grip to lift it into the next room - a Pilgrim, a nomad who is always ready to travel. We like to call it 'nomadic design..",
    price:"FROM DKK 960,00",
    img_src:"img/chairPano.png"

};
var product_3 = {
    logo_image_path: "img/thesheeplogo.png",
    short_description:"In the world of animals, a tail has many functions - such as to communicate to the outside world. Sheep prays almost about being moved from one room to another and offers so many uses that it almost deserves that someone seizes it.",
    price:"FROM DKK 1,490.00",
    img_src:"img/SheepPano.png"

};

var product_4 = {
    logo_image_path: "img/stewardlogo.png",
    short_description:"The French word étagère became popular in the 19th century. It described a small shelving for nips and ornaments and also found way for the dining table where it was used for serving cakes and fruit. It's the étagèren that has delivered the inspiration to Steward - an oversize étagère that stands directly on the floor, and which at its height is always within reach.",
    price:"FROM DKK 1,100.00",
    img_src:"img/TablePano.png"

};
//Assign everyonclick modal info product


$("#1").on("click",function() {
    document.getElementById("img_logo").src = product_1.logo_image_path;
    document.getElementById("short_description").textContent = product_1.short_description;
    document.getElementById("price").textContent = product_1.price;
    document.getElementById("pano-img").src = product_1.img_src;
    modal.style.display = "block";
});

$("#2").on("click",function() {
    document.getElementById("img_logo").src = product_2.logo_image_path;
    document.getElementById("short_description").textContent = product_2.short_description;
    document.getElementById("price").textContent = product_2.price;
    document.getElementById("pano-img").src = product_2.img_src;
    modal.style.display = "block";
});

$("#3").on("click",function() {
    document.getElementById("img_logo").src = product_3.logo_image_path;
    document.getElementById("short_description").textContent = product_3.short_description;
    document.getElementById("price").textContent = product_3.price;
    document.getElementById("pano-img").src = product_3.img_src;
    modal.style.display = "block";
});

$("#4").on("click",function() {
    document.getElementById("img_logo").src = product_4.logo_image_path;
    document.getElementById("short_description").textContent = product_4.short_description;
    document.getElementById("price").textContent = product_4.price;
    document.getElementById("pano-img").src = product_4.img_src;
    modal.style.display = "block";
});


/* Arrow UI */

function addFlash (data) {
    console.log("works");
    data.classList.add("flash");
    data.addEventListener("animationend", function() {
        data.classList.remove("flash");
    });

}

var logo = document.getElementById('logo');
function addRemoveOut () {
    logo.classList.add("rotateOut");

}

/* PANORMA */

$(function() {
	$('div.panorama').paver();
});
