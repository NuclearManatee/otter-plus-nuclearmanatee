import mapboxgl from 'mapbox-gl';

export default function Map({ locations }){

    mapboxgl.accessToken = ({}).PUBLIC_MAPBOX_APIKEY;

    console.log(`apikey is ${mapboxgl.accessToken}`);

    const container = "map";

    const map = new mapboxgl.Map({
        container: container,
        style: 'mapbox://styles/mapbox/dark-v10',
        center:  [ 12.567898, 55.67583 ],
        zoom: 9
    }); 

    return(<>
        <div></div>
    </>)

}