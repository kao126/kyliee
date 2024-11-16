'use client';
// style
import { styles } from 'src/components/top/sns/styles.css';

// material-ui
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';

export function Sns() {
  return (
    <div className={styles.snsArea}>
      <p className={styles.snsTitle}>SNS</p>
      <ul className={styles.snsList}>
        <li className={styles.snsContents}>
          <FacebookRoundedIcon />
        </li>
        <li className={styles.snsContents}>
          <InstagramIcon />
        </li>
        <li className={styles.snsContents}>
          <TwitterIcon />
        </li>
      </ul>
    </div>
  );
}
