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
 function swapStations() {
      const source = document.getElementById("source");
      const destination = document.getElementById("destination");
      [source.value, destination.value] = [destination.value, source.value];
    }

    function clearRoute() {
      document.getElementById("source").value = "";
      document.getElementById("destination").value = "";
      document.getElementById("routeDetails").innerHTML = "";
    }

    function showNearby() {
      alert("This feature will show nearby stations using location API in future updates.");}
