import { useState } from "react";
import RecipesDetail from "./RecipesDetail";
import RecipesList from "./RecipesList";
import styles from "../styles/Recipes.module.css";
import { recipes } from "../recipe-list";

function Recipes(props) {
  const [recipeIndex, setRecipeIndex] = useState(null);

  const handleRecipeClick = (index) => {
    setRecipeIndex(index);
  };

  const addRecipeToCart = (recipe) => {
    props.onAdd(recipe.ingredients);
  };

  return (
    <div className={styles.container}>
      <RecipesList recipes={recipes} onRecipeClick={handleRecipeClick} />
      <RecipesDetail
        recipe={recipes[recipeIndex]}
        recipeIndex={recipeIndex}
        onAdd={addRecipeToCart}
      />
    </div>
  );
}

export default Recipes;
