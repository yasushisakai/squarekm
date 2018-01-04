export function makeRectGeoJSON(lat1: number, lng1: number, lat2: number, lng2: number): object {

  return {
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
                    [lng1, lat1],
                    [lng2, lat1],
                    [lng2, lat2],
                    [lng1, lat2],
                    ],
                    type: 'LineString',
                },
                properties: {},
                type: 'Feature',
            },
            type: 'geojson',
        },
        type: 'line',
      }
}

export function latLngFromDistance(lat: number, lng: number, distance: number, rad: number) {
  const newLat = Math.asin(Math.sin(lat) * Math.cos(distance) + Math.cos(lat) * Math.sin(distance) * Math.cos(rad))

  if (Math.cos(newLat) === 0) {

  }
}
