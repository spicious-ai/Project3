console.log("hola senior")
//Create an array of the flask API fires //
var url = "http://127.0.0.1:8000/api/v1.0/fires.geojson";

var wildfireData = [];


//Create a map object
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
});
console.log("map object made");
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



/////////////////////////////////////////////////////////

//Create new layer group for all fire markers
let fireMarkers = L.layerGroup();

function createMarkers() {

    let overlayMaps = {
        Wildfires: fireMarkers
    };

    // Create a layer control.
    // Pass it our baseMaps and overlayMaps.
    // Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);

    fireMarkers.addTo(myMap);
    topo.addTo(myMap);


}

//Create slider filtering by year
function createSlider() {
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
  })
};


function updateSliderMarkers() {
    slider.noUiSlider.on('update',  getfilter().year = this.value);
}

//   // Define a function to filter the fireMarkers layer by year with the slider
// function updateMarkerOpacity(yearRange) {
//     for (let i=0; i < wildfireData.length; i++) {
//       let fireYear = wildfireData[i].year;
//       let marker = fireMarkers.getLayers()[i];
//       if (fireYear >= yearRange[0] && fireYear <= yearRange[1]) {
//         marker.setStyle({fillOpacity: 1});
//       } else {
//         marker.setStyle({fillOpacity: 0});
//       }
//     }
//   }
  
//   // Set the initial marker opacity based on the default year range
//   updateMarkerOpacity(slider.noUiSlider.get());
  
//   // Add range values to slider display
//   let rangeValues = [
//     document.getElementById('slider-range-value1'),
//     document.getElementById('slider-range-value2')
//   ];
  
//   slider.noUiSlider.on('update', function(values, handle) {
//     rangeValues[handle].innerHTML = values[handle];
//   });
  
//   // Add an event listener to the slider that updates the marker opacity
//   slider.noUiSlider.on('update', function(values) {
//     let yearRange = values.map(Number);
//     updateMarkerOpacity(yearRange);
//   });
  
//   };


  //end of Gina's code

// Joshua's code

//creating a custom fire marker icon

var fireIcon = L.icon({
    iconUrl: 'fireicon.png',
    iconSize: [20, 30]
});

function addDropDownToMap() {
    // Create a new dropdown menu for filtering by cause
    let selectedCause = L.control({ position: 'topright' });
    selectedCause.onAdd = function (map) {
        let div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = `
         <select id='cause-select' onchange='getfilter().cause = this.value'>
             <option value=''>All Causes</option>
             <option value='Arson/incendiarism'>Arson/incendiarism</option>
             <option value='Debris and open burning'>Debris and open burning</option>
             <option value='Equipment and vehicle use'>Equipment and vehicle use</option>
             <option value='Firearms and explosives use'>Firearms and explosives use</option>
             <option value='Fireworks'>Fireworks</option>
             <option value='Misuse of fire by a minor'>Misuse of fire by a minor</option>
             <option value='Natural'>Natural</option>
             <option value='Power generation/transmission/distribution'>Power generation/transmission/distribution</option>
             <option value='Railroad operations and maintenance'>Railroad operations and maintenance</option>
             <option value="Recreation and ceremony">Recreation and ceremony</option>
             <option value='Smoking'>Smoking</option>
             <option value='Other causes'>Other causes</option>
             <option value='Missing data/not specified/undetermined'>Missing data/not specified/undetermined</option>
           </select>
         `;
        return div;
    };
    selectedCause.addTo(myMap);
}


//adding a dropdown menu for filtering by year
function addDropDownYearsToMap() {
    // creating a dropdown menu for filtering by year
    let yearSelect = L.control({ position: 'topright' });
    yearSelect.onAdd = function (map) {
        let div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = `
        <select id='year-select' onchange='getfilter().year = this.value'>
        <option value=''>All Years</option>
        <option value='1992'>1992</option>
        <option value='1993'>1993</option>
        <option value='1994'>1994</option>
        <option value='1995'>1995</option>
        <option value='1996'>1996</option>
        <option value='1997'>1997</option>
        <option value='1998'>1998</option>
        <option value='1999'>1999</option>
        <option value='2000'>2000</option>
        <option value='2001'>2001</option>
        <option value='2002'>2002</option>
        <option value='2003'>2003</option>
        <option value='2004'>2004</option>
        <option value='2005'>2005</option>
        <option value='2006'>2006</option>
        <option value='2007'>2007</option>
        <option value='2008'>2008</option>
        <option value='2009'>2009</option>
        <option value='2010'>2010</option>
        <option value='2011'>2011</option>
        <option value='2012'>2012</option>
        <option value='2013'>2013</option>
        <option value='2014'>2014</option>
        <option value='2015'>2015</option>
        <option value='2016'>2016</option>
        <option value='2017'>2017</option>
        <option value='2018'>2018</option>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
    </select>
    `;
        return div;
    };
    yearSelect.addTo(myMap);
}


function updateDropdownFilters() {

}

// creating a class to filter on cause and year and update the map
class FireFilter {
    constructor(cause, year) {
        this._cause = cause;
        this._year = year;
    }

    get cause() {
        return this._cause;
    }
    set cause(cause) {
        this._cause = cause;
        this.updateMap();
    }

    get year() {
        return Number(this._year);
    }
    set year(year) {
        this._year = year;
        this.updateMap();
    }

    updateMap() {

        // Clear existing markers from the fireMarkers layer group
        fireMarkers.clearLayers();
        const selectedFires = wildfireData.filter(
            (fire) =>
                (!this.year || fire.year === this.year) &&
                (this.cause === "" || fire.cause === this.cause)
        );

        selectedFires.forEach((fire) => {
            
            let marker = L.marker([fire.lat, fire.lon], {
                icon: fireIcon,
            }).addTo(fireMarkers);
            marker.bindPopup(
                `<b>${fire.name}</b><br> Year: ${fire.year} <br>Size: ${fire.size} acres<br>Cause: ${fire.cause}`
            );
        });
    }
}

//creating an instince of the class to get used in the HTML
let filter = new FireFilter('', '');
function getfilter() {
    return filter;
}

// end of Joshua's code



//moving the d3 call to the end of the script
d3.json(url).then(function (data) {
    //let wildfireData = [];
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
            console.log("d3 call");
            wildfireData.push(wildfire);
        }
    }
    console.dir(wildfireData, { depth: null })

    createMarkers();
    addDropDownToMap();
    addDropDownYearsToMap();
    createSlider();
    updateSliderMarkers();
    
});


