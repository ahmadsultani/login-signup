import styles from './Phone.module.css'

interface PhoneProps {
  children: React.ReactNode
}

export default function Phone({ children } : PhoneProps) {
  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}
