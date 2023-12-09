import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";

function App() {
  const [ingredients, setIngredients] = useState(new Map());

  const addIngredientsFromRecipe = (recipeIngredients) => {
    const newIngredients = new Map(ingredients);

    Array.from(recipeIngredients).forEach((ingredient) => {
      const [name, amount] = ingredient;

      if (newIngredients.has(name)) {
        const newAmount = Number(amount) + Number(newIngredients.get(name));
        newIngredients.set(name, newAmount);
      } else {
        newIngredients.set(name, Number(amount));
      }
    });
    setIngredients(newIngredients);
  };

  const updateIngredients = (newIngredients) => {
    setIngredients(newIngredients);
  };

  const removeIngredient = (name) => {
    const newIngredients = new Map(ingredients);
    newIngredients.delete(name);

    setIngredients(newIngredients);
  };

  return (
    <Router>
      <Navbar />
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recipes"
            element={<Recipes onAdd={addIngredientsFromRecipe} />}
          />
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                ingredients={ingredients}
                onUpdate={updateIngredients}
                onRemove={removeIngredient}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
