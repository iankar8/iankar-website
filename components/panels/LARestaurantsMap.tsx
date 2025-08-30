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
    coordinates: [-118.4968, 34.0100], // Santa Monica Pier area
    cuisine: "Seafood",
    notes: "Fresh coastal cuisine with ocean views in Santa Monica. Perfect for beachside dining.",
    neighborhood: "Santa Monica"
  },
  {
    name: "Winston House",
    coordinates: [-118.4968, 34.0100], // Santa Monica Pier area
    cuisine: "American",
    notes: "Coastal dining and cocktails with a sophisticated beach vibe.",
    neighborhood: "Santa Monica"
  },
  {
    name: "Gjelina",
    coordinates: [-118.4650, 33.9850], // Venice Beach area
    cuisine: "Italian",
    notes: "Artisanal pizza and seasonal Italian in Venice. One of the best spots for creative Italian cuisine.",
    neighborhood: "Venice"
  },
  {
    name: "Horses",
    coordinates: [-118.3850, 34.0900], // West Hollywood
    cuisine: "American",
    notes: "Modern American with great cocktails in West Hollywood. Perfect for date night.",
    neighborhood: "West Hollywood"
  },
  {
    name: "Delilah",
    coordinates: [-118.3850, 34.0900], // West Hollywood
    cuisine: "American",
    notes: "Sophisticated dining and entertainment in West Hollywood. Great for special occasions.",
    neighborhood: "West Hollywood"
  },
  {
    name: "Lavo",
    coordinates: [-118.3850, 34.0900], // West Hollywood
    cuisine: "Italian",
    notes: "High-end Italian with nightlife in West Hollywood. Perfect for dinner and drinks.",
    neighborhood: "West Hollywood"
  },
  {
    name: "Dan Tana's",
    coordinates: [-118.3850, 34.0900], // West Hollywood
    cuisine: "Italian",
    notes: "Classic red sauce Italian joint in West Hollywood. Old-school charm and great food.",
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
          longitude: -118.4400,
          latitude: 34.0400,
          zoom: 10
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