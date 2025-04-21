let map, directionsService, directionsRenderer;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 28.6139, lng: 77.2090 }, // Default to New Delhi
    zoom: 12,
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
}

window.onload = initMap;

function findRoute() {
  const source = document.getElementById("source").value;
  const destination = document.getElementById("destination").value;

  if (!source || !destination) {
    alert("Please enter both source and destination.");
    return;
  }

  directionsService.route({
    origin: source,
    destination: destination,
    travelMode: google.maps.TravelMode.TRANSIT,
  }, (result, status) => {
    if (status === 'OK') {
      directionsRenderer.setDirections(result);
      displayRouteDetails(result.routes[0]);
    } else {
      alert("Unable to find route. Try different stations.");
    }
  });
}

function displayRouteDetails(route) {
  const routeDetails = document.getElementById("routeDetails");
  const legs = route.legs[0];

  routeDetails.innerHTML = `
    <h2>Route Summary</h2>
    <p><strong>From:</strong> ${legs.start_address}</p>
    <p><strong>To:</strong> ${legs.end_address}</p>
    <p><strong>Duration:</strong> ${legs.duration.text}</p>
    <p><strong>Distance:</strong> ${legs.distance.text}</p>
  `;
}
