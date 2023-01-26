import styles from "./AuthBackButton.module.css";

export default function AuthBackButton() {
  return (
    <button className={styles.btn}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="10" fill="#0D2841" />
        <path
          d="M29.3335 21.5C30.1619 21.5 30.8335 20.8284 30.8335 20C30.8335 19.1716 30.1619 18.5 29.3335 18.5V21.5ZM10.2728 18.9393C9.68705 19.5251 9.68705 20.4749 10.2728 21.0607L19.8188 30.6066C20.4046 31.1924 21.3543 31.1924 21.9401 30.6066C22.5259 30.0208 22.5259 29.0711 21.9401 28.4853L13.4548 20L21.9401 11.5147C22.5259 10.9289 22.5259 9.97919 21.9401 9.3934C21.3543 8.80761 20.4046 8.80761 19.8188 9.3934L10.2728 18.9393ZM29.3335 18.5L11.3335 18.5V21.5L29.3335 21.5V18.5Z"
          fill="#F5F5F5"
        />
      </svg>
    </button>
  );
}
