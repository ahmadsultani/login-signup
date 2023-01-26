import styles from "./Checkbox.module.css";

export default function Checkbox() {
  return (
    <div className={styles.container}>
      <input className={styles.checkbox} type="checkbox" />
      <p className={styles.label}>I agree to the&nbsp;</p>
      <p className={styles.label + ' ' + styles.bold}>Terms & Condition</p>
    </div>
  );
}
