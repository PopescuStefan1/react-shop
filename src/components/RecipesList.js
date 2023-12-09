import styles from "../styles/Recipes.module.css";

function RecipesList(props) {
  return (
    <ul>
      {props.recipes.map((recipe, index) => (
        <li
          key={index}
          style={{ listStyle: "none" }}
          onClick={() => props.onRecipeClick(index)}
        >
          <div className={styles.recipe}>
            <div>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
            </div>
            <img
              src={recipe.imgPath}
              alt={recipe.name}
              className={styles.recipeImg}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default RecipesList;
