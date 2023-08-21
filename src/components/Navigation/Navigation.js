import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>Home</li>
        <li>My Todos</li>
      </ul>
    </nav>
  );
};
