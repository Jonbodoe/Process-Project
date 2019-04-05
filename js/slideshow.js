'use strict'
$(document).ready(function () {
    console.log('hello');
    let gallery = $('#results');
    let photoList = [
        '<img src="img/ganetexas.jpg" alt="photo of a gane and texas roller"/>',
        '<img src="img/west.jpg" alt="photo of 54th street in west philly"/>',
        '<img src="img/store.jpg" alt="photo of a store front at night"/>',
        '<img src="img/zem.jpg" alt="photo of a zem tag in University City"/>'
    ]
    let i = 0

    let timer = setInterval (slider, 5000)
    function slider() {
        $(gallery).fadeOut(function () {
            $(this).html(photoList[i]);
            $(this).fadeIn(100);
        });
        if (i < 3) {
            i++;
        } else {
            i = 0;
        }
    };
    // Clear Gallery when option is clicked.
    let option = $('option');
    option.on('click', clearTime)
    function clearTime () {
        clearInterval(timer);
        gallery.empty();
    }

});