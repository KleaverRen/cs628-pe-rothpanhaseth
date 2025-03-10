import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./RecipeList.css";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Ensure apiUrl is defined before making the request.
    if (apiUrl) {
      axios
        .get(`${apiUrl}/api/recipes/recipes`) // Construct the full URL
        .then((res) => setRecipes(res.data))
        .catch((error) => {
          console.error("Error fetching recipes:", error);
          // Handle the error appropriately (e.g., display an error message)
        });
    } else {
      console.error("REACT_APP_API_URL is not defined in the .env file.");
      // Handle the missing environment variable (e.g., display an error message)
    }
  }, [apiUrl]);

  return (
    <div className="recipe-list-container">
      <h1>Recipe Finder</h1>
      <Link to="/add" className="add-recipe-link">
        Add Recipe
      </Link>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
