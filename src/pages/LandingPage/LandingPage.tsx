import { Layout } from '../../containers/Layout';
import { Description } from './components/Description';
import { Materials } from './components/Materials';

import styles from './LandingPage.module.scss';
import { Services } from './components/Services';
import { Partners } from './components/Partners';
import { Product } from './components/Product';

export const LandingPage = () => {
  return (
    <Layout>
      <main className={styles.children}>
        <div className={styles.children_grid}>
          <div className={styles.children_grid_splitedCell}>
            <Description />
          </div>
        </div>
        <div className={`${styles.children_grid} ${styles.background_material}`}>
          <div className={styles.children_grid_splitedCell}>
            <Materials />
          </div>
        </div>
        <div className={styles.children_grid}>
          <div className={styles.children_grid_splitedCell}>
            <Services />
          </div>
        </div>
        <div className={`${styles.children_grid} ${styles.background_material}`}>
          <div className={styles.children_grid_splitedCell}>
            <Partners />
          </div>
        </div>
        <div className={styles.children_grid}>
          <div className={styles.children_grid_splitedCell}>
            <Product />
          </div>
        </div>
      </main>
    </Layout>
  );
};
