'use client';
// Next.js
import Link from 'next/link';

// hooks
import { useDateFormat } from 'src/hooks/useDateFormat';

// style
import { styles } from 'src/components/top/blog/styles.css';

// material-ui
import { Card, Grid2, Typography } from '@mui/material';

// images
import NoImage from 'public/images/NO_IMAGE.jpg';
import { useEffect, useState } from 'react';

export function TopBlog() {
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

  const displayArticles = articles.filter((_, i) => i <= 1);

  return (
    <div id='blog'>
      <h1 className={styles.titleWrapper}>BLOG</h1>
      <div className={styles.description}>技術に関する記事</div>
      <Grid2 container spacing={4} className={styles.gridContainer}>
        {displayArticles.map((article, i) => (
          <Grid2 size={{ xs: 12, md: 6 }} className={styles.gridItem} key={i}>
            <Card elevation={5} className={styles.card}>
              <Link href={`${article.link}`} className={styles.link}>
                <img src={article.enclosure.url || NoImage.src} className={styles.img} alt='イメージ画像' />
                <Typography className={styles.imgTitle}>{article.title}</Typography>
                <div className={styles.content}>
                  <Typography>
                    <time dateTime={`${formatDate(new Date(article.pubDate), 'yyyy-MM-dd')}`}>{formatDate(new Date(article.pubDate), 'yyyy.MM.dd')}</time>
                  </Typography>
                  <span className={styles.contentBtn}></span>
                </div>
              </Link>
            </Card>
          </Grid2>
        ))}
      </Grid2>
      <Link href={'/blog'} className={styles.viewMore}>
        VIEW MORE
      </Link>
    </div>
  );
}
