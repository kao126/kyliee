'use client';
// Next.js
import Link from 'next/link';

// React.js
import { useEffect, useState } from 'react';

// hooks
import { useDateFormat } from 'src/hooks/useDateFormat';

// material-ui
import { Grid2, Typography } from '@mui/material';

// styles
import { styles } from 'src/components/blog/styles.css';
import NoImage from 'public/images/NO_IMAGE.jpg';

export function Blog() {
  const { formatDate } = useDateFormat();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch('/api/rss');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.items);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFeed();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <Grid2 container className={styles.gridContainer}>
        {articles.map((article, i) => (
          <Grid2 size={{ xs: 12, md: 6 }} className={styles.gridItem} key={i}>
            <img src={article.enclosure.url || NoImage.src} className={styles.img} alt='記事トップ画像' />
            <Typography className={styles.articleTitle}>{article.title}</Typography>
            <Typography>
              <time dateTime={`${formatDate(new Date(article.pubDate), 'yyyy-MM-dd')}`}>{formatDate(new Date(article.pubDate), 'yyyy.MM.dd')}</time>
            </Typography>
            <Link href={`${article.link}`} className={styles.link} rel='noopener noreferrer' target='_blank'>
              ＋ 本文を読む
            </Link>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}
