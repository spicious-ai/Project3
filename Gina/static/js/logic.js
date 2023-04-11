//Create a map object
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
   
  //Create base tile layers
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  
  let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });
  
  //Create baseMaps object
  let baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

  // Create slider
  let slider = document.getElementById("slider");
    noUiSlider.create(slider, {
      start: [2000, 2022],
      connect: true,
      range: {
        'min': 2000,
        'max': 2022
      },
      format: {
        to: function(value) {
          return parseInt(value);
        },
        from: function(value) {
          return parseInt(value);
        }
      }
    });
    
    // Add range values to slider display
    let rangeValues = [
      document.getElementById('slider-range-value1'),
      document.getElementById('slider-range-value2')
    ];
    
    slider.noUiSlider.on('update', function(values, handle) {
      rangeValues[handle].innerHTML = values[handle];
    });
  

// // D3 call to API from local host to load data 
//     // Store our API endpoint as queryUrl.
//     var queryUrl = "http://localhost:8001/api/v1.0/fires.geojson";

//     // Perform a GET request to the query URL/
//     d3.json(queryUrl).then(function (data) {
//         // Once we get a response, send the data.features object to the createFeatures function.
//         console.log(data);
//     });
/////////////////////////////////////////////////////////////////////////

//Create variable with sample geoJSON data for development
var data = {
    "features": [
            {
                "geometry": {
                    "coordinates": [
                        -120.21166667,
                        38.52333333
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Equipment and vehicle use",
                    "name": "POWER",
                    "size": 16823.0,
                    "year": 2004
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -120.26,
                        38.78
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Power generation/transmission/distribution",
                    "name": "FREDS",
                    "size": 7700.0,
                    "year": 2004
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -111.275,
                        33.72333333
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "THREE",
                    "size": 16100.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -118.43833333,
                        35.68805556
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Missing data/not specified/undetermined",
                    "name": "NINE",
                    "size": 1149.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -111.37972222,
                        33.93361111
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "OAK",
                    "size": 1300.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -111.10666667,
                        33.55111111
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "TW0 BAR",
                    "size": 2093.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -106.35833333,
                        45.30833333
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "SAWMILL GULCH",
                    "size": 1199.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -108.55888889,
                        33.61333333
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "FORK",
                    "size": 11936.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -105.95527778,
                        45.44833333
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "ERICKSON SPRING",
                    "size": 2700.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -105.03805556,
                        38.16972222
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "MASON",
                    "size": 11357.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -118.06777778,
                        45.84083333
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Missing data/not specified/undetermined",
                    "name": "BURNT CABIN",
                    "size": 1977.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -103.39388889,
                        44.19361111
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "RICCO",
                    "size": 3959.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -104.17416667,
                        44.37194444
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "CEMENT",
                    "size": 3025.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -114.21,
                        45.38805556
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "HALE GULCH",
                    "size": 2643.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -109.19055556,
                        33.16972222
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "SNAKE RIDGE FIRE",
                    "size": 1900.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -114.72277778,
                        45.24861111
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "STODDARD CREEK POINT",
                    "size": 4004.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -114.58777778,
                        46.3425
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "BIG SANDS",
                    "size": 2398.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -90.96777778,
                        48.14
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "ALPINE LAKE",
                    "size": 1335.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -115.025,
                        45.92333333
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "RUNNING LAKE",
                    "size": 7404.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -114.63972222,
                        45.88083333
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "CEDAR BAREFOOT",
                    "size": 1777.5,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -114.90138889,
                        46.69611111
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "LODGEPOLE HUMP",
                    "size": 1981.5,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -113.53833333,
                        37.17388889
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "MILL CREEK",
                    "size": 7892.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -114.95833333,
                        45.92777778
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "BOXCAR",
                    "size": 1818.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -114.70666667,
                        45.73027778
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "BEAVER JACK",
                    "size": 7244.4,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -115.01,
                        45.7
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "BURNT",
                    "size": 4530.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -115.78583333,
                        45.93222222
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "CHINA TEN",
                    "size": 1859.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -120.35166667,
                        39.61222222
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Missing data/not specified/undetermined",
                    "name": "HARDING",
                    "size": 2270.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -113.37555556,
                        47.73305556
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Recreation and ceremony",
                    "name": "KELLY POINT",
                    "size": 3875.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -117.68055556,
                        46.23444444
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Power generation/transmission/distribution",
                    "name": "SCHOOL",
                    "size": 52000.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -115.61611111,
                        40.28638889
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "HASTINGS",
                    "size": 1180.3,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -114.88583333,
                        45.97472222
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "ELK CREEK",
                    "size": 1335.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -114.86555556,
                        46.02055556
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "PENNY",
                    "size": 1067.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -114.70361111,
                        45.09055556
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "NINE SHOT",
                    "size": 20400.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -114.58722222,
                        45.5325
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "REYNOLDS LAKE",
                    "size": 4010.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -114.61638889,
                        45.42527778
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "MUSTANG",
                    "size": 1040.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -115.21,
                        46.80027778
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "BLACK CANYON FACE",
                    "size": 2000.0,
                    "year": 2005
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -96.56363,
                        38.15673
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Equipment and vehicle use",
                    "name": "2",
                    "size": 1150.0,
                    "year": 2017
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -100.7542,
                        41.95605
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Equipment and vehicle use",
                    "name": "",
                    "size": 11000.0,
                    "year": 2017
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -99.566874,
                        39.263895
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Equipment and vehicle use",
                    "name": "1700003",
                    "size": 1500.0,
                    "year": 2017
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -99.21493,
                        38.92777
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Equipment and vehicle use",
                    "name": "017-065",
                    "size": 7500.0,
                    "year": 2017
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -99.79064,
                        34.76083
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Missing data/not specified/undetermined",
                    "name": "",
                    "size": 4000.0,
                    "year": 2008
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -102.3659,
                        32.21779
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Natural",
                    "name": "",
                    "size": 3800.0,
                    "year": 2008
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -99.606,
                        33.176
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Missing data/not specified/undetermined",
                    "name": "",
                    "size": 1700.0,
                    "year": 2008
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -100.7297,
                        34.13717
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Smoking",
                    "name": "WILD HOG",
                    "size": 2300.0,
                    "year": 2007
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -100.7182,
                        34.08447
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Equipment and vehicle use",
                    "name": "WILD HOG SOUTH",
                    "size": 1200.0,
                    "year": 2007
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -101.2561,
                        30.31063
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Equipment and vehicle use",
                    "name": "HUDSPETH",
                    "size": 3555.0,
                    "year": 2007
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -98.71917,
                        30.40195
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Missing data/not specified/undetermined",
                    "name": "WILLOW CITY",
                    "size": 2000.0,
                    "year": 2007
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "coordinates": [
                        -99.1125,
                        30.77861
                    ],
                    "type": "Point"
                },
                "properties": {
                    "cause": "Equipment and vehicle use",
                    "name": "ART",
                    "size": 2800.0,
                    "year": 2007
                },
                "type": "Feature"
            }
        ]};

// Create a new geoJSON layer with the wildfireData
let fireMarkers = L.geoJSON(data, {
    pointToLayer: function (features, latlng) {
      return L.circleMarker(latlng, {
        fillColor: "blue",
        color: "#000",
        weight: 0,
        opacity: 1,
        fillOpacity: 1});
      },
        onEachFeature: function (features, layer) {
            layer.bindPopup("<h3>" + features.properties.name +
              "</h3><hr><p>Year: " + features.properties.year + "</p>" +
              "<p>Cause: " + features.properties.cause + "</p>");
          }
        }).addTo(myMap);

  let overlayMaps = {
    Wildfires: fireMarkers
  };

  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

// Define a function to filter the fireMarkers layer by year with the slider
function updateMarkerOpacity(yearRange) {
  fireMarkers.eachLayer(function(layer) {
    let year = layer.feature.properties.year;
    if (year >= yearRange[0] && year <= yearRange[1]) {
      layer.setStyle({fillOpacity: 1});
    } else {
      layer.setStyle({fillOpacity: 0});
    }
  });
};

// Set the initial marker opacity based on the default year range
updateMarkerOpacity(slider.noUiSlider.get());

// Add an event listener to the slider that updates the marker opacity
slider.noUiSlider.on('update', function(values, handle) {
  let yearRange = values.map(Number);
  updateMarkerOpacity(yearRange);
});

fireMarkers.addTo(myMap);
topo.addTo(myMap);
