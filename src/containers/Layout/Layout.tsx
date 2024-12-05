import { ReactNode } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import styles from './Layout.module.scss';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <body className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </body>
  );
};
