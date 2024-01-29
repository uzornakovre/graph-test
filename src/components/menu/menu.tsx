import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <button className={styles.button}>Метрики</button>
        </li>
        <li className={styles.list_item}>
          <button className={styles.button}>Список категорий</button>
        </li>
        <li className={styles.list_item}>
          <button className={styles.button}>Поиск по названию</button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
