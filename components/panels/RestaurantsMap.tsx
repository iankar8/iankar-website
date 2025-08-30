'use client';

import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

type Restaurant = {
  name: string;
  coordinates: [number, number];
  cuisine: string;
  notes: string;
  neighborhood: string;
  city: string;
}

const restaurants: Restaurant[] = [
  // Miami Restaurants
  {
    name: "Faena",
    coordinates: [-80.1300, 25.7900], // Miami Beach
    cuisine: "Luxury Dining",
    notes: "Luxurious dining experience in the heart of Miami Beach. High-end cuisine with stunning ocean views.",
    neighborhood: "Miami Beach",
    city: "Miami"
  },
  {
    name: "Cote",
    coordinates: [-80.1910, 25.7610], // Miami
    cuisine: "Korean BBQ",
    notes: "Premium Korean BBQ experience in Miami. Known for their exceptional meat quality and service.",
    neighborhood: "Miami",
    city: "Miami"
  },
  {
    name: "Rao's",
    coordinates: [-80.1910, 25.7610], // Miami
    cuisine: "Italian-American",
    notes: "Classic Italian-American cuisine in Miami. Famous for their red sauce and traditional dishes.",
    neighborhood: "Miami",
    city: "Miami"
  },
  {
    name: "Uchi",
    coordinates: [-80.1910, 25.7610], // Miami
    cuisine: "Japanese",
    notes: "Innovative Japanese cuisine with a Miami twist. Exceptional sushi and creative dishes.",
    neighborhood: "Miami",
    city: "Miami"
  },
  {
    name: "Doya",
    coordinates: [-80.1910, 25.7610], // Miami
    cuisine: "Turkish",
    notes: "Modern Turkish cuisine in Miami. Fresh Mediterranean flavors with contemporary presentation.",
    neighborhood: "Miami",
    city: "Miami"
  },
  {
    name: "El Secreto",
    coordinates: [-80.1910, 25.7610], // Miami
    cuisine: "Cuban",
    notes: "Authentic Cuban cuisine in Miami. Traditional flavors and warm hospitality.",
    neighborhood: "Miami",
    city: "Miami"
  },
  // LA Restaurants
  {
    name: "Catch Steak",
    coordinates: [-118.3850, 34.0900], // West Hollywood
    cuisine: "Steakhouse",
    notes: "Premium steakhouse in LA with exceptional cuts and sophisticated atmosphere.",
    neighborhood: "West Hollywood",
    city: "Los Angeles"
  },
  {
    name: "Felix",
    coordinates: [-118.3850, 34.0900], // West Hollywood
    cuisine: "Italian",
    notes: "Authentic Italian trattoria in LA. Fresh pasta and traditional Italian dishes.",
    neighborhood: "West Hollywood",
    city: "Los Angeles"
  },
  {
    name: "Mr Chow",
    coordinates: [-118.3850, 34.0900], // West Hollywood
    cuisine: "Chinese",
    notes: "Elegant Chinese cuisine in LA. Known for their Peking duck and upscale dining experience.",
    neighborhood: "West Hollywood",
    city: "Los Angeles"
  },
  {
    name: "Ivy at the Shore",
    coordinates: [-118.4968, 34.0100], // Santa Monica
    cuisine: "California Coastal",
    notes: "Coastal California cuisine in Santa Monica. Perfect for beachside dining with ocean views.",
    neighborhood: "Santa Monica",
    city: "Los Angeles"
  },
  {
    name: "Bell's Beach House",
    coordinates: [-118.4968, 34.0100], // Santa Monica Pier area
    cuisine: "Seafood",
    notes: "Fresh coastal cuisine with ocean views in Santa Monica. Perfect for beachside dining.",
    neighborhood: "Santa Monica",
    city: "Los Angeles"
  },
  {
    name: "Winston House",
    coordinates: [-118.4968, 34.0100], // Santa Monica Pier area
    cuisine: "American",
    notes: "Coastal dining and cocktails with a sophisticated beach vibe.",
    neighborhood: "Santa Monica",
    city: "Los Angeles"
  },
  {
    name: "Gjelina",
    coordinates: [-118.4650, 33.9850], // Venice Beach area
    cuisine: "Italian",
    notes: "Artisanal pizza and seasonal Italian in Venice. One of the best spots for creative Italian cuisine.",
    neighborhood: "Venice",
    city: "Los Angeles"
  },
  {
    name: "Horses",
    coordinates: [-118.3850, 34.0900], // West Hollywood
    cuisine: "American",
    notes: "Modern American with great cocktails in West Hollywood. Perfect for date night.",
    neighborhood: "West Hollywood",
    city: "Los Angeles"
  },
  {
    name: "Delilah",
    coordinates: [-118.3850, 34.0900], // West Hollywood
    cuisine: "American",
    notes: "Sophisticated dining and entertainment in West Hollywood. Great for special occasions.",
    neighborhood: "West Hollywood",
    city: "Los Angeles"
  },
  {
    name: "Lavo",
    coordinates: [-118.3850, 34.0900], // West Hollywood
    cuisine: "Italian",
    notes: "High-end Italian with nightlife in West Hollywood. Perfect for dinner and drinks.",
    neighborhood: "West Hollywood",
    city: "Los Angeles"
  },
  {
    name: "Dan Tana's",
    coordinates: [-118.3850, 34.0900], // West Hollywood
    cuisine: "Italian",
    notes: "Classic red sauce Italian joint in West Hollywood. Old-school charm and great food.",
    neighborhood: "West Hollywood",
    city: "Los Angeles"
  }
];

export default function RestaurantsMap() {
  const [popupInfo, setPopupInfo] = useState<Restaurant | null>(null);
  const mapboxToken = "pk.eyJ1IjoiaWFua2FyIiwiYSI6ImNtZXh3aHFvMjFiNzkybHB0MHpqNW9sMjQifQ.mt-YGc9QFCyPIQ8fZROgwA";

  return (
    <div className="w-full h-96 rounded-xl overflow-hidden border border-dark/10">
      <Map
        mapboxAccessToken={mapboxToken}
        initialViewState={{
          longitude: -99.0000,
          latitude: 30.0000,
          zoom: 4
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/light-v11"
      >
        {restaurants.map((restaurant) => (
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