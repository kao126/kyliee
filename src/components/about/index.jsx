// Next.js
import Image from 'next/image';

// styles
import { styles } from 'src/components/about/styles.css';
import selfImage from 'public/images/about.jpg';

export function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image src={selfImage} alt='icon' className={styles.img} />
      </div>
      <div className={styles.contents}>
        <h1>
          大嶋 捷稔 <span className={styles.enName}>Oshima Kanaru</span>
        </h1>
        <div>
          <p className={styles.bold}>経歴</p>
          <p>
            神奈川県横浜市出身のweb系エンジニア。大学で国際経済学を学んだのち、営業としてICTシステムを開発/販売している会社に従事。
            <br />
            そこでIT技術に惹かれて、25才でシステムエンジニアに転職。フルスタックエンジニアとしてキャリアを再スタートし、Webアプリ設計/開発/運用/保守など、インフラからフロントサイドまで一貫して幅広く業務を経験。
          </p>
        </div>
        <div>
          <p className={styles.bold}>趣味</p>
          <p>株式投資、筋トレ、音楽探し、アニメ鑑賞、ポッドキャスト、チャレンジすること</p>
        </div>
        <div>
          <p className={styles.bold}>スキル</p>
          <div className={styles.skillWrapper}>
            <ul className={styles.skill}>
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
            <ul className={styles.skill}>
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
    </div>
  );
}
