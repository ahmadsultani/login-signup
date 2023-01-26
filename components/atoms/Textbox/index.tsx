import styles from './Textbox.module.css';

interface TextboxProps {
  title: string,
  type?: string
}

export default function Textbox({ title, type="text" }: TextboxProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{title}</label>
      <input className={styles.input} type={type} />
    </div>
  )
}
