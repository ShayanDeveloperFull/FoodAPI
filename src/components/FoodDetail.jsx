import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";
import { FoodDetailSkeleton } from "./SkeletonLoader";

export default function FoodDetail({ foodID }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchFood() {
      setIsLoading(true);
      try {
        const res = await axios.get(`${URL}?apiKey=${API_KEY}`);
        console.log(res.data);
        setFood(res.data);
      } catch (error) {
        console.error("Error fetching food details:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFood();
  }, [foodID]);
  return (
    <div>
      {isLoading ? (
        <FoodDetailSkeleton />
      ) : (
        <div className={styles.recipeCard}>
          <h1 className={styles.recipeName}>{food.title}</h1>

          <img className={styles.recipeImage} src={food.image} alt="" />
          <div className={styles.recipeDetails}>
            <span>
              <strong>🕜{food.readyInMinutes} Minutes</strong>
            </span>

            <strong>
              <p>🧑Serves {food.servings}</p>
            </strong>

            {food.vegetarian ? "🥦Vegetarian" : "🍖 Non-Vegetarian"}
          </div>
          <div>
            💲
            <span> {(food.pricePerServing / 100).toFixed(2)}/serving</span>
          </div>

          <h2>Ingredients</h2>
          <ItemList food={food} isLoading={isLoading} />

          <h2>Instructions</h2>
          <div className={styles.recipeInstructions}>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <ol>
                {food.analyzedInstructions[0].steps.map((step, idx) => (
                  <li key={idx}>{step.step}</li>
                ))}
              </ol>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
