//Create an array of the flask API fires //
var url = "http://127.0.0.1:8000/api/v1.0/fires.geojson";
d3.json(url).then(function(data) {
  let wildfireData = [];
  for (let i = 0; i < data.features.length; i++) {
    let featureArray = data.features[i];
    for (let j = 0; j < featureArray.length; j++) {
      let feature = featureArray[j];
      let wildfire = {
        cause: feature.properties.cause,
        name: feature.properties.name,
        year: feature.properties.year,
        size: feature.properties.size,
        lat: feature.geometry.coordinates[1],
        lon: feature.geometry.coordinates[0]
      };
    wildfireData.push(wildfire);
  }
}
//});
console.dir(wildfireData, {depth: null})


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
  start: [1992, 2020],
  connect: true,
  range: {
    'min': 1992,
    'max': 2020
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


//Create new layer group for all fire markers
let fireMarkers = L.layerGroup();

// Loop through the wildfire data and add markers to the map
for (let i = 0; i < wildfireData.length; i++) {
  let feature = wildfireData[i];
  let lat = wildfireData[i].lat;
  let lon = wildfireData[i].lon;
  let size = wildfireData[i].size / 10;
  let marker = L.circleMarker([lat, lon], {
  color: "#000",
  fillColor: "blue",
  fillOpacity: .8,
  weight: 0,
  opacity: .8,
});

//Bind pop-up to each marker
marker.bindPopup(`<b>Fire Name:</b> ${wildfireData[i].name}<br><b>Fire Year:</b> ${wildfireData[i].year}<br><b>Cause:</b> ${wildfireData[i].cause}`);
fireMarkers.addLayer(marker);
};

let overlayMaps = {
  Wildfires: fireMarkers 
};

// Create a layer control after the markers have been added to the map.
// Pass it our baseMaps and overlayMaps.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap); 


// Define a function to filter the fireMarkers layer by year with the slider
function updateMarkerOpacity(yearRange) {
  for (let i=0; i < wildfireData.length; i++) {
    let fireYear = wildfireData[i].year;
    let marker = fireMarkers.getLayers()[i];
    if (fireYear >= yearRange[0] && fireYear <= yearRange[1]) {
      marker.setStyle({fillOpacity: 1});
    } else {
      marker.setStyle({fillOpacity: 0});
    }
  }
}

// Set the initial marker opacity based on the default year range
updateMarkerOpacity(slider.noUiSlider.get());

// Add an event listener to the slider that updates the marker opacity
slider.noUiSlider.on('update', function(values) {
  let yearRange = values.map(Number);
  updateMarkerOpacity(yearRange);
});


//Add base tile layers to the map
street.addTo(myMap);
topo.addTo(myMap);
});