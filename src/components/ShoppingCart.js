import { useState } from "react";
import ShoppingCartList from "./ShoppingCartList";
import ShoppingCartInputs from "./ShoppingCartInputs";

function ShoppingCart(props) {
  const [ingredients, setIngredients] = useState(props.ingredients);
  const handleAdd = (name, amount) => {
    const newIngredients = new Map(ingredients);

    if (newIngredients.has(name)) {
      const newAmount = Number(amount) + Number(newIngredients.get(name));
      newIngredients.set(name, newAmount);
    } else {
      newIngredients.set(name, Number(amount));
    }

    setIngredients(newIngredients);
  };

  return (
    <div>
      <ShoppingCartInputs onAdd={handleAdd} />
      <ShoppingCartList ingredients={ingredients} />
    </div>
  );
}

export default ShoppingCart;
