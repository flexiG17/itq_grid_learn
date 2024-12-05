import Picture from './assets/picture.png';
import styles from './Product.module.scss';

export const Product = () => {
  return (
    <section className={styles.product}>
      <div className={styles.leftBlock}>
        <div className={styles.leftBlock_text}>
          <h2>
            Simple скетчбук
          </h2>
          <p>
            80 листов, твердая обложка, бумага Fabriano 200 г/м2. Подойдет и для графики и для акварели. Для самых
            смелых творческих замыслов!
          </p>
        </div>
        <button>
          <p>
            Каталог
          </p>
        </button>
      </div>
      <img src={Picture} className={styles.rightBlock} alt="picture" />
    </section>
  );
};
