window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    console.info(delta);

    var elem = document.getElementById("scrollHoriz");
    elem.scrollBy(delta * 50, 0);
});


//possibly use anchors to scroll

//set up variable to help control the scroll with a certain feedback
//another way to do this is css transition

/* ---- GOOGLE MAP ---- */

//determine initialize zoom level
var ifZoom = 0;

if (screen.width > 1500) {
    ifZoom = 3;
    console.log("zoom should be 3")
}
else {
    ifZoom = 2;
    console.log("zoom should be 2")
}

//map variables
const apiKey = "AIzaSyCHaaYyvWCZ5KvA9iutq2bVaXPqhNeGPUk";
const apiLib = "&libraries=places";
const latitude = 15;
const longitude = -15;
const initZoom = ifZoom;

//create a map
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: initZoom,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: false,
        // custom styling
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }
        ]
    })

    setWorkMarker(map);
    setSchoolMarker(map);
    setSpecprojMarker(map);

    // the smooth zoom function
    // function smoothZoom(map, max, cnt) {
    //     if (cnt >= max) {
    //         return;
    //     }
    //     else {
    //         z = google.maps.event.addListener(map, 'zoom_changed', function (event) {
    //             google.maps.event.removeListener(z);
    //             smoothZoom(map, max, cnt + 1);
    //         });
    //         setTimeout(function () { map.setZoom(cnt) }, 250); 
    //     }
    // }

    var compZoom = 0;

    //delaying the zoom
    function delay1() {
        setTimeout(function () { map.setZoom(6); }, 500);

    };

    function delay2() {
        setTimeout(function () { map.setZoom(9); }, 1000);
    };

    function delay3() {
        setTimeout(function () { map.setZoom(12); }, 1750);
        compZoom = 12;
    };

    function delay4() {
        setTimeout(function () { map.setZoom(9); }, 500);

    };

    function delay5() {
        setTimeout(function () { map.setZoom(6); }, 1000);
    };

    function delay6() {
        setTimeout(function () { map.setZoom(ifZoom); }, 1750);

    };

    $(".timeline-item-box").hover(

        function () {
            //log the id to know
            console.log($(this).attr("id"));
            //set checkId variable
            var checkId = $(this).attr("id");
            //see if id is item1, zoom in to location
            if (checkId === "item1") {
                //confirming this is item1
                console.log("This is item1");
                //need to find the lat/long of marker with id = work1
                map.setCenter({ lat: 32.7555, lng: -97.3308 });

                

                //calling the delayed zoom
                delay1();
                delay2();
                delay3();
                //how far in to zoom
                // map.setZoom(12);


                // map.setZoom(12)
                // smoothZoom(map, 12, map.getZoom());
                // checkId = "";
            }


        }, function () {
            // map.setZoom(ifZoom);
            if (compZoom === 12) {
            
                delay4();
                delay5();
                delay6();

                compZoom = 0;
            }
        });

    // $(".overlay").hover(function () {
    //     console.log("on the map now");


    //     map.setZoom(ifZoom);

    //     // smoothZoom(map, ifZoom, map.getZoom());
    // });

};

//array variables for work, school, spec proj
var work = [
    ['Fort Worth, TX', 32.7555, -97.3308],
    ['Amarillo, TX', 35.2220, -101.8313],
    ['Augusta, GA', 33.4735, -82.0105],
    ['Memphis, TN', 35.1495, -90.0490],
    ['Providence, RI', 41.8240, -71.4128],
    ['Wichita, KS', 37.6872, -97.3301],
    ['Portland, OR', 45.5155, -122.6793]
]

var schools = [
    ['University of Oregon', 45.5155, -122.6793],
    ['Clemson University', 34.6834, -82.8374],
    ['TCU', 32.7555, -97.3308]
]

var specprojs = [
    ['Strategic Planning Retreat | Cabo San Lucas, Baja California Sur, Mexico', 22.8905, -109.9167],
    ['Safety Audit | Yangjiang, Guangdong, China', 21.8580, 111.9822],
    ['Energy Audit | Chihuahua City, Chihuahua, Mexico', 28.6330, -106.0691]
]

function setWorkMarker(map) {
    var workIcon = {
        url: '../assets/images/work.png',
        size: new google.maps.Size(35, 31),
    };


    for (var i = 0; i < work.length; i++) {
        var city = work[i];
        var marker = new google.maps.Marker({
            position: { lat: city[1], lng: city[2] },
            map: map,
            icon: workIcon,
            title: city[0],
            id: "work" + [i]
        });

        console.log(marker.id);
    }
    console.log("this fired");
};

function setSchoolMarker(map) {
    var schoolIcon = {
        url: '../assets/images/school.png',
        size: new google.maps.Size(31, 31),
    };

    for (var i = 0; i < schools.length; i++) {
        var school = schools[i];
        var marker = new google.maps.Marker({
            position: { lat: school[1], lng: school[2] },
            map: map,
            icon: schoolIcon,
            title: school[0],
            id: "school" + [i]
        });

        console.log(marker.id);
    };
};

function setSpecprojMarker(map) {
    var specprojIcon = {
        url: '../assets/images/specproj.png',
        size: new google.maps.Size(48, 48),
    };

    for (var i = 0; i < specprojs.length; i++) {
        var specproj = specprojs[i];
        var marker = new google.maps.Marker({
            position: { lat: specproj[1], lng: specproj[2] },
            map: map,
            icon: specprojIcon,
            title: specproj[0],
            id: "specproj" + [i]
        });

        console.log(marker.id);
    };
};

$(document).ready(function () {


    // google.maps.event.addListener(marker, 'click', function*() {
    //     map.setZoom(9);
    //     map.setCenter(marker.getPosition(work.));
    // });

});


//     var specprojIcon = {
//         url: 'assets/images/specproj.png',
//         size: new google.maps.Size(48, 48),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(0, 48)
//     };

// $(function() {
// $(document).ready(function() {
//     $("body").mousewheel(function(event, delta) {
//         console.log("hearing the scroll");
    //    this.scrollLeft -= (delta * 30);

    //    event.preventDefault();

//     });

// });

//  });

