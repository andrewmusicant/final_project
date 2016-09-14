var map;
var geocoder = new google.maps.Geocoder();
var service;

$('#address').keypress(function(e) {
  if (e.which == 13) {
    codeAddress();
    return false;
  }
})

function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      latitude = results[0].geometry.location.lat();
      longitude = results[0].geometry.location.lng();
      getListOfBanks(latitude, longitude);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function getListOfBanks(latitude, longitude) {
  var locationOfBanks = new google.maps.LatLng(latitude, longitude);

  map = new google.maps.Map(document.createElement('div'));

  var request = {
    location: locationOfBanks,
    radius: '30000',
    types: ['bank']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  var bankArray = [];
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      bankArray.push(results[i].name);
    }
    postBankList(bankArray);
  }
}
// getListOfBanks(35.9981205, -78.89204440000003);

function postBankList(bankArray) {
  $.ajax({
    url: '/',
    type: 'POST',
    data: {bankArray: bankArray},
    success: function(response) {
      window.location.replace("/location");
    },
    error: function(e) {
      console.log(e)
    }
  });
}
