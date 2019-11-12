slideIndex=1;

function sliding(n) {
showDivs(slideIndex += n);
}
 
function showDivs(n) {
var i;
var x = document.getElementsByClassName("item");
if (n> x.length) {slideIndex = 1}    
if (n < 1) {slideIndex = x.length}
  document.getElementsByClassName("slides")[0].innerHTML ="0"+slideIndex;

}
