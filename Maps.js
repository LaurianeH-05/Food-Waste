
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
        
        
var geocoder = L.Control.geocoder({
    defaultMarkGeocode: false
}).on('markgeocode', function(e) {
    var bbox = e.geocode.bbox;
    var poly = L.polygon([
        bbox.getSouthEast(),
        bbox.getNorthEast(),
        bbox.getNorthWest(),
        bbox.getSouthWest()
    ]).addTo(map);
    map.fitBounds(poly.getBounds());
}).addTo(map);
       
document.getElementById('autocomplete').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        geocoder.options.geocoder.geocode(this.value, function(results) {
            var result = results[0];
            if (result) {
                var latLng = result.center;
                map.setView(latLng, 13);
                L.marker(latLng).addTo(map).bindPopup(result.name).openPopup();
            }
        });
    }
});

var foodBanksLayer = L.layerGroup().addTo(map);
var compostCentersLayer = L.layerGroup().addTo(map);
var foodWasteDropOffLayer = L.layerGroup().addTo(map);


L.marker([51.5, -0.09]).addTo(foodBanksLayer).bindPopup('Food Bank');
L.marker([51.51, -0.1]).addTo(compostCentersLayer).bindPopup('Composting Center');
L.marker([51.49, -0.08]).addTo(foodWasteDropOffLayer).bindPopup('Food Waste Drop-Off Point');


document.getElementById('foodBanks').addEventListener('change', function() {
    if (this.checked) {
        map.addLayer(foodBanksLayer);
    } else {
        map.removeLayer(foodBanksLayer);
    }
});

document.getElementById('compostCenters').addEventListener('change', function() {
    if (this.checked) {
        map.addLayer(compostCentersLayer);
    } else {
        map.removeLayer(compostCentersLayer);
    }
});

document.getElementById('foodWasteDrop-off').addEventListener('change', function() {
    if (this.checked) {
        map.addLayer(foodWasteDropOffLayer);
    } else {
        map.removeLayer(foodWasteDropOffLayer);
    }
});

