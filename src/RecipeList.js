import React from "react";
import Recipe from "./Recipe";

function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
 const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    );
  };
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th className="area">Ingredients</th>
            <th className="area">Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="content_row">
          <EachRecipe deleteRecipe={deleteRecipe} recipes={recipes} />
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
