import Item from "./Item";
export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading ingredients...</p>
      ) : food.extendedIngredients ? (
        food.extendedIngredients.map((item, idx) => (
          <Item key={idx} item={item} />
        ))
      ) : (
        <p>No ingredients available.</p>
      )}
    </div>
  );
}
