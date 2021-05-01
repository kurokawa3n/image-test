// JavaScript source code

var imgarray = ['1', '2', '3', '4', '5'];
var i = 0;
function currentpage() {
    var slider_page = document.getElementById('image-slider-wrapper');
    var pp = document.getElementById("pre");
    var np = document.getElementById("next");
    pp.onclick = prevpage;
    np.onclick = nextpage;

    var p1 = document.getElementById("1");
    var p2 = document.getElementById("2");
    var p3 = document.getElementById("3");
    var p4 = document.getElementById("4");
    var p5 = document.getElementById("5");
    p1.onclick = firstpage;
    p2.onclick = secondpage;
    p3.onclick = thirdpage;
    p4.onclick = fourthpage;
    p5.onclick = fifthpage;
    
}
function nextpage(){
    i++;
    if(i>imgarray.length-1)
    {
        i = 0;
    }
    var slider_page = document.getElementById('image-slider-wrapper');
    slider_page.innerHTML = "<img src=image/" + imgarray[i] + ".jpg>";
   
}

function prevpage() {
    i--;
    if(i<0)
    {
        i = imgarray.length-1;
    }
    var slider_page = document.getElementById('image-slider-wrapper');
    slider_page.innerHTML = "<img src=image/" + imgarray[i] + ".jpg>";
}

function firstpage() {
    i = 0;
    var slider_page = document.getElementById('image-slider-wrapper');
    slider_page.innerHTML = "<img src=image/" + imgarray[i] + ".jpg>";
}
function secondpage() {
    i = 1;
    var slider_page = document.getElementById('image-slider-wrapper');
    slider_page.innerHTML = "<img src=image/" + imgarray[i] + ".jpg>";
}
function thirdpage() {
    i = 2;
    var slider_page = document.getElementById('image-slider-wrapper');
    slider_page.innerHTML = "<img src=image/" + imgarray[i] + ".jpg>";
}
function fourthpage() {
    i = 3;
    var slider_page = document.getElementById('image-slider-wrapper');
    slider_page.innerHTML = "<img src=image/" + imgarray[i] + ".jpg>";
}
function fifthpage() {
    i = 4;
    var slider_page = document.getElementById('image-slider-wrapper');
    slider_page.innerHTML = "<img src=image/" + imgarray[i] + ".jpg>";
}
window.onload = currentpage;