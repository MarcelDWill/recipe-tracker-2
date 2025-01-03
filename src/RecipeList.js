import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Photo</th>
          <th>Ingredients</th>
          <th>Preparation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} index={index} deleteRecipe={deleteRecipe} />
        ))}
      </tbody>
    </table>
  );
}

export default RecipeList;
