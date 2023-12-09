// import styles from "../styles/ShoppingCart.module.css";

function ShoppingCartList(props) {
  return (
    <ul>
      {Array.from(props.ingredients).map((ingredient, index) => (
        <li key={index}>
          {ingredient[0]} ({ingredient[1]})
        </li>
      ))}
    </ul>
  );
}

export default ShoppingCartList;
