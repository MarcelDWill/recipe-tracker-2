import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  const initialForm = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialForm });

  // Update formData when input changes
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new recipe object
    const newRecipe = {
      ...formData,
    };
    // Update the recipes state
    setRecipes([...recipes, newRecipe]);
    // Reset formData to initial values
    setFormData({ ...initialForm });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                required
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
                required
              />
            </td>
            <td className="area">
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                required
              />
            </td>
            <td className="area">
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
