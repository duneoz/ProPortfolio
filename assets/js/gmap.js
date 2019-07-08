//scroll right/left on wheel up/down
window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    console.info(delta);

    var elem = document.getElementById("scrollHoriz");
    elem.scrollBy(delta * 20, 0);
});


//declare ifZoom variable
var ifZoom = 0;

//determine what ifZoom should be set to based on screen width
//this should maybe be set to some other variable like viewport width
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

var map;

//create a map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
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

    //run the functions to set map markers
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



window.addEventListener('wheel', checkPosition)

var checkIt = "";

var arrItems = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10", "item11", "item12", "item13", "item14", "item15", "item16", "item17", "item18"];

var resElements = [{
    elementID: "item1",
    elemPara: "pitem1",
    elemStone: "stone1",
    city: "Fort Worth, TX",
    cityLat: 32.7555,
    cityLon: -97.3308,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone"
},
{
    elementID: "item2",
    elemPara: "pitem2",
    elemStone: "stone2",
    city: "Fort Worth, TX",
    cityLat: 32.7555,
    cityLon: -97.3308,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone"
},
{
    elementID: "item3",
    elemPara: "pitem3",
    elemStone: "stone3",
    city: "Fort Worth, TX",
    cityLat: 32.7555,
    cityLon: -97.3308,
    locationType: "school",
    fontType: "schoolItemfont",
    stoneType: "schoolStone"
},
{
    elementID: "item4",
    elemPara: "pitem4",
    elemStone: "stone4",
    city: 'Providence, RI',
    cityLat: 41.8240,
    cityLon: -71.4128,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone"
},
{
    elementID: "item5",
    elemPara: "pitem5",
    elemStone: "stone5",
    city: 'Wichita, KS',
    cityLat: 37.6872,
    cityLon: -97.3301,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone"
},
{
    elementID: "item6",
    elemPara: "pitem6",
    elemStone: "stone6",
    city: 'Amarillo, TX',
    cityLat: 35.2220,
    cityLon: -101.8313,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone"
},
{
    elementID: "item7",
    elemPara: "pitem7",
    elemStone: "stone7",
    city: 'Augusta, GA',
    cityLat: 33.4735,
    cityLon: -82.0105,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone"
},
{
    elementID: "item8",
    elemPara: "pitem8",
    elemStone: "stone8",
    city: 'Memphis, TN',
    cityLat: 35.1495,
    cityLon: -90.0490,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone"
},
{
    elementID: "item9",
    elemPara: "pitem9",
    elemStone: "stone9",
    city: 'Wichita, KS',
    cityLat: 37.6872,
    cityLon: -97.3301,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone"
},
{
    elementID: "item10",
    elemPara: "pitem10",
    elemStone: "stone10",
    city: 'Chihuahua City, Chihuahua, Mexico',
    cityLat: 28.6330,
    cityLon: -106.0691,
    locationType: "specproj",
    fontType: "specprojItemfont",
    stoneType: "specprojStone"
},
{
    elementID: "item11",
    elemPara: "pitem11",
    elemStone: "stone11",
    city: 'Wichita, KS',
    cityLat: 37.6872,
    cityLon: -97.3301,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone"
},
{
    elementID: "item12",
    elemPara: "pitem12",
    elemStone: "stone12",
    city: 'Portland, OR',
    cityLat: 45.5155,
    cityLon: -122.6793,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone"
},
{
    elementID: "item13",
    elemPara: "pitem13",
    elemStone: "stone13",
    city: 'Yangjiang, Guangdong, China',
    cityLat: 21.8580,
    cityLon: 111.9822,
    locationType: "specproj",
    fontType: "specprojItemfont",
    stoneType: "specprojStone"
},
{
    elementID: "item14",
    elemPara: "pitem14",
    elemStone: "stone14",
    city: 'Portland, OR',
    cityLat: 45.5155,
    cityLon: -122.6793,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone"
},
{
    elementID: "item15",
    elemPara: "pitem15",
    elemStone: "stone15",
    city: 'Clemson, SC',
    cityLat: 34.6834,
    cityLon: -82.8374,
    locationType: "school",
    fontType: "schoolItemfont",
    stoneType: "schoolStone"
},
{
    elementID: "item16",
    elemPara: "pitem16",
    elemStone: "stone16",
    city: 'Portland, OR',
    cityLat: 45.5155,
    cityLon: -122.6793,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone"
},
{
    elementID: "item17",
    elemPara: "pitem17",
    elemStone: "stone17",
    city: 'Cabo San Lucas, Baja California Sur, Mexico',
    cityLat: 22.8905,
    cityLon: -109.9167,
    locationType: "specproj",
    fontType: "specprojItemfont",
    stoneType: "specprojStone"
},
{
    elementID: "item18",
    elemPara: "pitem18",
    elemStone: "stone18",
    city: 'Portland, OR',
    cityLat: 45.5155,
    cityLon: -122.6793,
    locationType: "school",
    fontType: "schoolItemfont",
    stoneType: "schoolStone"
},
];




function checkPosition() {
    var lineRight = Math.round(line.getBoundingClientRect().right);
    var lineLeft = Math.round(line.getBoundingClientRect().left);

    for (var i = 0; i < arrItems.length; i++) {
        var itemID = document.getElementById(arrItems[i]);
        var itemLeft = Math.round(itemID.getBoundingClientRect().left);
        var itemRight = Math.round(itemID.getBoundingClientRect().right);

        if (itemLeft < lineRight && itemRight > lineLeft) {
            varListenForMeToChange.a = arrItems[i];
            // console.log(varListenForMeToChange.a);
        }
    }

}

varListenForMeToChange = {
    aInternal: 10,
    aListener: function (val) { },
    set a(val) {
        this.aInternal = val;
        this.aListener(val);
    },
    get a() {
        return this.aInternal;
    },
    registerListener: function (listener) {
        this.aListener = listener;
    }
}

//declare the compZoom variable 
var compZoom = 0;

//delaying the zoom in, set compZoom
function delayIn() {
    setTimeout(function () { map.setZoom(3); }, 250);
    setTimeout(function () { map.setZoom(4); }, 500);
    setTimeout(function () { map.setZoom(5); }, 750);
    setTimeout(function () { map.setZoom(6); }, 1000);
    setTimeout(function () { map.setZoom(7); }, 1250);
    setTimeout(function () { map.setZoom(8); }, 1500);
    setTimeout(function () { map.setZoom(9); }, 1750);
    setTimeout(function () { map.setZoom(10); }, 2000);
    setTimeout(function () { map.setZoom(11); }, 2250);
    setTimeout(function () { map.setZoom(12); }, 2500);
    compZoom = 12

}


//delaying the zoom out
function delayOut() {
    setTimeout(function () { map.setZoom(11); }, 250);
    setTimeout(function () { map.setZoom(10); }, 500);
    setTimeout(function () { map.setZoom(9); }, 750);
    setTimeout(function () { map.setZoom(8); }, 1000);
    setTimeout(function () { map.setZoom(7); }, 1250);
    setTimeout(function () { map.setZoom(6); }, 1500);
    // setTimeout(function () { map.setZoom(5); }, 1750);
    // setTimeout(function () { map.setZoom(4); }, 2250);
    // setTimeout(function () { map.setZoom(3); }, 2750);
    setTimeout(function () { map.setZoom(ifZoom); }, 1750);
}

//need to write an if statement that waits 5 ms to run the code below, does nothing if another scroll has happened

//need to write some code that scrolls timeline to next stone and centers then stops unless scrolling it still happening

varListenForMeToChange.registerListener(function (val) {

    if (checkIt === varListenForMeToChange.a) {

    } else {

        if (checkIt === "") {

        } else {

            document.getElementById(checkIt).classList.remove('divScope');

            //remove color: loop through the resElements object array
            for (var i = 0; i < resElements.length; i++) {

                // if resElement.elementID equals focused itemID remove fontType and stoneType property from object array to class list
                if (resElements[i].elementID === checkIt) {
                    document.getElementById(resElements[i].elemPara).classList.remove(resElements[i].fontType);
                    document.getElementById(resElements[i].elemStone).classList.remove(resElements[i].stoneType);
                };
            };
        }

        checkIt = varListenForMeToChange.a;
        console.log("varListen = " + varListenForMeToChange.a);
        console.log("checkIt = " + checkIt);

        var varWhichItem = document.getElementById(varListenForMeToChange.a);

        if (checkIt === "") {

        } else {
            varWhichItem.classList.add('divScope');

            //add color: loop through the resElements object array
            for (var i = 0; i < resElements.length; i++) {

                // if resElement.elementID equals focused itemID add fontType and stoneType property from object array to class list
                if (resElements[i].elementID === checkIt) {
                    document.getElementById(resElements[i].elemPara).classList.add(resElements[i].fontType);
                    document.getElementById(resElements[i].elemStone).classList.add(resElements[i].stoneType);

                    // console log lat,long
                    console.log(resElements[i].cityLat + ", " + resElements[i].cityLon);

                    //add another if here to check if scroll is negative or positive, if negative compare i+1 instead of i-1 and then run some code
                    if (i - 1 < 0) {
                        map.setCenter(new google.maps.LatLng(resElements[i].cityLat, resElements[i].cityLon));
                        delayIn();
                    }
                    else if (resElements[i].cityLat === resElements[i - 1].cityLat && resElements[i].cityLon === resElements[i - 1].cityLon) {

                    } else {
                        var timer = null;

                        window.addEventListener('wheel', function () {
                            if (timer !== null) {
                                this.clearTimeout(timer);
                            }
                            timer = this.setTimeout(function () {
                                console.log("not scrolling")
                                delayZooms();
                            }, 500);
                        }, false);

                    };
                };
            };
        }
    }


});

function delayZooms() {

    for (var i = 0; i < resElements.length; i++) {

        if (resElements[i].elementID === checkIt) {
            if (compZoom === 12) {
                console.log("compZoom = " + compZoom)
                delayOut();
                var lat = resElements[i].cityLat;
                var lon = resElements[i].cityLon;
                setTimeout(function () { map.setCenter(new google.maps.LatLng(lat, lon)) }, 2000);
                setTimeout(function () { delayIn(); }, 2500);

            } else {
                map.setCenter(new google.maps.LatLng(resElements[i].cityLat, resElements[i].cityLon));
                delayIn();
            }
        }
    }
}


$(document).ready(function () {


});

