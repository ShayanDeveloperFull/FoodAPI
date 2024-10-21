import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./search.module.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pie");
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        async function fetchFood() {
          const res = await axios.get(
            `${URL}?query=${query}&apiKey=${API_KEY}`
          );
          console.log(res.data.results);
          setFoodData(res.data.results);
        }
        fetchFood();
      }
    }, 400);

    return () => clearTimeout(handler); // Clean up the timeout
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
