import { NavLink } from "react-router-dom";
import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <NavLink to="/metrics" className={styles.link}>
            Метрики
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink to="/" className={styles.link}>
            Список категорий
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink to="/search" className={styles.link}>
            Поиск по названию
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
