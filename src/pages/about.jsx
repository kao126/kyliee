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
            <p>
              趣味 / 最近ハマっていること <span className='en_name'>What I am into</span>
            </p>
            <p>音楽探し、ジムでの筋トレと柔軟、アニメ鑑賞、ポッドキャストを聴きながら散歩すること</p>
          </div>
          <div>
            <p>
              経歴　<span className='en_name'>Career</span>
            </p>
            <p>2020年4月~ 営業</p>
          </div>
          <div>
            <p>
              スキル <span className='en_name'>Skill</span>
            </p>
            <p>HTML CSS React(Redux) / Ruby on Rails(Ruby) AWS</p>
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
`;
