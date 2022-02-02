/*responsive*/
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById ('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}




/* Choosing Color Product */

var MainImg = document.getElementById ("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function (){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function (){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function (){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function (){
    MainImg.src = smallimg[3].src;
}
smallimg[4].onclick = function (){
    MainImg.src = smallimg[4].src;
}
smallimg[5].onclick = function (){
    MainImg.src = smallimg[5].src;
}
smallimg[6].onclick = function (){
    MainImg.src = smallimg[6].src;
}
smallimg[7].onclick = function (){
    MainImg.src = smallimg[7].src;
}
smallimg[8].onclick = function (){
    MainImg.src = smallimg[8].src;
}
smallimg[9].onclick = function (){
    MainImg.src = smallimg[9].src;
}
