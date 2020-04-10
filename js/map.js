// Initialize the platform object:
var platform = new H.service.Platform({
  apikey: "C7c9ZZ8z3DhsM2Yk5GMoLlsIInJQPtWhKxxC31_d9q8",
});

// Get the default map types from the Platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate the map:
var map = new H.Map(
  document.getElementById("mapContainer"),
  defaultLayers.vector.normal.map,
  {
    zoom: 10,
    center: { lng: 13.4, lat: 52.51 },
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
