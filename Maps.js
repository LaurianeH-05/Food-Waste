function initMap() {
    const center = { lat: -34.397, lng: 150.644};
    const map = new
    google.maps.Map(document.getElementById("map-container"), {
        zoom: 8,
        center: center,
    });
}

function loadScript() {
    const script =
    document.createElement("script");
    script.src = "API";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

window.onload = loadScript;
