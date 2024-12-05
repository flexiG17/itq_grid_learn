import styles from './Services.module.scss';
import { Link } from 'react-router';

export const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.card}>
        <div className={styles.card_image} />
        <div className={styles.card_text}>
          <h3>
            Упаковка
          </h3>
          <p className={styles.card_text_more}>
            Тираж: от 50 штук
          </p>
          <p className={styles.card_text_descriptopn}>
            Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.
          </p>
          <Link to="#" className={styles.card_text_link}>
            Подробнее
          </Link>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.card_image} />
        <div className={styles.card_text}>
          <h3>
            Пакеты
          </h3>
          <p className={styles.card_text_more}>
            Тираж: от 200 штук
          </p>
          <p className={styles.card_text_descriptopn}>
            С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.          </p>
          <Link to="#" className={styles.card_text_link}>
            Подробнее
          </Link>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.card_image} />
        <div className={styles.card_text}>
          <h3>
            Кейсы
          </h3>
          <p className={styles.card_text_more}>
            Тираж: от 30 штук
          </p>
          <p className={styles.card_text_descriptopn}>
            Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.
          </p>
          <Link to="#" className={styles.card_text_link}>
            Подробнее
          </Link>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.card_image} />
        <div className={styles.card_text}>
          <h3>
            Другие изделия
          </h3>
          <p className={styles.card_text_more}>
            Тираж: от 100 штук
          </p>
          <p className={styles.card_text_descriptopn}>
            Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки.
          </p>
          <Link to="#" className={styles.card_text_link}>
            Подробнее
          </Link>
        </div>
      </div>
    </section>
  );
};
