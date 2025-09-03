import styles from "./innerContainer.module.css";

export default function InnerContainer({ children, className }) {
  return (
    <div className={`${styles.innerContainer} ${className || ""}`}>
      {children}
    </div>
  );
}
