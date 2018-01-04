import * as mapboxgl from 'mapbox-gl'

(mapboxgl as any).accessToken = 'pk.eyJ1IjoieWFzdXNoaXNha2FpIiwiYSI6ImNpdThwajN1ZTAwNjUzM28weHRuMnJ4a2kifQ.ooHi0pGR-SdDraWzTRCoVA'

const map: mapboxgl.Map = new mapboxgl.Map(
  {
    center: new mapboxgl.LngLat(-71.08, 42.36054),
    container: 'main',
    hash: true,
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 15,
  },
)

map.on('load', () => {

    map.addLayer({
        id: 'route',
        layout: {
            'line-cap': 'round',
            'line-join': 'round',
        },
        paint: {
            'line-color': '#888',
            'line-width': 8,
        },
        source: {
            data: {
                geometry: {
                  coordinates: [
                    [-71.18, 42.36054],
                    [-71.18, 42.37054],
                    [-71.08, 42.36054],
                    [-71.08, 42.37054],
                    ],
                    type: 'LineString',
                },
                properties: {},
                type: 'Feature',
            },
            type: 'geojson',
        },
        type: 'line',
      })

    console.log('i loaded')
})

map.on('dragend', () => {
  map.getCenter()
})

function
