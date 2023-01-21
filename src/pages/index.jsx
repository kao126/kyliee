// Next.js
import Head from "next/head";

// components
import { Header } from "src/components/common/header";
import { Main } from "src/components/top/main";
import { Footer } from "src/components/common/footer";

// hooks
import { ref, useHeaderScroll } from "src/hooks/useHeaderScroll";

// styles
import styles from "src/styles/Home.module.css";

export default function Home() {
  const { isHeaderActive } = useHeaderScroll();

  return (
    <>
      <Head>
        <title>Top</title>
      </Head>
      <Header isActive={isHeaderActive} ref={ref} />
      <Main />
      <Footer />
    </>
  );
}
