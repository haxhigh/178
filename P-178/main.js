let lat = 25.7868542,lon = 75;
var img1 = document.querySelector("#amber")

mapboxgl.accessToken = "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA"
var map = new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[lon,lat],
    zoom:10
})

var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75,26])
.addTo(map)

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
)
