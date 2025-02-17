import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import CitiesList from "./components/CitiesList";
import AddCity from "./components/AddCity";
import CityDetails from "./components/CityDetails";
import "./App.css";

function App() {
  const [cities, setCities] = useState([
    // Initialize cities state here
    { id: 1, name: "Seattle", country: "USA", population: 733919 },
    { id: 2, name: "New York", country: "USA", population: 8398748 },
  ]);

  const handleCityAdded = (newCity) => {
    const nextId = cities.length > 0 ? cities[cities.length - 1].id + 1 : 1;
    setCities([...cities, { ...newCity, id: nextId }]);
  };

  return (
    <Router>
      <div className="app-container">
        <h1>Cities Application</h1>
        <div className="navigation">
          <button>
            <NavLink to="/cities">Cities List</NavLink>
          </button>
          <button>
            <NavLink to="/add">Add City</NavLink>
          </button>
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/cities" />} />
          <Route path="/cities" element={<CitiesList cities={cities} />}>
            <Route path=":cityId" element={<CityDetails cities={cities} />} />
          </Route>
          <Route
            path="/add"
            element={<AddCity onCityAdded={handleCityAdded} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
