import styles from './Materials.module.scss';
import FirstCard from './assets/firstCard.png';
import SecondCard from './assets/secondCard.png';
import ThirdCard from './assets/thirdCard.png';
// import MainCard from './assets/mainCard.png';

export const Materials = () => {
  return (
    <section className={styles.services}>
      <div className={styles.topBlock}>
        <div className={styles.topBlock_card}>
          <img src={FirstCard} alt="first image" />
          <div className={styles.topBlock_card_text}>
            <h4>
              V.1
            </h4>
            <p>
              Результат вашего обучения
            </p>
          </div>
        </div>
        <div className={styles.topBlock_card}>
          <img src={SecondCard} alt="first image" />
          <div className={styles.topBlock_card_text}>
            <h4>
              V.1
            </h4>
            <p>
              Результат вашего обучения
            </p>
          </div>
        </div>
        <div className={styles.topBlock_card}>
          <img src={ThirdCard} alt="first image" />
          <div className={styles.topBlock_card_text}>
            <h4>
              V.1
            </h4>
            <p>
              Результат вашего обучения
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottomBlock}>
        {/*<img src={MainCard} alt="picture" className={styles.bottomBlock_image} />*/}
        <div className={styles.bottomBlock_text}>
          <h2>
            Максимальная белизна
          </h2>
          <p>
            Для повышения белизны, гладкости и мягкости в состав бумажной массы вводят белые минеральные вещества: мел, тальк, каолин и др. Эта операция называется наполнением.
            Отлив бумажного листа осуществляют на бумагоделательной машине, важнейшей частью которой является непрерывно движущаяся (как транспортер) металлическая или капроновая сетка.
          </p>
        </div>
      </div>
    </section>
  );
};
