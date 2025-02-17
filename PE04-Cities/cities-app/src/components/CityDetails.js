// import React from "react";
// import { useParams } from "react-router-dom";

// function CityDetails() {
//   const { cityId } = useParams();
//   const cities = [
//     // Replace with data fetching later
//     { id: 1, name: "Seattle", country: "USA", population: 733919 },
//     { id: 2, name: "New York", country: "USA", population: 8398748 },
//     // ... more cities
//   ];

//   const city = cities.find((city) => city.id === parseInt(cityId)); // Find the selected city

//   if (!city) {
//     return <p>City not found.</p>;
//   }

//   return (
//     <div className="city-details-container">
//       <h2>{city.name} Details</h2>
//       <p>Country: {city.country}</p>
//       <p>Population: {city.population}</p>
//       {/* ... other details */}
//     </div>
//   );
// }

// export default CityDetails;

import React from "react";
import { useParams } from "react-router-dom";

function CityDetails({ cities }) {
  // Receive cities as a prop
  const { cityId } = useParams();
  const city = cities.find((city) => city.id === parseInt(cityId));

  if (!city) {
    return <p>City not found.</p>;
  }

  return (
    <div className="city-details-container">
      <h2>{city.name} Details</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
}

export default CityDetails;
