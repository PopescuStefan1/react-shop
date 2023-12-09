import { useState } from "react";
import styles from "../styles/ShoppingCart.module.css";

function ShoppingCartList(props) {
  const [update, setUpdate] = useState(true);

  const removeIngredient = (name) => {
    props.onRemove(name);
    setUpdate(!update);
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {Array.from(props.ingredients).map((ingredient, index) => (
        <li key={index}>
          <span className={styles.shopLi}>
            {ingredient[0]} ({ingredient[1]})
            <button
              className={styles.liButton}
              onClick={() => {
                removeIngredient(ingredient[0]);
              }}
            >
              X
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ShoppingCartList;
