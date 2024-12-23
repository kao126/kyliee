'use client';
// Next.js
import Image from 'next/image';

// style
import styled from '@emotion/styled';
import selfImage from 'public/images/about.jpg';

export default function About() {
  return (
    <StyledMain>
      <div className='img-wrapper'>
        <Image src={selfImage} alt='icon' className='img' />
      </div>
      <div className='contents'>
        <h1>
          大嶋 捷稔 <span className='en_name'>Oshima Kanaru</span>
        </h1>
        <div>
          <p className='bold'>経歴</p>
          <p>
            神奈川県横浜市出身のweb系エンジニア。大学で国際経済学を学んだのち、営業としてICTシステムを開発/販売している会社に従事。
            <br />
            そこでIT技術に惹かれて、25才でシステムエンジニアに転職。フルスタックエンジニアとしてキャリアを再スタートし、Webアプリ設計/開発/運用/保守など、インフラからフロントサイドまで一貫して幅広く業務を経験。
          </p>
        </div>
        <div>
          <p className='bold'>趣味</p>
          <p>株式投資、筋トレ/柔軟、音楽探し、アニメ鑑賞、ポッドキャスト、様々なことにチャレンジすること</p>
        </div>
        <div>
          <p className='bold'>スキル</p>
          <div className='skill-wrapper'>
            <ul className='skill'>
              <li>
                <h5>フロントエンド</h5>
                <p>Next.js, React.js, TypeScript, Redux, Zustand</p>
              </li>
              <li>
                <h5>バックエンド</h5>
                <p>Ruby on Rails, Ruby</p>
              </li>
              <li>
                <h5>インフラ</h5>
                <p>AWS, さくらクラウド</p>
              </li>
              <li>
                <h5>データベース</h5>
                <p>Redis, Postgresql</p>
              </li>
              <li>
                <h5>CI/CD環境</h5>
                <p>AWS CodePipeline, AWS Amplify Hosting</p>
              </li>
            </ul>
            <ul className='skill'>
              <li>
                <h5>ソースコード管理</h5>
                <p>GitLab, Sourcetree</p>
              </li>
              <li>
                <h5>タスク管理</h5>
                <p>GitLab, Trello</p>
              </li>
              <li>
                <h5>コンテナ型仮想化プラットフォーム</h5>
                <p>Docker, K8s</p>
              </li>
              <li>
                <h5>開発エディタ</h5>
                <p>Cursor, Visual Studio Code</p>
              </li>
              <li>
                <h5>デザイン</h5>
                <p>Adobe illustrator, Adobe Photoshop</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledMain>
  );
}

const StyledMain = styled('main')`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  padding: 150px 40px 40px;
  .img-wrapper {
    width: 45%;
    text-align: center;
  }
  .img {
    border-radius: 50%;
  }
  .contents {
    padding: 0 4rem;
  }
  .en_name {
    font-size: 24px;
    opacity: 0.6;
  }
  .bold {
    font-weight: bold;
  }
  .skill-wrapper {
    display: flex;
    justify-content: start;
    gap: 10%;
  }
  .skill {
    list-style: circle;
    margin: 0;
    padding-left: 1.5rem;
    > li {
      :first-child {
        > h5 {
          margin-top: 0;
        }
      }
      > h5 {
        margin: 1rem 0;
      }
      > p {
        margin: 0;
        padding-left: 0.5rem;
      }
    }
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
