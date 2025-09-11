import styles from "./skeleton.module.css";

export function FoodItemSkeleton() {
  return (
    <div className={styles.itemContainer}>
      <div className={`${styles.skeleton} ${styles.skeletonImage}`}></div>
      <div className={styles.itemContent}>
        <div className={`${styles.skeleton} ${styles.skeletonTitle}`}></div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={`${styles.skeleton} ${styles.skeletonButton}`}></div>
      </div>
    </div>
  );
}

export function FoodDetailSkeleton() {
  return (
    <div className={styles.recipeCard}>
      <div className={`${styles.skeleton} ${styles.skeletonRecipeTitle}`}></div>
      <div className={`${styles.skeleton} ${styles.skeletonRecipeImage}`}></div>

      <div className={styles.recipeDetails}>
        <div className={`${styles.skeleton} ${styles.skeletonDetail}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonDetail}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonDetail}`}></div>
      </div>

      <div className={`${styles.skeleton} ${styles.skeletonPrice}`}></div>

      <div
        className={`${styles.skeleton} ${styles.skeletonSectionTitle}`}
      ></div>
      <div className={styles.skeletonIngredients}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`${styles.skeleton} ${styles.skeletonIngredient}`}
          ></div>
        ))}
      </div>

      <div
        className={`${styles.skeleton} ${styles.skeletonSectionTitle}`}
      ></div>
      <div className={styles.skeletonInstructions}>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`${styles.skeleton} ${styles.skeletonInstruction}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export function FoodListSkeleton({ count = 6 }) {
  return (
    <div>
      {[...Array(count)].map((_, i) => (
        <FoodItemSkeleton key={i} />
      ))}
    </div>
  );
}
