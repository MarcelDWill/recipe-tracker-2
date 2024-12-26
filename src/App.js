import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData); // Initialize with RecipeData

  // Function to delete a recipe
  const deleteRecipe = (recipeIndex) => {
    setRecipes(recipes.filter((_, index) => index !== recipeIndex));
  };

  return (
    <div className="App">
      <header><h1 className="heading">Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate recipes={recipes} setRecipes={setRecipes} /> {/* Pass props here */}
    </div>
  );
}

export default App;
