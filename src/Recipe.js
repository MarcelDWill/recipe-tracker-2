import React from "react";

function Recipe({ recipe, index, deleteRecipe }) {
  const deleteHandler = () => deleteRecipe(index);

  // Check if the recipe object is defined
  if (!recipe) {
    return (
      <tr>
        <td colSpan="6">No recipe data available</td>
      </tr>
    );
  }

  return (
    <tr>
      <td className="content_td"><p>{recipe.name}</p></td>
      <td className="content_td"><p>{recipe.cuisine}</p></td>
      <td className="content_td">
        <img src={recipe.photo} alt={`Photo of ${recipe.name}`} />
      </td>
      <td className="content_td"><p>{recipe.ingredients}</p></td> {/* Directly display ingredients */}
      <td className="content_td"><p>{recipe.preparation}</p></td>
      <td>
        <button name="delete" onClick={deleteHandler}>Delete</button>
      </td>
    </tr>
  );
}

export default Recipe;
