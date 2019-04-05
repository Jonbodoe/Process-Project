'use strict'
$(document).ready(function () {
    // ICON MENU To toggle classes
    let icon = $('#icon');
    let navBar = $('#nav-bar');
    icon.on('click', function () {
        if (navBar.hasClass('no-media')) {
            navBar.addClass('media');
            navBar.removeClass('no-media');
        } else if (navBar.hasClass('media')) {
            navBar.removeClass('media');
            navBar.addClass('no-media');
        }
    })
    // Once clicked the menu disappears
    let navItem = $('.nav-item');
    navItem.on('click', function() {
        if (navBar.hasClass('media')) {
            navBar.removeClass('media');
            navBar.addClass('no-media');
        }
    })
    // console.log(window.location.href)
    // $('section').mouseover(function () {
    //     // console.log(this.attributes.id.value);
    //     let section = this.attributes.id.value;
    //     console.log(section)
    //     // 
    // })
});
