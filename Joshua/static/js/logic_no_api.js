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


 //Create an array of the flask API fires //
 // UPDATE WITH API CALL //
  let wildfireData = [
    {
      "FIRE_NAME": "CAMP", 
      "FIRE_SIZE": 60.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 38.01722222, 
      "LONGITUDE": -120.10111111, 
      "NWCG_GENERAL_CAUSE": "Debris and open burning"
    }, 
    {
      "FIRE_NAME": "KNIGHT", 
      "FIRE_SIZE": 1.5, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 38.15166667, 
      "LONGITUDE": -120.23472222, 
      "NWCG_GENERAL_CAUSE": "Debris and open burning"
    }, 
    {
      "FIRE_NAME": "CHARCOAL KILN", 
      "FIRE_SIZE": 3.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 36.80083333, 
      "LONGITUDE": -92.98416667, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "DOC TURNBOUGH", 
      "FIRE_SIZE": 0.3, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 37.78472222, 
      "LONGITUDE": -91.01861111, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "WATERFALL", 
      "FIRE_SIZE": 4.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 36.9525, 
      "LONGITUDE": -92.935, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "GRASSHOPPER", 
      "FIRE_SIZE": 93.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 36.96777778, 
      "LONGITUDE": -92.95166667, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "001 SHIRLEY ROAD", 
      "FIRE_SIZE": 7.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 31.63333333, 
      "LONGITUDE": -92.51666667, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "CROOKED", 
      "FIRE_SIZE": 6.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 37.65138889, 
      "LONGITUDE": -91.28111111, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "TRASH", 
      "FIRE_SIZE": 1.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 36.81861111, 
      "LONGITUDE": -92.05111111, 
      "NWCG_GENERAL_CAUSE": "Debris and open burning"
    }, 
    {
      "FIRE_NAME": "CAMARON", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 32.0, 
      "LONGITUDE": -108.13444444, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "COLD", 
      "FIRE_SIZE": 3.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 33.76666667, 
      "LONGITUDE": -108.53555556, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "SOLDIER", 
      "FIRE_SIZE": 100.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 32.95166667, 
      "LONGITUDE": -107.80222222, 
      "NWCG_GENERAL_CAUSE": "Natural"
    }, 
    {
      "FIRE_NAME": "SIGNAL", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 32.91666667, 
      "LONGITUDE": -108.16805556, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "SNOW", 
      "FIRE_SIZE": 8.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 33.43444444, 
      "LONGITUDE": -108.53527778, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "MEADOW", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 32.91666667, 
      "LONGITUDE": -108.16805556, 
      "NWCG_GENERAL_CAUSE": "Missing data/not specified/undetermined"
    }, 
    {
      "FIRE_NAME": "IRON", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 32.9, 
      "LONGITUDE": -107.80194444, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "CORRAL", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 32.91694444, 
      "LONGITUDE": -108.13444444, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "MILL", 
      "FIRE_SIZE": 10.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 32.88416667, 
      "LONGITUDE": -108.235, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "LAKE", 
      "FIRE_SIZE": 200.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 33.40166667, 
      "LONGITUDE": -108.48527778, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "WALNUT", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 32.83388889, 
      "LONGITUDE": -108.26861111, 
      "NWCG_GENERAL_CAUSE": "Misuse of fire by a minor"
    }, 
    {
      "FIRE_NAME": "ROARING", 
      "FIRE_SIZE": 0.7, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 33.8675, 
      "LONGITUDE": -108.96805556, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "HIGHWAY", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 34.03416667, 
      "LONGITUDE": -108.65083333, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "HEADWATER", 
      "FIRE_SIZE": 0.5, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 34.01805556, 
      "LONGITUDE": -108.65166667, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "ORTEGA", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 33.6, 
      "LONGITUDE": -117.43333333, 
      "NWCG_GENERAL_CAUSE": "Equipment and vehicle use"
    }, 
    {
      "FIRE_NAME": "MAXIMA", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 33.65, 
      "LONGITUDE": -117.4, 
      "NWCG_GENERAL_CAUSE": "Equipment and vehicle use"
    }, 
    {
      "FIRE_NAME": "CALABASAS", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 31.385, 
      "LONGITUDE": -111.055, 
      "NWCG_GENERAL_CAUSE": "Missing data/not specified/undetermined"
    }, 
    {
      "FIRE_NAME": "CORONA", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 31.825, 
      "LONGITUDE": -110.715, 
      "NWCG_GENERAL_CAUSE": "Equipment and vehicle use"
    }, 
    {
      "FIRE_NAME": "JOSEPHINE", 
      "FIRE_SIZE": 110.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 31.67666667, 
      "LONGITUDE": -110.84, 
      "NWCG_GENERAL_CAUSE": "Natural"
    }, 
    {
      "FIRE_NAME": "CHIVA ROAD", 
      "FIRE_SIZE": 4.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 32.30166667, 
      "LONGITUDE": -110.57666667, 
      "NWCG_GENERAL_CAUSE": "Smoking"
    }, 
    {
      "FIRE_NAME": "SPROCKET", 
      "FIRE_SIZE": 75.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 37.14555556, 
      "LONGITUDE": -83.50111111, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "CLIFF", 
      "FIRE_SIZE": 35.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 37.25, 
      "LONGITUDE": -83.51916667, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "KEENS FORK", 
      "FIRE_SIZE": 350.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 37.00138889, 
      "LONGITUDE": -83.66805556, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "DOG POUND", 
      "FIRE_SIZE": 120.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 37.15027778, 
      "LONGITUDE": -83.66722222, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "SALEM", 
      "FIRE_SIZE": 3.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 36.9675, 
      "LONGITUDE": -84.46861111, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "0014", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.9625, 
      "LONGITUDE": -121.23611111, 
      "NWCG_GENERAL_CAUSE": "Missing data/not specified/undetermined"
    }, 
    {
      "FIRE_NAME": "0027", 
      "FIRE_SIZE": 0.2, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.95444444, 
      "LONGITUDE": -121.24277778, 
      "NWCG_GENERAL_CAUSE": "Debris and open burning"
    }, 
    {
      "FIRE_NAME": "MILLENIUM", 
      "FIRE_SIZE": 7.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.41833333, 
      "LONGITUDE": -82.28, 
      "NWCG_GENERAL_CAUSE": "Debris and open burning"
    }, 
    {
      "FIRE_NAME": "FAUSETT", 
      "FIRE_SIZE": 1.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.45166667, 
      "LONGITUDE": -81.915, 
      "NWCG_GENERAL_CAUSE": "Power generation/transmission/distribution"
    }, 
    {
      "FIRE_NAME": "FERRY STARKES", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.01722222, 
      "LONGITUDE": -81.80166667, 
      "NWCG_GENERAL_CAUSE": "Firearms and explosives use"
    }, 
    {
      "FIRE_NAME": "MUD LAKE", 
      "FIRE_SIZE": 0.5, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.13361111, 
      "LONGITUDE": -81.51694444, 
      "NWCG_GENERAL_CAUSE": "Missing data/not specified/undetermined"
    }, 
    {
      "FIRE_NAME": "FERRY STAKES", 
      "FIRE_SIZE": 0.5, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.00194444, 
      "LONGITUDE": -81.80166667, 
      "NWCG_GENERAL_CAUSE": "Missing data/not specified/undetermined"
    }, 
    {
      "FIRE_NAME": "BOMBING RANGE", 
      "FIRE_SIZE": 0.2, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.11777778, 
      "LONGITUDE": -81.70055556, 
      "NWCG_GENERAL_CAUSE": "Firearms and explosives use"
    }, 
    {
      "FIRE_NAME": "SALT SPRINGS", 
      "FIRE_SIZE": 4.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.33333333, 
      "LONGITUDE": -81.71666667, 
      "NWCG_GENERAL_CAUSE": "Missing data/not specified/undetermined"
    }, 
    {
      "FIRE_NAME": "LAKE BRYANT", 
      "FIRE_SIZE": 6.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.15194444, 
      "LONGITUDE": -81.85138889, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "SANDY", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.06777778, 
      "LONGITUDE": -81.66722222, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "MOSS BUFF 18", 
      "FIRE_SIZE": 2.5, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.09666667, 
      "LONGITUDE": -81.84833333, 
      "NWCG_GENERAL_CAUSE": "Debris and open burning"
    }, 
    {
      "FIRE_NAME": "BENTON", 
      "FIRE_SIZE": 6179.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.46166667, 
      "LONGITUDE": -82.60333333, 
      "NWCG_GENERAL_CAUSE": "Debris and open burning"
    }, 
    {
      "FIRE_NAME": "EATON", 
      "FIRE_SIZE": 0.2, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.23277778, 
      "LONGITUDE": -81.86833333, 
      "NWCG_GENERAL_CAUSE": "Missing data/not specified/undetermined"
    }, 
    {
      "FIRE_NAME": "NATURAL LITE", 
      "FIRE_SIZE": 2.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.32666667, 
      "LONGITUDE": -82.605, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "MOSS BLUFF 21", 
      "FIRE_SIZE": 0.2, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.08333333, 
      "LONGITUDE": -81.83333333, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "CONNER", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.23527778, 
      "LONGITUDE": -81.93361111, 
      "NWCG_GENERAL_CAUSE": "Natural"
    }, 
    {
      "FIRE_NAME": "GRASSEY PRAIRIE", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.01666667, 
      "LONGITUDE": -81.81666667, 
      "NWCG_GENERAL_CAUSE": "Equipment and vehicle use"
    }, 
    {
      "FIRE_NAME": "WILDCAT", 
      "FIRE_SIZE": 0.5, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.16666667, 
      "LONGITUDE": -81.61666667, 
      "NWCG_GENERAL_CAUSE": "Equipment and vehicle use"
    }, 
    {
      "FIRE_NAME": "'TWEEN", 
      "FIRE_SIZE": 0.2, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.20833333, 
      "LONGITUDE": -82.39833333, 
      "NWCG_GENERAL_CAUSE": "Railroad operations and maintenance"
    }, 
    {
      "FIRE_NAME": "FERRY STARKES", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.01833333, 
      "LONGITUDE": -81.82, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "PITTMAN 29", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.02333333, 
      "LONGITUDE": -81.66833333, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "EASTER", 
      "FIRE_SIZE": 2.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.42166667, 
      "LONGITUDE": -82.27166667, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "CHARCOAL", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.24166667, 
      "LONGITUDE": -82.43333333, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "MIKELL", 
      "FIRE_SIZE": 1.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.20777778, 
      "LONGITUDE": -82.41, 
      "NWCG_GENERAL_CAUSE": "Natural"
    }, 
    {
      "FIRE_NAME": "RING", 
      "FIRE_SIZE": 8.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.40944444, 
      "LONGITUDE": -82.25333333, 
      "NWCG_GENERAL_CAUSE": "Natural"
    }, 
    {
      "FIRE_NAME": "CUYLER", 
      "FIRE_SIZE": 120.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.35, 
      "LONGITUDE": -82.24333333, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "FORT GATES 13", 
      "FIRE_SIZE": 81.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 29.41805556, 
      "LONGITUDE": -81.66972222, 
      "NWCG_GENERAL_CAUSE": "Missing data/not specified/undetermined"
    }, 
    {
      "FIRE_NAME": "SPRING HILL S.O. #34", 
      "FIRE_SIZE": 4.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.32083333, 
      "LONGITUDE": -84.3875, 
      "NWCG_GENERAL_CAUSE": "Natural"
    }, 
    {
      "FIRE_NAME": "BORROW PIT S.O. #34", 
      "FIRE_SIZE": 0.5, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.38583333, 
      "LONGITUDE": -84.46916667, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "POWER LINE", 
      "FIRE_SIZE": 2.5, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.1525, 
      "LONGITUDE": -84.6525, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "FARM", 
      "FIRE_SIZE": 0.5, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.38583333, 
      "LONGITUDE": -84.6025, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "LONESTAR S.O.#83", 
      "FIRE_SIZE": 0.5, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.38583333, 
      "LONGITUDE": -84.61916667, 
      "NWCG_GENERAL_CAUSE": "Debris and open burning"
    }, 
    {
      "FIRE_NAME": "LONESTAR2 S.O.#84", 
      "FIRE_SIZE": 3.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 30.3875, 
      "LONGITUDE": -84.62083333, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "0152", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.67638889, 
      "LONGITUDE": -121.52166667, 
      "NWCG_GENERAL_CAUSE": "Missing data/not specified/undetermined"
    }, 
    {
      "FIRE_NAME": "0166", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.38722222, 
      "LONGITUDE": -121.79527778, 
      "NWCG_GENERAL_CAUSE": "Missing data/not specified/undetermined"
    }, 
    {
      "FIRE_NAME": "0046", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.30388889, 
      "LONGITUDE": -121.61611111, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "0047", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.30055556, 
      "LONGITUDE": -121.60083333, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "0048", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.30055556, 
      "LONGITUDE": -121.60083333, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "0049", 
      "FIRE_SIZE": 2.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.26083333, 
      "LONGITUDE": -121.50472222, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "0056", 
      "FIRE_SIZE": 0.3, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.735, 
      "LONGITUDE": -121.76861111, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "0067", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.01333333, 
      "LONGITUDE": -121.36527778, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "0074", 
      "FIRE_SIZE": 5.8, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.35472222, 
      "LONGITUDE": -121.60583333, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "0113", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.30777778, 
      "LONGITUDE": -121.57055556, 
      "NWCG_GENERAL_CAUSE": "Arson/incendiarism"
    }, 
    {
      "FIRE_NAME": "0140", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.95861111, 
      "LONGITUDE": -121.25694444, 
      "NWCG_GENERAL_CAUSE": "Missing data/not specified/undetermined"
    }, 
    {
      "FIRE_NAME": "0173", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.98111111, 
      "LONGITUDE": -121.30083333, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "0174", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.72944444, 
      "LONGITUDE": -121.78138889, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "0205", 
      "FIRE_SIZE": 1.5, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.98083333, 
      "LONGITUDE": -121.40638889, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "CALDWELL GULCH", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.49472222, 
      "LONGITUDE": -115.29194444, 
      "NWCG_GENERAL_CAUSE": "Natural"
    }, 
    {
      "FIRE_NAME": "RECLAMATION", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.36611111, 
      "LONGITUDE": -115.44888889, 
      "NWCG_GENERAL_CAUSE": "Debris and open burning"
    }, 
    {
      "FIRE_NAME": "THE BEGINNING", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.05972222, 
      "LONGITUDE": -115.92472222, 
      "NWCG_GENERAL_CAUSE": "Natural"
    }, 
    {
      "FIRE_NAME": "HARDSCRABBLE SPUR", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.22416667, 
      "LONGITUDE": -115.90277778, 
      "NWCG_GENERAL_CAUSE": "Debris and open burning"
    }, 
    {
      "FIRE_NAME": "EAST MOUNTAIN", 
      "FIRE_SIZE": 2.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.43222222, 
      "LONGITUDE": -115.90444444, 
      "NWCG_GENERAL_CAUSE": "Natural"
    }, 
    {
      "FIRE_NAME": "0231", 
      "FIRE_SIZE": 0.3, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.30111111, 
      "LONGITUDE": -120.0725, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "0149", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.27555556, 
      "LONGITUDE": -121.54444444, 
      "NWCG_GENERAL_CAUSE": "Smoking"
    }, 
    {
      "FIRE_NAME": "0165", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.50694444, 
      "LONGITUDE": -121.63027778, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "0180", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.56527778, 
      "LONGITUDE": -121.62527778, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "0189", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.53666667, 
      "LONGITUDE": -121.43416667, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "0206", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.50722222, 
      "LONGITUDE": -121.69166667, 
      "NWCG_GENERAL_CAUSE": "Smoking"
    }, 
    {
      "FIRE_NAME": "0223", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.48194444, 
      "LONGITUDE": -121.71166667, 
      "NWCG_GENERAL_CAUSE": "Smoking"
    }, 
    {
      "FIRE_NAME": "0250", 
      "FIRE_SIZE": 1.0, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.35833333, 
      "LONGITUDE": -121.59555556, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "0278", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 44.30027778, 
      "LONGITUDE": -121.56472222, 
      "NWCG_GENERAL_CAUSE": "Smoking"
    }, 
    {
      "FIRE_NAME": "0188", 
      "FIRE_SIZE": 2.2, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.68694444, 
      "LONGITUDE": -121.67916667, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "0242", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.96638889, 
      "LONGITUDE": -121.30583333, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "0300", 
      "FIRE_SIZE": 0.5, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.95861111, 
      "LONGITUDE": -121.25694444, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }, 
    {
      "FIRE_NAME": "ELK CREEK", 
      "FIRE_SIZE": 0.1, 
      "FIRE_YEAR": 2000, 
      "LATITUDE": 43.84333333, 
      "LONGITUDE": -115.83138889, 
      "NWCG_GENERAL_CAUSE": "Recreation and ceremony"
    }
  ]
/////////////////////////////////////////////////////////

//Create new layer group for all fire markers
let fireMarkers = L.layerGroup();

// Loop through the wildfire data and add markers to the map
for (let i = 0; i < wildfireData.length; i++) {
  let lat = wildfireData[i].LATITUDE;
  let lon = wildfireData[i].LONGITUDE;
  let size = wildfireData[i].FIRE_SIZE / 10;
 // let markerSize = chooseSize(size);
  let marker = L.circle([lat, lon]);
    //, {radius: markerSize
  marker.bindPopup(`<b>Fire Name:</b> ${wildfireData[i].FIRE_NAME}<br><b>Fire Year:</b> ${wildfireData[i].FIRE_YEAR}<br><b>Cause:</b> ${wildfireData[i].NWCG_GENERAL_CAUSE}`);
  fireMarkers.addLayer(marker);
};
myMap.addLayer(fireMarkers);

  //Define function to select marker size based on magnitude
  // function chooseSize(fireSize) {
  //   if (fireSize === 0) {
  //     return fireSize * 1
  //   };
  //   return fireSize * 2
  // };

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

//end of Gina's code




//creating a custom fire marker icon

var fireIcon = L.icon({
  iconUrl: 'fireicon.png',
  iconSize: [20, 30]
});

// Dropdown menu not working 
// Create a new dropdown menu for filtering by cause
let selectedCause = L.control({position: 'topright'});
selectedCause.onAdd = function(map) {
  let div = L.DomUtil.create('div', 'info legend');
  div.innerHTML = `
  <select id='cause-select' onchange='updateMap(this.value)'>
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
updateMap('');


// Define function to update the map based on the selected cause
function updateMap(selectedCause) {
  // Clear existing markers from the fireMarkers layer group
  fireMarkers.clearLayers();
  // Loop through the wildfireData array and add markers to the map based on the selected cause
  for (let i = 0; i < wildfireData.length; i++) {
    let fire = wildfireData[i];

    // Only show markers that match the selected cause
    if (selectedCause === '' || fire.NWCG_GENERAL_CAUSE === selectedCause) {
      let marker = L.marker([fire.LATITUDE, fire.LONGITUDE],{icon:fireIcon}).addTo(fireMarkers);
      marker.bindPopup('<b>' + fire.FIRE_NAME + '</b><br>Size: ' + fire.FIRE_SIZE + ' acres' + '<br>Cause: ' + fire.NWCG_GENERAL_CAUSE);
    }
  }
};



// creating a dropdown menu for filtering by year
let yearSelect = L.control({position: 'topright'});
yearSelect.onAdd = function(map) {
  let div = L.DomUtil.create('div', 'info legend');
  div.innerHTML = `
  <select id='year-select' onchange='updateMapYear(this.value)'>
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

function updateMapYear(selectedYear) {

  // Clear existing markers from the fireMarkers layer group
  fireMarkers.clearLayers();

  // Loop through the wildfireData array and add markers to the map based on the selected year
  for (let i = 0; i < wildfireData.length; i++) {
    let fire = wildfireData[i];
    selectedYear = Number(selectedYear)

    if (!selectedYear || fire.FIRE_YEAR === selectedYear) {
      let marker = L.marker([fire.LATITUDE, fire.LONGITUDE],{icon:fireIcon}).addTo(fireMarkers);
      marker.bindPopup('<b>' + fire.FIRE_NAME + '</b><br>Size: ' + fire.FIRE_SIZE + ' acres' + '<br>Cause: ' + fire.NWCG_GENERAL_CAUSE);
    }
  }
};
updateMapYear('');

