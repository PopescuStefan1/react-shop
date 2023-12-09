import styles from "../styles/Recipes.module.css";

function RecipesDetail(props) {
  const recipe = props.recipe;
  if (props.recipeIndex === null) {
    return <h1 style={{ maxWidth: 400 }}>Please select a recipe</h1>;
  }

  return (
    <div style={{ maxWidth: 400 }}>
      <img
        src={props.recipe.imgPath}
        alt={props.recipe.name}
        className={styles.detailImg}
      />
      <h3 style={{ marginBottom: 0 }}>{props.recipe.name}</h3>
      <p style={{ fontSize: "1rem" }}>{props.recipe.description}</p>
      <button
        className={styles.cartButton}
        onClick={() => {
          props.onAdd(recipe);
        }}
      >
        Add to Shopping Cart
      </button>
      <ul>
        {Array.from(props.recipe.ingredients).map((ingredient, index) => (
          <li key={index} style={{ fontSize: "1.5rem" }}>
            {ingredient[0]} - {ingredient[1]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipesDetail;
