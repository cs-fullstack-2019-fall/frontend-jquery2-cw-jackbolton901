/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/
$('.hello').click(function () {
    $('.hello').css("background-color", "blue");
});
// !! You successfully changed ALL hello functions to be the same color
/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */
$("h1").mouseover("h1", function () {
    $("h1").css("height", "20px");
    $("h1").css("width", "20px");
});
$("h1").mouseout("h1", function () {
    $("h1").css("height", "");
    $("h1").css("width", "");
});
// !! You successfully change the height and with of the h1 and return it to it's original position
// CHALLENGE
/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
$(".hello").click(function () {
    $(".hello").innerText.append(".");
});
// !! The challenge does not work. You successfully gather them but you need to just append the period to the class not the inner text.


