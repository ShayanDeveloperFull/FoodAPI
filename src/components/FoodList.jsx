import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodID }) {
  return (
    <div>
      {foodData.map((food, idx) => (
        <FoodItem key={idx} setFoodID={setFoodID} food={food} />
      ))}
    </div>
  );
}
