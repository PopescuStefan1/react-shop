import ShoppingCartList from "./ShoppingCartList";
import ShoppingCartInputs from "./ShoppingCartInputs";

function ShoppingCart(props) {
  const handleAdd = (name, amount) => {
    const newIngredients = new Map(props.ingredients);

    if (newIngredients.has(name)) {
      const newAmount = Number(amount) + Number(newIngredients.get(name));
      newIngredients.set(name, newAmount);
    } else {
      newIngredients.set(name, Number(amount));
    }

    props.onUpdate(newIngredients);
  };

  const handleRemove = (name) => {
    props.onRemove(name);
  };

  return (
    <div>
      <ShoppingCartInputs onAdd={handleAdd} />
      <ShoppingCartList
        ingredients={props.ingredients}
        onRemove={handleRemove}
      />
    </div>
  );
}

export default ShoppingCart;
