import MainPicture from './assets/background.png';
import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftBlock}>
        <h1>
          Простые вещи.<br /> Из бумаги
        </h1>
        <div>
          <p>
            Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал
            с
            минеральными добавками.
          </p>
        </div>
        <button>
          <p>
            Каталог
          </p>
        </button>
      </div>
      <img src={MainPicture} alt="picture" className={styles.rightBlock} />
    </section>
  );
};
