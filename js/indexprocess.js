'use strict'
$(document).ready(function () {
// CREATE FLEX BOX ITEMS FOR THE CONTENT.
});
// $(document).ready(function(){
//   let list = [
//     '<img src="img/auto1.jpg" alt="Photo of an old website homepage"/>',
//     '<img src="img/auto2.jpg" alt="Photo of an old website photo page"/>',
//     '<img src="img/auto3.jpg" alt="Photo of an old website cleared photo page"/>'
//    ]
//   for (var i = 0; i < list.length; i++) {
//     let miniList = list[i]
//     let mainPhoto = $("#mainPhoto");
//     mainPhoto.append(list[0]);
//     let miniHolder = $("#miniContainer");
//     miniHolder.append(miniList);
//
//   }
// });

// Attempt 1;
// Just using the "this" method when the imgs are in the HTML file
// and append them to the main section by placing a hidden class to the current img photo
// Issue: the three bottom photos will disappear when being displayed on the main section

// Attempt 2;
// Creating an array and displaying the info from the array. the HTML file only contains the div's
// Issue: Cannot attach event listners to the array for specififed imgs.
