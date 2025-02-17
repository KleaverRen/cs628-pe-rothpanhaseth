import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCity({ onCityAdded }) {
  // Add a prop to pass data up
  const [city, setCity] = useState({ name: "", country: "", population: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.name || !city.country || !city.population) {
      alert("Please fill in all fields.");
      return;
    }

    // Call the callback function to pass the new city data up to the parent
    onCityAdded(city);

    // Clear the form
    setCity({ name: "", country: "", population: "" });

    navigate("/cities");
  };

  const handleChange = (e) => {
    setCity({ ...city, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-city-container">
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={city.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={city.country}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="population"
          placeholder="Population"
          value={city.population}
          onChange={handleChange}
          required
        />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;
