// Next.js
import Head from 'next/head'

// components
import { Header } from 'src/components/common/header'
import { Footer } from 'src/components/common/footer'

// styles
import styles from 'src/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <Head>
        <title>Top</title>
      </Head>
      <main className={styles.main}>
      </main>
      <Footer />
    </>
  )
}
