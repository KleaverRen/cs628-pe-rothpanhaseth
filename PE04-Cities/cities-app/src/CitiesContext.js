import React, { createContext, useState } from "react";

export const CitiesContext = createContext();

export const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([
    { id: 1, name: "Seattle", country: "USA", population: 750000 },
    { id: 2, name: "Tokyo", country: "Japan", population: 14000000 },
  ]);

  const addCity = (city) => {
    setCities([...cities, { ...city, id: cities.length + 1 }]);
  };

  return (
    <CitiesContext.Provider value={{ cities, addCity }}>
      {children}
    </CitiesContext.Provider>
  );
};
