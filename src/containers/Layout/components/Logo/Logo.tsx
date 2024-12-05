import styles from './Logo.module.scss';

export const Logo = ({isWhiteMode = false} : {isWhiteMode?: boolean}) => {
  const whiteMode = isWhiteMode ? styles.whiteMode : '';

  return (
    <div className={`${styles.logo} ${whiteMode}`}>
      <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.5" cy="9" r="8" stroke="#333333" />
      </svg>
      <h3>simple</h3>
      <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="1" width="31" height="16" rx="8" stroke="#333333" />
      </svg>
      <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.5" cy="9" r="8" stroke="#333333" />
      </svg>
    </div>
  );
};
