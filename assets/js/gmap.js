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
    ['XTO Energy', 32.751693, -97.330620],
    ['Alcon Labs', 32.653600, -97.316063],
    ['Bell Helicopter', 35.209089, -101.717816],
    ['E-Z-GO', 33.4735, -82.0105],
    ['Greenlee', 35.1495, -90.0490],
    ['Textron, Inc.', 41.825184, -71.408561],
    ['Cessna Aircraft', 37.640640, -97.420297],
    ['Leatherman Tool Group', 45.564776, -122.538708],
    ['Propeller Consulting', 45.524089, -122.680020]
]

var schools = [
    ['University of Oregon', 45.523755, -122.670784],
    ['Clemson University', 34.6834, -82.8374],
    ['TCU', 32.709879, -97.360426]
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

var checkIt = "";

var arrItems = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10", "item11", "item12", "item13", "item14", "item15", "item16", "item17", "item18", "item19"];

var resElements = [{
    elementID: "item1",
    elemPara: "pitem1",
    elemStone: "stone1",
    city: "Fort Worth, TX",
    cityLat: 32.751693, 
    cityLon: -97.330620,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone",
    notes: [
        "Texas High Cost Well: applied for tax rate discounts for a savings of over $300 million.",
        "Oklahoma Horizontal Well tax refunds: received over $3 million applying for tax refunds.",
        "Utah Stripper Well Credits: received over $2 million in tax credits on Stripper Well applications."
    ]
},

{
    elementID: "item2",
    elemPara: "pitem2",
    elemStone: "stone2",
    city: "Fort Worth, TX",
    cityLat: 32.653600,
    cityLon: -97.316063,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone",
    notes: [
        "One of 3 selected from a pool of 20 qualified students for a one year program that merged course work and an internship with Alcon’s Global Supply Chain Department.",
        "Product Supply Chain Mapping: Collaborated with all ISC functions of the business while mapping a supply chain for a seasonal pharmaceutical product from the Forecasting and MRP functions to differing domestic and international distribution strategies to the end customer.",
        "Stock Availability Rate (SAR): Analyzed data to identify trends and high risk areas of inventory depletion for LACAR, CAFE, and EURMEA global regions."
    ]
},
{
    elementID: "item3",
    elemPara: "pitem3",
    elemStone: "stone3",
    city: "Fort Worth, TX",
    cityLat: 32.709879,
    cityLon: -97.360426,
    locationType: "school",
    fontType: "schoolItemfont",
    stoneType: "schoolStone",
    notes: [
        "Bachelor of Business Administration | Neeley School of Business",
        "Major: Supply and Value Chain Management",
        "Minors: Accouting, Economics"
    ]

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
    stoneType: "workStone",
    notes: [
        "Selected for a two-year program consisting of four six-month rotations with multiple organizations in cross-functional supply chain roles",
        "Organizations: Cessna, Bell Helicopter, E-Z-GO, Greenlee",
        "Roles: Safety Process Leader, Supplier Development Specialist, Buyer/Planner, Operations Supervisor"
    ]

},
{
    elementID: "item5",
    elemPara: "pitem5",
    elemStone: "stone5",
    city: 'Wichita, KS',
    cityLat: 37.640640,
    cityLon: -97.420297,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone",
    notes: [
        "Automated Safety Audit and Roll Out: Applied the DMAIC framework to develop an automated solution that captures monthly Safety Audit findings across operations, averaging 100 entries per month across multiple facilities.",
        "Metal Bond Finished Goods Supermarket: Used data analysis to identify which parts could withstand leaner inventory levels.",
        "EHS Compliance Management: Worked to resolve high priority, safety-related audit findings. Interacted with various teams working towards resolutions and managed status reports."
    ]
},
{
    elementID: "item6",
    elemPara: "pitem6",
    elemStone: "stone6",
    city: 'Amarillo, TX',
    cityLat: 35.209089,
    cityLon: -101.717816,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone",
    notes: [
        "Kaizen: Coordinated and assisted in facilitation of Kaizen event on-site at a supplier facility. Collected data on process for two (2) parts with consistently late delivery, generated action items, and distributed a control plan for action item execution.",
        "Standard Work: Created standard work document to reduce the on-boarding time for LDPs, including key contacts and step-by-step access requests processes."
    ]
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
    stoneType: "workStone",
    notes: [
        "Buyer/Planner: Achieved a 93.38% fill rate for 300+ SKUs. Reduced number of SKUs backordered from 42 to 15 over a 6 month period. Developed procedures and standard work for strategic prioritization of open orders for key suppliers.",
        "Overseas Suppliers: Strategically managed container quantities to minimize per unit logistics cost, considering variables such as shipping lead time, Chinese New Year shutdowns, and demand.",
    ]
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
    stoneType: "workStone",
    notes: [
        "Operations Supervisor: Lead the execution of kitting for approximately 1500 SKUs. Managed the day-to-day for 20 operators and 5 material handlers. Strategically allocated labor to special projects and stock builds for new product launches while maintaining productivity. Focused team mission on pillars of Safety, Quality, Productivity, and Product Availability (Customer Satisfaction).",
        "Kanban: Analyzed volume and frequency data from SAP tables (MCTC, MARA) to determine high demand SKUs to put on pull system. Determined kanban container quantity and number of containers required based on safety stock and demand requirements for approximately 200 SKUs. Designed templates for labels and signal cards, implemented for 25+ SKUs.",
        "Work Cell Design: Lead the continuous improvement of 9 different work cells. Analyzed component usage to identify point-of-use space allocation for high running parts. Maximized efficiency by reducing motion and transportation muda."
    ]
},
{
    elementID: "item9",
    elemPara: "pitem9",
    elemStone: "stone9",
    city: 'Wichita, KS',
    cityLat: 37.640640,
    cityLon: -97.420297,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone",
    notes: [
        "Leading teams to identify Root Cause Corrective Actions for injuries and near miss incidents with Lean (waste elimination) and Six Sigma (variation elimination) tools and principles.",
        "Apply Plan, Do, Check, Act cycle to managing implementation of pro-active EHS risk mitigation projects.",
        "Coach the use of Define, Measure, Analyze, Improve, Control (DMAIC) problem solving methodology and associated tools.",
        "Programmed Hazardous Waste Manifest tracking tools with VBA. Reduced user time requirementby 80%."
    ]

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
    stoneType: "specprojStone",
    notes: [
        "Participated in Sleeping Facility and Energy Loss tours.",
        "Worked with team to prioritize energy saving opportunities based on estimated ROI. Presented to organzation's leadership."
    ]

},
{
    elementID: "item11",
    elemPara: "pitem11",
    elemStone: "stone11",
    city: 'Wichita, KS',
    cityLat: 37.640640,
    cityLon: -97.420297,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone",
    notes: [
        "Developed Hazardous Waste Tracking application for manifest and waste-profile generation tracking. Included automated reporting functionality for annual reporting requirements.",
        "Designed and implemented a new incident investigation form that leveraged the DMAIC cycle, a commonly understood tool within the organization.",
        "Lead Kaizen events to blitz compliance issues and injury risks in key departments."
    ]

},
{
    elementID: "item12",
    elemPara: "pitem12",
    elemStone: "stone12",
    city: 'Portland, OR',
    cityLat: 45.564776,
    cityLon: -122.538708,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone",
    notes: [
        "Analyzed injury data to identify trending injury types and common variables. Prioritized preventative action by high frequency and high severity. Reduced annual first-aid cuts from ~100 to ~20",
        "Developed and deployed intranet site for employees to locate program information. Developed and deployed department dashboard to facilitate tracking of open safety action items.",
        "Developed new hire orientation training. Created interactive activities to educate on risk management and build culture."
    ]

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
    stoneType: "specprojStone",
    notes: [
        "note 1",
        "note 2"
    ]
},
{
    elementID: "item14",
    elemPara: "pitem14",
    elemStone: "stone14",
    city: 'Portland, OR',
    cityLat: 45.564776,
    cityLon: -122.538708,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone",
    notes: [
        "Set annual vision and strategy for EHS functional objectives. Define key performance indicators and communicate targets to all levels of the organization.",
        "Reviewed and revised EHS programs to ensure compliance with regulations. Developed automated, interactive training format to train impacted personnel on program changes.",
        "Developed and deployed automated training program, including interactive, dynamic quizzing, and electronic distribution of results."
    ]
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
    stoneType: "schoolStone",
    notes: [
        "Master of Engineering | College of Engineering, Computing and Applied Sciences",
        "Industrial Engineering"
    ]
},
{
    elementID: "item16",
    elemPara: "pitem16",
    elemStone: "stone16",
    city: 'Portland, OR',
    cityLat: 45.564776,
    cityLon: -122.538708,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone",
    notes: [
        "Work with project sponsors to define scope and develop charters. Lead process improvement, facility, new product, and special make-up projects.",
        "Communicate project risks (scope, timeline, budget) to stakeholders and sponsors on a regular cadence. Circle up key functions to identify mitigation and contingency plans for identified risks.",
        "Managed new product, product redesign, facility and process improvement projects."
    ]
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
    stoneType: "specprojStone",
    notes: [
        "Participated in week-long, strategic retreat. Presented with teams covering Cost Savings Opportunities and The Future of Direct to Consumer."
    ]
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
    stoneType: "schoolStone",
    notes: [
        "Accelerated 24-week program curriculum covers full stack web development essentials.",
        "Classroom instruction on concepts including data structures, algorithms, HTML, CSS, JavaScript, application deployment, database management, server side development, quality assurance and many other concepts and technologies."
    ]
},
{
    elementID: "item19",
    elemPara: "pitem19",
    elemStone: "stone19",
    city: 'Portland, OR',
    cityLat: 45.524089,
    cityLon: -122.680020,
    locationType: "work",
    fontType: "workItemfont",
    stoneType: "workStone",
    notes: [
        ""
    ]
}
];

var timer = null;


//wheel event to that runs the function if the wheel has stopped moving for xxx ms
window.addEventListener('wheel', function () {
    if (timer !== null) {
        this.clearTimeout(timer);
    }
    timer = this.setTimeout(function () {
        console.log("not scrolling");
        doTheZoom();
    }, 500);
}, false);

var variable1;
// var variablelat;
// var variablelon;
var variablecity;
var howlongcenter;
var howlongin;
var howlongdetail;

function doTheZoom() {

    //if the variable === the array[i].itemID && 
    var lineRight2 = Math.round(line.getBoundingClientRect().right);
    var lineLeft2 = Math.round(line.getBoundingClientRect().left);

    for (var i = 0; i < resElements.length; i++) {
        var itemID2 = document.getElementById(resElements[i].elementID);
        var itemLeft2 = Math.round(itemID2.getBoundingClientRect().left);
        var itemRight2 = Math.round(itemID2.getBoundingClientRect().right);

        if (itemLeft2 < lineRight2 && itemRight2 > lineLeft2) {

            if (variable1 === resElements[i].elementID) {
                console.log("variable 1 didnt change")

            } else if (
                variablecity === resElements[i].city
                // variablelat === resElements[i].cityLat && variablelon === resElements[i].cityLon
                ) {
                    document.getElementById('detail').innerHTML = "";

                    map.panTo({ lat: resElements[i].cityLat, lng: resElements[i].cityLon });
                    
                    setTimeout(function () { getTheDetail() }, 500 );

                    variable1 = resElements[i].elementID;
            } else {
                variable1 = resElements[i].elementID;
                // variablelat = resElements[i].cityLat;
                // variablelon = resElements[i].cityLon;
                variablecity = resElements[i].city;
                console.log("variable 1 changed");
                // isNew = "true";
                var lat = resElements[i].cityLat;
                var lon = resElements[i].cityLon;
                if (compZoom === 12) {
                    document.getElementById('detail').innerHTML = "";
                    delayOut();
                    howlongcenter = 3750;
                    howlongin = 4000;
                } else {
                    document.getElementById('detail').innerHTML = "";
                    howlongcenter = 0;
                    howlongin = 0;
                }

                howlongdetail = howlongin + 100;

                setTimeout(function () { map.panTo({ lat: lat, lng: lon }) }, howlongcenter);
                // setTimeout(function () { map.setCenter(new google.maps.LatLng(lat, lon)) }, howlongcenter);
                setTimeout(function () { delayIn(); }, howlongin);
                // setTimeout(getTheDetail(), howlongdetail);

            }
        }

    }
}

window.addEventListener('wheel', checkPosition)

function checkPosition() {



    //get container element by id
    //manipulate DOM .. insert css to id: background: rgba(51,51,51,.50);
    document.getElementById("container").style.background = "transparent";
    document.getElementById("fixed-to-bottom").classList.add('animated', 'fadeInRight', 'slower');
    // const element = document.querySelector('.fixed-to-bottom');
    // element.classList.add('animated', 'fadeInRight', 'slower');


    var lineRight = Math.round(line.getBoundingClientRect().right);
    var lineLeft = Math.round(line.getBoundingClientRect().left);

    for (var i = 0; i < arrItems.length; i++) {
        var itemID = document.getElementById(arrItems[i]);
        var itemLeft = Math.round(itemID.getBoundingClientRect().left);
        var itemRight = Math.round(itemID.getBoundingClientRect().right);

        if (itemLeft < lineRight && itemRight > lineLeft) {

            if (varListenForMeToChange.a === arrItems[i]) {
                console.log("NO CHANGE TO varListenForMeToChange")

            } else {
                // need to create a couple variables and an if statement that compares their value, if they are different change the listening variable and set the variables to equal
                varListenForMeToChange.a = arrItems[i];
                console.log("varListenForMeToChange has changed");
                // isNew = "true";
            }
        }

        if (varListenForMeToChange.a === "item1") {
            document.getElementById("container").style.opacity = "0";
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
                };
            };
        }

    }


});

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
    //manipulate dom to show detail id div, maybe an animation?
    setTimeout(function () { document.getElementById("detail").style.opacity = '1'; }, 2700);
    setTimeout(function () { getTheDetail(); }, 2900);
    console.log("should be visible");
    //manipulate dom to include item detail from object array data, maybe an animation?
    compZoom = 12;

}


function getTheDetail() {

    console.log("the detail function fired");

    for (i = 0; i < resElements.length; i++) {

        if (resElements[i].elementID === checkIt) {

            for (j = 0; j < resElements[i].notes.length; j++) {
                document.getElementById('detail').innerHTML += "<li style='text-align: left; padding: 10px; '>" + resElements[i].notes[j] + "</li>";
                autoSizeText();
            };
        }
        else {
            console.log("this method to check did not work");
            console.log(checkIt);
            console.log(varListenForMeToChange.a);
        }

    }

};

//delaying the zoom out
function delayOut() {
    setTimeout(function () { map.setZoom(11); }, 250);
    setTimeout(function () { map.setZoom(10); }, 500);
    setTimeout(function () { map.setZoom(9); }, 750);
    setTimeout(function () { map.setZoom(8); }, 1000);
    setTimeout(function () { map.setZoom(7); }, 1250);
    setTimeout(function () { map.setZoom(6); }, 1500);
    setTimeout(function () { map.setZoom(5); }, 1750);
    setTimeout(function () { map.setZoom(4); }, 2250);
    setTimeout(function () { map.setZoom(3); }, 2750);
    setTimeout(function () { map.setZoom(ifZoom); }, 3000);
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
                };
            };
        }
    }
});

var autoSizeText;
autoSizeText = function() {
  var el, elements, _i, _len, _results;
  elements = $('.resize');
  console.log(elements);
  if (elements.length < 0) {
    return;
  }
  _results = [];
  for (_i = 0, _len = elements.length; _i < _len; _i++) {
    el = elements[_i];
    _results.push((function(el) {
      var resizeText, _results1;
      resizeText = function() {
        var elNewFontSize;
        elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
        return $(el).css('font-size', elNewFontSize);
      };
      _results1 = [];
      while (el.scrollHeight > el.offsetHeight) {
        _results1.push(resizeText());
      }
      return _results1;
    })(el));
  }
  return _results;
};

// function delayZooms() {

//     for (var i = 0; i < resElements.length; i++) {

//         if (resElements[i].elementID === checkIt) {
//             if (compZoom === 12) {
//                 console.log("compZoom = " + compZoom)
//                 delayOut();
//                 var lat = resElements[i].cityLat;
//                 var lon = resElements[i].cityLon;
//                 setTimeout(function () { map.setCenter(new google.maps.LatLng(lat, lon)) }, 2000);
//                 setTimeout(function () { delayIn(); }, 2500);

//             } else {
//                 map.setCenter(new google.maps.LatLng(resElements[i].cityLat, resElements[i].cityLon));
//                 delayIn();
//             }
//         }
//     }
// }


$(document).ready(function () {


});