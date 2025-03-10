import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./AddRecipe.css";

function AddRecipe() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL; // Get the API URL from .env
    if (!apiUrl) {
      console.error("REACT_APP_API_URL is not defined in .env");
      return; // Stop execution if API URL is missing.
    }

    try {
      await axios.post(`${apiUrl}/api/recipes/recipes`, {
        // Use the API URL
        name,
        ingredients: ingredients.split(","),
        instructions,
      });
      navigate("/");
    } catch (error) {
      console.error("Error adding recipe:", error);
      //Handle error appropriately. For example, display an error message to the user.
    }
  };

  return (
    <div className="add-recipe-form">
      <Link to="/" className="return-link">
        Return to Recipe List
      </Link>
      <form onSubmit={handleSubmit}>
        <h2>Add Recipe</h2>
        <input
          type="text"
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddRecipe;
