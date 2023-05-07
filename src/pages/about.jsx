import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

// style
// import "../styles/globals.css";
import styles from 'src/styles/Home.module.css';

// components
import { Header } from 'src/components/common/header';
import { Footer } from 'src/components/common/footer';
import styled from '@emotion/styled';

import selfImage from 'public/images/default-image.jpg';

const inter = Inter({ subsets: ['latin'] });

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <StyledMain>
        {/* スキルについて記載したい。 使用歴と言語 あとは、趣味 経歴 */}
        <Image src={selfImage} alt='icon' className='img' />
        <div className='contents'>
          <h1>
            大嶋 捷稔 <span className='en_name'>Kanaru Oshima</span>
          </h1>
          <div>
            <p className='bold'>経歴</p>
            <p>
              神奈川県横浜市出身のエンジニア。大学で国際経済学を学んだのち、ICTシステムを開発/販売している会社で営業に従事。その後ITの技術に惹かれ、25才でシステムエンジニアへ転職。事業会社のフルスタックエンジニアとしてキャリアをスタートし、React(Redux),Ruby
              on Rails,AWS(EC2,S3等)を用いたWebアプリ開発/保守/運用など、インフラからフロントサイドまで幅広く業務を経験してきました。
            </p>
          </div>
          {/* <div>
            <p className='bold'>経歴</p>
            <p>2022年3月末 営業</p>
            <p>2022年4月~9月 プログラミングスクール & 転職活動</p>
            <p>2022年10月~ 事業会社 フルスタックエンジニア（現職）</p>
          </div> */}
          <div>
            <p className='bold'>趣味</p>
            <p>音楽探し、ジムでの筋トレと柔軟、アニメ鑑賞、ポッドキャストを聴きながら散歩すること</p>
          </div>
          <div>
            <p className='bold'>スキル</p>
            <p>React(Redux), Ruby on Rails(Ruby), AWS, HTML5, CSS3 </p>
            <p>グラフで書こうかな（習得度などを表せるように）</p>
          </div>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled('main')`
  display: flex;
  width: 100%;
  padding-top: 150px;
  .img {
    width: 50%;
    height: auto;
  }
  .contents {
    width: 50%;
  }
  .en_name {
    font-size: 24px;
    opacity: 0.6;
  }
  .bold {
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    display: inherit;
    padding-top: 80px;
    text-align: center;
    .img {
      width: 80%;
    }
    .contents {
      width: 70%;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 428px) {
    display: inherit;
    padding-top: 80px;
    .img {
      width: 100%;
    }
    .contents {
      width: 80%;
      margin: 0 auto;
    }
    .en_name {
      display: block;
    }
  }
`;
