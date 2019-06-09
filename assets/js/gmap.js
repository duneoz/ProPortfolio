/* ---- GOOGLE MAP ---- */

//map variables
const apiKey = "AIzaSyCHaaYyvWCZ5KvA9iutq2bVaXPqhNeGPUk";
const apiLib = "&libraries=places";
const latitude = 15;
const longitude = -15;
const initZoom = 3;

//create a map
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: initZoom,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        fullscreenControl: false,
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
    ['Oregon University', 45.5155, -122.6793],
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
            title: city[0]
        });
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
            title: school[0]
        });
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
            position: {lat: specproj[1], lng: specproj[2]},
            map: map,
            icon: specprojIcon,
            title: specproj[0]
        });
    };
};



//     var specprojIcon = {
//         url: 'assets/images/specproj.png',
//         size: new google.maps.Size(48, 48),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(0, 48)
//     };

