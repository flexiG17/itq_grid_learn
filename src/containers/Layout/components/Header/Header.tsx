import styles from './Header.module.scss';
import { Logo } from '../Logo';
import { Navigation } from './components/Navigation';

export const Header = () => {
  return (
    <header className={styles.grid}>
      <div className={styles.header}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
