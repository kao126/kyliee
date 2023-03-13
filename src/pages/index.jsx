// Next.js
import Head from 'next/head';

// React
import { useEffect, useState } from 'react';

// components
import { Header } from 'src/components/common/header';
import { Main } from 'src/components/top/main';
import { Footer } from 'src/components/common/footer';

// hooks
import { useHeaderScroll } from 'src/hooks/useHeaderScroll';

// styles
import styles from 'src/styles/Home.module.css';

export default function Home() {
  const { isHeaderActive } = useHeaderScroll();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2 * 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Top</title>
      </Head>
      {isLoading ? (
        <div className={styles.entry_loading}>
          <div className={styles.loading_border}></div>
        </div>
      ) : (
        <div className={styles.top}>
          <Header isActive={isHeaderActive} />
          <Main />
          <Footer />
        </div>
      )}
    </>
  );
}
