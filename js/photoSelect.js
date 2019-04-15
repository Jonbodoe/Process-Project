'use strict'
$(document).ready(function () {
    
    let option = $('option');
    option.on('click', getPhotos)
    function getPhotos(e) {
        console.log('hello2')
        let selectMonth = e.target.value;
        for (let img of photo) {
            // photo is the array
            let dataMonth = img.month;
            if (selectMonth === dataMonth) {
                let displayPhotos = img.image;
                let displayAbout = img.about;
                let photoObject = { photo: displayPhotos, about: displayAbout, month: dataMonth }
                $('#results').prepend(photoObject.photo, photoObject.about);
            }

        }
}
let photo = [

    {
        "image": "<img src='../photos/Jan5.jpg'>",
        "year": "2016",
        "month": "Jan",
        "type": "tag",
        "about": "<p>- Jan : Case tag from 1982, from Septa's Center City Concourse</p>",
        "location": "Septa"
    },
    {
        "image": "<img src='../photos/Jan9.jpg'>",
        "year": "2016",
        "month": "Jan",
        "type": "piece",
        "about": "<p>- Jan : Cres, Harm, Klark, Bet, Seak, Sler, Savior / Berk's Bank</p>",
        "location": "North Philadelphia"
    },
    {
        "image": "<img src='../photos/Jan7.jpg'>",
        "year": "2016",
        "month": "Jan",
        "type": "piece",
        "about": "<p>- Jan : Curve, Bet, Harm, Eksrt and Potatoe / Electric Factory</p>",
        "location": "Northeast Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_5008.jpg'>",
        "year": "2016",
        "month": "Feb",
        "type": "",
        "about": "<p>- Feb : Station / Viaduct </p>",
        "location": "North Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_5209.jpg'>",
        "year": "2016",
        "month": "Feb",
        "type": "piece",
        "about": "<p>- Feb : 4ever / Septa Station </p>",
        "location": "Septa"
    },
    {
        "image": "<img src='photos/IMG_5243.jpg'>",
        "year": "2016",
        "month": "Feb",
        "type": "tag",
        "about": "<p>- Feb : Aleas, Kadism, Real, Ceem, Poez, Texas / Septa Station</p>",
        "location": "Septa"
    },
    {
        "image": "<img src='photos/IMG_5488.jpg'>",
        "year": "2016",
        "month": "Mar",
        "type": "tag",
        "about": "<p>- Mar : End and Drama / Sign Painting Facility </p>",
        "location": "Southwest Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_5520.jpg'>",
        "year": "2016",
        "month": "Mar",
        "type": "piece",
        "about": "<p>- Mar : Greys Ferry </p>",
        "location": "West Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_5494.jpg'>",
        "year": "2016",
        "month": "Mar",
        "type": "piece",
        "about": "<p>- Mar : End and Poez / Sign Painting Facility </p>",
        "location": "Southwest Philadelphia"
    },
    {
        "image": "<img src='photos/Apr1.jpg'>",
        "year": "2016",
        "month": "Apr",
        "type": "tag",
        "about": "<p>- Apr : Baek and Curve / West Philly </p>",
        "location": "West Philadelphia"
    },
    {
        "image": "<img src='photos/Apr2.jpg'>",
        "year": "2016",
        "month": "Apr",
        "type": "tag",
        "about": "<p>- Apr : Bphor and Shoba / Downtown </p>",
        "location": "Center City"
    },
    {
        "image": "<img src='photos/Apr3.jpg'>",
        "year": "2016",
        "month": "Apr",
        "type": "piece",
        "about": "<p>- Apr : Duzit / Brewery Building </p>",
        "location": "West Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_5961.jpg'>",
        "year": "2016",
        "month": "May",
        "type": "tag",
        "about": "<p>- May : Fatske and Harm / Downtown </p>",
        "location": "Center City"
    },
    {
        "image": "<img src='photos/IMG_6254.jpg'>",
        "year": "2016",
        "month": "May",
        "about": "<p>- Apr : XYZ and Potatoe / Greys Ferry </p>",
        "type": "piece",
        "location": "West Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_6228.jpg'>",
        "year": "2016",
        "month": "May",
        "type": "piece",
        "about": "<p>- Apr : Rune, Edske, Amare, and XYZ / Septa Station </p>",
        "location": "Septa"
    },
    {
        "image": "<img src='photos/IMG_6453.jpg'>",
        "year": "2016",
        "month": "Jun",
        "type": "piece",
        "about": "<p>- Jun : Club Clout / North Philly </p>",
        "location": "North Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_6400.jpg'>",
        "year": "2016",
        "month": "Jun",
        "type": "piece",
        "about": "<p>- Jun : Scamer / Trains </p>",
        "location": "Southwest Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_6432.jpg'>",
        "year": "2016",
        "month": "Jun",
        "type": "piece",
        "about": "<p>- Jun : Sowek / Viaduct </p>",
        "location": "North Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_6920.jpg'>",
        "year": "2016",
        "month": "Jul",
        "type": "tag",
        "about": "<p>- Jul : Wacko and Dmyz / Northern Libs. </p>",
        "location": "North Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_6605.jpg'>",
        "year": "2016",
        "month": "Jul",
        "type": "sticker",
        "about": "<p>- Jul : Kamz Stickers / Downtown </p>",
        "location": "Center City"
    },
    {
        "image": "<img src='photos/IMG_6699.jpg'>",
        "year": "2016",
        "month": "Jul",
        "type": "tag",
        "about": "<p>- Jul : Drama, Knox, End, and Expo / Downtown </p>",
        "location": "West Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_7264.jpg'>",
        "year": "2016",
        "month": "Aug",
        "type": "tag",
        "about": "<p>- Aug : Reach / Springgarden Church </p>",
        "location": "North Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_7332.jpg'>",
        "year": "2016",
        "month": "Aug",
        "type": "sticker",
        "about": "<p>- Aug : Bines, Aviz, and Radius Stickers / Downtown </p>",
        "location": "Center City"
    },
    {
        "image": "<img src='photos/IMG_7010.jpg'>",
        "year": "2016",
        "month": "Aug",
        "type": "tag",
        "about": "<p>- Aug : Bae 2003 / Bella Vista </p>",
        "location": "South Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_7382.jpg'>",
        "year": "2016",
        "month": "Sep",
        "type": "sticker",
        "about": "<p>- Sep : Dmize / Downtown </p>",
        "location": "Center City"
    },
    {
        "image": "<img src='photos/IMG_7516.jpg'>",
        "year": "2016",
        "month": "Sep",
        "type": "tag",
        "about": "<p>- Sep : Agua, Drama, and Spiro / Downtown </p>",
        "location": "South Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_7653.jpg'>",
        "year": "2016",
        "month": "Sep",
        "type": "tag",
        "about": "<p>- Sep : Nemel 1999 / Septa Station </p>",
        "location": "Septa"
    },
    {
        "image": "<img src='photos/IMG_7820.jpg'>",
        "year": "2016",
        "month": "Oct",
        "type": "tag",
        "about": "<p>- Oct : Rune / Downtown </p>",
        "location": "Center City"
    },
    {
        "image": "<img src='photos/IMG_7830.jpg'>",
        "year": "2016",
        "month": "Oct",
        "type": "sticker",
        "about": "<p>- Oct : Radius / Downtown </p>",
        "location": "Center City"
    },
    {
        "image": "<img src='photos/IMG_8117.jpg'>",
        "year": "2016",
        "month": "Oct",
        "type": "tag",
        "about": "<p>- Oct : Kese / Passyunk </p>",
        "location": "South Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_8199.jpg'>",
        "year": "2016",
        "month": "Nov",
        "type": "piece",
        "about": "<p>- Nov : Grape / Southwest Philly </p>",
        "location": "Southwest Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_8366.jpg'>",
        "year": "2016",
        "month": "Nov",
        "type": "sticker",
        "about": "<p>- Nov : Sticker collab / Downtown </p>",
        "location": "Center City"
    },
    {
        "image": "<img src='photos/IMG_8561.jpg'>",
        "year": "2016",
        "month": "Dec",
        "type": "tag",
        "about": "<p>- Dec : Bambu / Greys Ferry </p>",
        "location": "West Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_8686.jpg'>",
        "year": "2016",
        "month": "Dec",
        "type": "tag",
        "about": "<p>- Dec : Tax from 1982 / Septa Station </p>",
        "location": "Septa"
    },
    {
        "image": "<img src='photos/IMG_8738.jpg'>",
        "year": "2016",
        "month": "Dec",
        "type": "piece",
        "about": "<p>- Dec : Distort / Eastwick </p>",
        "location": "Southwest Philadelphia"
    },
    {
        "image": "<img src='photos/IMG_8683.jpg'>",
        "year": "2016",
        "month": "Dec",
        "type": "tag",
        "about": "<p>- Dec : Caem and Radeo / Springgarden </p>",
        "location": "North Philadelphia"
    }

]

});