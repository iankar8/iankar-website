'use client';

import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

type LARestaurant = {
  name: string;
  coordinates: [number, number];
  cuisine: string;
  notes: string;
  neighborhood: string;
}

const laRestaurants: LARestaurant[] = [
  {
    name: "Bell's Beach House",
    coordinates: [-118.4912, 34.0736], // Santa Monica
    cuisine: "Seafood",
    notes: "Fresh coastal cuisine with ocean views",
    neighborhood: "Santa Monica"
  },
  {
    name: "Winston House",
    coordinates: [-118.4912, 34.0736], // Santa Monica
    cuisine: "American",
    notes: "Coastal dining and cocktails",
    neighborhood: "Santa Monica"
  },
  {
    name: "Gjelina",
    coordinates: [-118.4912, 34.0736], // Venice
    cuisine: "Italian",
    notes: "Artisanal pizza and seasonal Italian",
    neighborhood: "Venice"
  },
  {
    name: "Horses",
    coordinates: [-118.4912, 34.0736], // West Hollywood
    cuisine: "American",
    notes: "Modern American with great cocktails",
    neighborhood: "West Hollywood"
  },
  {
    name: "Delilah",
    coordinates: [-118.4912, 34.0736], // West Hollywood
    cuisine: "American",
    notes: "Sophisticated dining and entertainment",
    neighborhood: "West Hollywood"
  },
  {
    name: "Lavo",
    coordinates: [-118.4912, 34.0736], // West Hollywood
    cuisine: "Italian",
    notes: "High-end Italian with nightlife",
    neighborhood: "West Hollywood"
  },
  {
    name: "Dan Tana's",
    coordinates: [-118.4912, 34.0736], // West Hollywood
    cuisine: "Italian",
    notes: "Classic red sauce Italian joint",
    neighborhood: "West Hollywood"
  }
];

export default function LARestaurantsMap() {
  const [popupInfo, setPopupInfo] = useState<LARestaurant | null>(null);
  const mapboxToken = "pk.eyJ1IjoiaWFua2FyIiwiYSI6ImNtZXh3aHFvMjFiNzkybHB0MHpqNW9sMjQifQ.mt-YGc9QFCyPIQ8fZROgwA";

  return (
    <div className="w-full h-96 rounded-xl overflow-hidden border border-dark/10">
      <Map
        mapboxAccessToken={mapboxToken}
        initialViewState={{
          longitude: -118.4912,
          latitude: 34.0736,
          zoom: 11
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/light-v11"
      >
        {laRestaurants.map((restaurant) => (
          <Marker
            key={restaurant.name}
            longitude={restaurant.coordinates[0]}
            latitude={restaurant.coordinates[1]}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupInfo(restaurant);
            }}
          >
            <div className="w-6 h-6 bg-dark text-cream rounded-full flex items-center justify-center text-xs font-bold cursor-pointer hover:scale-110 transition-transform">
              🍽️
            </div>
          </Marker>
        ))}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.coordinates[0]}
            latitude={popupInfo.coordinates[1]}
            onClose={() => setPopupInfo(null)}
            className="custom-popup"
          >
            <div className="p-3 max-w-xs">
              <h3 className="font-bold text-dark mb-1">{popupInfo.name}</h3>
              <p className="text-sm text-dark/70 mb-2">{popupInfo.cuisine} • {popupInfo.neighborhood}</p>
              <p className="text-sm text-dark/80">{popupInfo.notes}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
} 