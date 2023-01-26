import Image from 'next/image'
import styles from './ProfileButton.module.css'

export default function ProfileButton() {
  return (
    <>
      <div className={styles.container}>
        <Image src="/profile-default.svg" alt="profile" width={80} height={80} />
        <button className={styles.btn}>
          <Image src="/button-add.svg" alt="add" width={25} height={25} />
        </button>
      </div>
    </>
  )
}
