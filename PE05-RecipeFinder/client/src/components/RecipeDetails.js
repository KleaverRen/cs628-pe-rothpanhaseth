import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./RecipeDetails.css"; // Import the CSS

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (apiUrl && id) {
      axios
        .get(`${apiUrl}/api/recipes/recipes`)
        .then((res) => {
          setRecipe(res.data.find((r) => r._id === id));
        })
        .catch((error) => {
          console.error("Error fetching recipe:", error);
        });
    } else {
      console.error("API URL or ID is missing.");
    }
  }, [apiUrl, id]);

  const deleteRecipe = async () => {
    if (apiUrl) {
      await axios.delete(`${apiUrl}/api/recipes/recipes/${id}`);
      navigate("/");
    } else {
      console.error("API URL is missing");
    }
  };

  if (!recipe) return <h2 className="loading">Loading...</h2>;

  return (
    <div className="recipe-details">
      <Link to="/" className="return-link">
        Return to Recipe List
      </Link>
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <button className="delete-button" onClick={deleteRecipe}>
        Delete Recipe
      </button>
    </div>
  );
}

export default RecipeDetails;
