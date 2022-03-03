import {useState, useEffect, useRef} from "react";
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = import.meta.env.PUBLIC_MAPBOX_APIKEY;

export default function Map(){

    const mapContainer = useRef(null);
    const map = useRef(null);
    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            attributionControl: false,
            style: 'mapbox://styles/mapbox/satellite-streets-v11',
            center: [ 9.19832095221738, 44.97830887789329 ],
            zoom: 12
        });
        new mapboxgl.Marker({
            color: '#800020'
        }).setLngLat([ 9.185690377547964, 44.980376549848195 ]).addTo(map.current);
        new mapboxgl.Marker({
            color: '#800020'
        }).setLngLat([ 9.21182947089001, 44.978672177686974 ]).addTo(map.current);
    });
    
    return (
        <div ref={mapContainer} className="map" />
    );

}