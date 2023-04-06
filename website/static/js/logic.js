

var apiURL = "http://localhost:8000/api/v1.0/fires"



function handleData(receivedData){


	console.log(receivedData)

}

// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json(apiURL).then(handleData);
