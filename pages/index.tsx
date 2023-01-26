import Head from 'next/head'
import styles from '@styles/Home.module.css'
import Phone from '@components/Phone'

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing Page by Blablablabl Company" />
      </Head>
      <Phone> 
        <h1>
          Welcome to Blablabla!
        </h1>
      </Phone>
    </>
  )
}
