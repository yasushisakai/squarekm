
const map: L.Map = new L.Map('main')
map.setView(new L.LatLng(42.3549941, -71.1053387), 12)

const accessToken = 'pk.eyJ1IjoieWFzdXNoaXNha2FpIiwiYSI6ImNpdThwajN1ZTAwNjUzM28weHRuMnJ4a2kifQ.ooHi0pGR-SdDraWzTRCoVA'

const tileURL = `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${accessToken}`
const attribution = `mapbox, openstreetmaps`

const tileLayer = new L.TileLayer(tileURL, {
  accessToken,
  attribution,
  id : 'mapbox.streets',
  maxZoom: 18,
});

tileLayer.addTo(map)

let rect: L.Rectangle

function updateSquare() {

  const circle = new L.Circle(map.getCenter(), 500)
  circle.addTo(map)
  const bound: L.LatLngBounds = circle.getBounds()

  console.log(bound.toBBoxString())

  rect = new L.Rectangle(bound)
  circle.removeFrom(map)

  rect.addTo(map)

}

map.on('moveend', () => {
  rect.removeFrom(map);
  updateSquare()
})

updateSquare()
