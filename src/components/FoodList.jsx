import FoodItem from "./FoodItem";
import { FoodListSkeleton } from "./SkeletonLoader";

export default function FoodList({ foodData, setFoodID, isLoading }) {
  if (isLoading) {
    return <FoodListSkeleton count={6} />;
  }

  return (
    <div>
      {foodData.map((food, idx) => (
        <FoodItem key={idx} setFoodID={setFoodID} food={food} />
      ))}
    </div>
  );
}
