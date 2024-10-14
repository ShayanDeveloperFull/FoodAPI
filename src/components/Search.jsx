import { useEffect, useState } from "react";
import styles from "./search.module.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pie");
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        async function fetchFood() {
          const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
          const data = await res.json();
          console.log(data.results);
          setFoodData(data.results);
        }
        fetchFood();
      }
    }, 400);

    return () => clearTimeout(handler);
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="What Do You Want To Make?"
      />
    </div>
  );
}
