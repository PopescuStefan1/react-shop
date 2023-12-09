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
    console.log(newIngredients);
    setIngredients(newIngredients);
  };

  return (
    <Router>
      <div>
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
              element={<ShoppingCart ingredients={ingredients} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
