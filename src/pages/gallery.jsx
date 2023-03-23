import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

// style
// import "../styles/globals.css";
import styles from 'src/styles/Home.module.css';

// components
import { Header } from 'src/components/common/header';
import { Footer } from 'src/components/common/footer';

const inter = Inter({ subsets: ['latin'] });

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <Header />
      <main></main>
      <Footer />
    </>
  );
}
