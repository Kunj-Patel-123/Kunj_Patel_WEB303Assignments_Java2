/*
    Assignment #4
    Name : Kunj Patel
    SNum : 0828761
    Date : 2023-10-12
*/
$(function () {
  // Check if geolocation is supported by the browser
  if (!navigator.geolocation) {
    // Display a message if geolocation is not supported
    document.getElementById('locationhere').textContent = "Your browser does not support geolocation.";
    return;
  }

  // Function to display the user's current location
  function showLocation(position) {
    const currentLatitude = position.coords.latitude;
    const currentLongitude = position.coords.longitude;

    // Display the current latitude and longitude
    document.getElementById('locationhere').textContent = `Latitude: ${currentLatitude} °, Longitude: ${currentLongitude} °`;

    try {
      // Retrieve the stored location from local storage
      const storedLocation = JSON.parse(localStorage.getItem('location'));

      if (storedLocation) {
        // Calculate the distance between the current location and the stored location
        const distance = calcDistanceBetweenPoints(currentLatitude, currentLongitude, storedLocation.latitude, storedLocation.longitude);

        // Create elements to display the previous location and distance
        const oldLocationElement = document.createElement('p');
        oldLocationElement.textContent = `Previous Latitude: ${storedLocation.latitude} °, Previous Longitude: ${storedLocation.longitude} °`;

        const welcomeBackHeader = document.createElement('h3');
        welcomeBackHeader.textContent = 'Welcome back!';

        const distanceElement = document.createElement('p');
        distanceElement.textContent = `You've traveled ${distance.toFixed(2)} meters since your last visit.`;

        // Add the elements to the DOM
        const parentElement = document.getElementById('locationhere').parentNode;
        parentElement.appendChild(oldLocationElement);
        parentElement.appendChild(welcomeBackHeader);
        parentElement.appendChild(distanceElement);
      } else {
        // Display a welcome message for the first-time user
        const firstTimeHeader = document.createElement('h3');
        firstTimeHeader.textContent = "Welcome for the first time!";
        document.getElementById('locationhere').parentNode.appendChild(firstTimeHeader);
      }

      // Store the current location in local storage
      localStorage.setItem('location', JSON.stringify({ latitude: currentLatitude, longitude: currentLongitude }));
    } catch (e) {
      // Handle errors related to local storage
      console.error("An error occurred while accessing or manipulating localStorage:", e);
    }
  }

  // Function to handle geolocation errors
  function showError() {
    // Display an error message when geolocation access is not granted
    document.getElementById('locationhere').textContent = "To use this application, you need to allow geolocation access.";
  }

  // Request the user's current location
  navigator.geolocation.getCurrentPosition(showLocation, showError);

  // Provided function to calculate the distance between two points on the Earth's surface
  function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
    const toRadians = function (num) {
      return num * Math.PI / 180;
    }
    const earthRadius = 6371000; // Earth's radius in meters
    const φ1 = toRadians(lat1);
    const φ2 = toRadians(lat2);
    const Δφ = toRadians(lat2 - lat1);
    const Δλ = toRadians(lon2 - lon1);

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Return the calculated distance in meters
    return (earthRadius * c);
  }
});
