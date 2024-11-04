function MyApp({ Component, pageProps }) {
  // 以下の処理は不要
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp