'use client';
// React.js
import { useState } from 'react';

// components
import GalleryModal from 'src/components/gallery/galleryModal';

// material-ui
import { Box, Grid2 } from '@mui/material';

// styles
import { styles } from 'src/components/gallery/style.css';

// images
import NoImage from 'public/images/NO_IMAGE.jpg';

const galleryDataLists = [
  {
    id: 1,
    title: 'Kn_Bn',
    explanation: 'This is ToDo management app. You can manage your tasks on the Kanban Board for free. You will see how your tasks progress.',
    language: 'Next.js _ 14.2.4 \n react _ 18.3.1 \n typescript _ 5.5.3',
    url: 'https://kn-bn.vercel.app/',
    github: 'https://github.com/kao126/Kn_Bn',
  },
  {
    id: 2,
    title: 'title',
    explanation:
      'サイト説明。Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus aliquam, praesentium error itaque incidunt mollitia placeat porro, pariatur eveniet fugit dolore dolorum! Aperiam cupiditate libero minus omnis dicta! Veniam, dolor.',
    language: 'Ruby on Rails, HTML/CSS(SASS), Bulma, jQuery, Sqlite（開発）, Postgresql（本番）, Heroku, SendGrid',
    url: 'https://kyliee.vercel.app/',
    github: 'https://github.com/kao126/kyliee',
  },
];

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [galleryData, setGalleryData] = useState(null);
  const handleModal = (dataId) => {
    const targetGalleryData = galleryDataLists.find((data) => data.id === dataId);
    setGalleryData(targetGalleryData);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Galley</h1>
        <Grid2 container>
          {galleryDataLists.map((galleryData) => (
            <Grid2 size={{ xs: 12, md: 6 }} key={galleryData.id}>
              <div className={styles.item}>
                <img src={NoImage.src} className={styles.img} alt={galleryData.title} />
                <Box className={styles.gallery} onClick={() => handleModal(galleryData.id)}>
                  <p className={styles.itemTitle}>{galleryData.title}</p>
                </Box>
              </div>
            </Grid2>
          ))}
        </Grid2>
      </div>
      {galleryData && <GalleryModal open={isOpen} handleModal={handleModal} galleryData={galleryData} />}
    </>
  );
}
