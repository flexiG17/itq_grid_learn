import { Logo } from '../Logo';
import styles from './Footer.module.scss';
import { Link } from 'react-router';
import FacebookIcon from './assets/facebook.svg';
import InstagramIcon from './assets/instagram.svg';
import XIcon from './assets/X.svg';
import YoutubeIcon from './assets/youtube.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.container}>
          <div className={styles.topBlock}>
            <Logo isWhiteMode={true} />
            <div className={styles.topBlock_socialMedia}>
              <Link to="#">
                <img src={FacebookIcon} alt="icon" />
              </Link>
              <Link to="#">
                <img src={InstagramIcon} alt="icon" />
              </Link>
              <Link to="#">
                <img src={XIcon} alt="icon" />
              </Link>
              <Link to="#">
                <img src={YoutubeIcon} alt="icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.bottomBlock}>
          <h5>
            Simple ® 2021
          </h5>
        </div>
      </div>
    </footer>
  );
};
