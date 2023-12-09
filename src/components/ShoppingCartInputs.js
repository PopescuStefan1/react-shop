import { useState } from "react";
import styles from "../styles/ShoppingCart.module.css";

function ShoppingCartInputs(props) {
  const [name, setName] = useState("");
  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const [amount, setAmount] = useState("");
  const handleAmountChange = ({ target }) => {
    setAmount(target.value);
  };

  return (
    <div className={styles.inputsContainer}>
      <div className={styles.inputsDiv}>
        <div className={styles.inputPair}>
          <label htmlFor="name">Ingredient:</label>
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Ingredient name"
            onChange={handleNameChange}
          />
        </div>
        <div className={styles.inputPair}>
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            placeholder="Amount"
            min="0"
            onChange={handleAmountChange}
          />
        </div>
      </div>
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          props.onAdd(name, amount);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default ShoppingCartInputs;
