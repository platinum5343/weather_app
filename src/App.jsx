import React, { useState } from 'react';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, NavigationControl,GeolocateControl, FullscreenControl } from "react-map-gl"
import Search from './component/searchBar/Search';
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  const [lng, setLng] = useState(54.37585762735543);
  const [lat, setLat] = useState(24.45677614934833);
  
  return (
    <div>
      <Search/>
      <div className="dray">
      <Sidebar/> 
      <Map className="map"
       mapboxAccessToken="pk.eyJ1Ijoib2xhc2NvcnAiLCJhIjoiY2xmbWJnaGJuMGFiMzQycjJhaDcwem9jbyJ9.EDVQwdzPaaxuyxzR0jskPQ"
       style={{
         width:"500px",
         height:"500px",
         borderRadius:"15px",
         border:"2px solid red"
       }}
       initialViewState={{
         longitude: lng,
         latitude: lat,
       }}
       mapStyle="mapbox://styles/mapbox/streets-v9"
       >
     <Marker
     longitude={lng}
     latitude={lat}  
     />
     <NavigationControl
     position='bottom-right'
     />
     <FullscreenControl/>
      <GeolocateControl/>
      </Map>
      </div>
    </div>
  );
}

export default App;
