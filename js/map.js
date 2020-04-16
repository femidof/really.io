// Initialize the platform object:
const platform = new H.service.Platform({
  apikey: "C7c9ZZ8z3DhsM2Yk5GMoLlsIInJQPtWhKxxC31_d9q8",
});

// Get the default map types from the Platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate the map:
var map = new H.Map(
  document.getElementById("mapContainer"),
  defaultLayers.vector.normal.map,
  {
    zoom: 12,
    center: { 
      // lng: 13.4, 
      // lat: 52.51 ,
      lng: -121.9,
      lat: 37.3, 
    },
  }
);

// Create the default UI:
var ui = H.ui.UI.createDefault(map, defaultLayers);
var mapSettings = ui.getControl("mapsettings");
var zoom = ui.getControl("zoom");
var scalebar = ui.getControl("scalebar");
//   mapSettings.setAlignment("top-left");
//   zoom.setAlignment("top-left");
//   scalebar.setAlignment("top-left");

var mapEvents = new H.mapevents.MapEvents(map);

// Add event listener:
map.addEventListener("tap", function (evt) {
  // Log 'tap' and 'mouse' events:
  console.log(evt.type, evt.currentPointer.type);
});
// Instantiate the default behavior, providing the mapEvents object:
var behavior = new H.mapevents.Behavior(mapEvents);


// list of address for marking on the map


// Get an instance of the geocoding service:
var service = platform.getSearchService();

// Call the geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):


//loop tru the info and use the address as q(query), then add event listener and show more details
service.geocode({
  q: '200 S Mathilda Ave, Sunnyvale, CA'
}, (result) => {
  // Add a marker for each location found
  result.items.forEach((item) => {
    map.addObject(new H.map.Marker(item.position));
  });
}, alert);
service.geocode({
  q: 'Dumbarthon Circle, Fremont, CA'
}, (result) => {
  // Add a marker for each location found
  result.items.forEach((item) => {
    map.addObject(new H.map.Marker(item.position));
  });
}, alert);


// var ui = new H.ui.UI.createDefault(map, defaultLayers);
// marker.setData("<p>Hello People</p>");

