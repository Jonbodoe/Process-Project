'use strict'
// The functions to grab the photos from a external file.
$(document).ready(function () {
let option = $('option');
option.on('click', getDataAjax)
function getDataAjax (e) {
    let selectMonth = e.target.value;
    // console.log(selectMonth)
    let request = $.ajax({
        method: 'GET',
        url: 'js/photoDisplay16.json',
        dataType: 'json',
    });
    request.done(function (data) {
        $('#results').empty()
        for (let photo of data) {
            let ajaxMonth = photo.month;
            if (selectMonth === ajaxMonth) {
                let displayPhotos = photo.image;
                    let displayAbout = photo.about;
                    let photoObject = { photo: displayPhotos, about: displayAbout, month: ajaxMonth }
                    $('#results').prepend(photoObject.photo, photoObject.about);
                    // Create a function for Fade in Content;
            }
        }

    })
    request.fail(function (response) {
        console.log('ERROR:' + response.statusText);
    });
}
});