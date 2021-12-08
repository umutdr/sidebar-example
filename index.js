window.addEventListener('load', () => {
  initMap();
});

function openNav() {
  document.getElementById('sidebar').style.width = '250px';
  document.getElementById('mapContainer').style.marginRight = '250px';
}

function closeNav() {
  document.getElementById('sidebar').style.width = '32px';
  document.getElementById('mapContainer').style.marginRight = '32px';
}

function initMap() {
  return new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
