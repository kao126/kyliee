// Next.js
import Head from 'next/head'

// components
import { Header } from 'src/components/common/header'
import { Main } from 'src/components/top/main'
import { Footer } from 'src/components/common/footer'

// styles
import styles from 'src/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Top</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
