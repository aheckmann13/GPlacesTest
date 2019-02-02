// Initialize Firebase
var config = {
  apiKey: "AIzaSyAacNRFRGzgHM8W0blNJyjBtMEZ23nkWpQ",
  authDomain: "travelbucket-f12cf.firebaseapp.com",
  databaseURL: "https://travelbucket-f12cf.firebaseio.com",
  projectId: "travelbucket-f12cf",
  storageBucket: "travelbucket-f12cf.appspot.com",
  messagingSenderId: "1042574383776"
};
firebase.initializeApp(config);

var database = firebase.database();

function searchBar() {
  var input = document.getElementById('initialSearchInput');
  var options = {
    types: ['(cities)'],
  };
  var autocomplete = new google.maps.places.Autocomplete(input, options);

  // var placeId = {
  //   fields: ['(place_id)'],
  // };

  request = {
    query: input,
    fields: ['place_id', 'geometry', 'icon', 'name', 'photos'],
  }
  autocomplete.setFields(
    ['place_id', 'geometry', 'icon', 'name', 'photos']);

  var service = new google.maps.places.PlacesService(document.createElement('resultsDiv'));
  service.getDetails(request, function (results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      results.forEach((item) => {
        console.log(item)
      })
      }
  });


  autocomplete.addListener('place_changed', function () {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }
    // var photos = place.getDetails();
    // if (!photos) {
    //   return;
    // }
    // service.photos[0].getURL();
  })
}

  //var tmURL = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=bAS6qJ9GjnzpjGB3vGbEXGpiwlpn1ppZ';

  //var googlePlacesURL = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=PHOTOREF&key=AIzaSyCSGl6uFr0JoT1c9RHRu369r_hdYj0eknA';

  //AccuWeather: TniUBmLQMyMOCQn9JQeefxCVZEbpTolr