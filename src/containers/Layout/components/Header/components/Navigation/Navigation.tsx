import styles from './Navigation.module.scss';
import SearchIcon from './assets/search.svg';
import LoginIcon from './assets/login.svg';
import { Link } from 'react-router';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link to='#' className={styles.navigation_link}>
        <h3>Продукция</h3>
      </Link>
      <Link to='#' className={styles.navigation_link}>
        <h3>Материалы</h3>
      </Link>
      <Link to='#' className={styles.navigation_link}>
        <h3>О нас</h3>
      </Link>
      <Link to='#' className={styles.navigation_link}>
        <h3>Контакты</h3>
      </Link>
      <div className={styles.navigation_actions}>
        <img src={SearchIcon} alt="icon" />
        <img src={LoginIcon} alt="icon" />
      </div>
    </nav>
  );
};
