import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGd0Z25kIiwiYSI6ImNrdmxvYnF5ZDM3MGcydXFpenB1ZWp2YXoifQ.nsmEJW8g6WXT00bCGuG14g';

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
    center: [-99.29011, 39.39172],
    zoom: 3,
  });
});

  return (
    <Wrapper id="map">
      
    </Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
  flex-1
`