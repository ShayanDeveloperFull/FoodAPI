import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./search.module.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({ setFoodData, setIsLoading }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchDefaultFood() {
      setIsLoading(true);
      try {
        const res = await axios.get(`${URL}?query=chicken&apiKey=${API_KEY}`);
        console.log(res.data.results);
        setFoodData(res.data.results);
      } catch (error) {
        console.error("Error fetching default food:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDefaultFood();
  }, [setFoodData, setIsLoading]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        async function fetchFood() {
          setIsLoading(true);
          try {
            const res = await axios.get(
              `${URL}?query=${query}&apiKey=${API_KEY}`
            );
            console.log(res.data.results);
            setFoodData(res.data.results);
          } catch (error) {
            console.error("Error fetching food:", error);
          } finally {
            setIsLoading(false);
          }
        }
        fetchFood();
      }
    }, 400);

    return () => clearTimeout(handler);
  }, [query, setFoodData, setIsLoading]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="What Recipe Are You Looking For?"
      />
    </div>
  );
}
