// Next.js
import Image from 'next/image';
import Link from 'next/link';

// style
import { styles } from 'src/components/common/footer/styles.css';

// image
import Wantedly from 'public/images/Wantedly_W.png';

// Material-Ui
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { usePathname } from 'next/navigation';

export function Footer() {
  const path = usePathname();

  const isDisplay = () => {
    switch (path) {
      case '/concept':
        return false;
      default:
        return true;
    }
  };

  const hasIcon = () => {
    switch (path) {
      case '/about':
        return true;
      default:
        return false;
    }
  };

  return isDisplay() ? (
    <footer className={styles.container}>
      {hasIcon() ? (
        <>
      <Link href={'/'}>
        <LinkedInIcon className={styles.linkedin} />
      </Link>
      <Link href={'https://github.com/kao126'}>
        <GitHubIcon className={styles.github} />
      </Link>
      <Link href={'https://www.wantedly.com/id/kanaru_oshima'}>
        <Image src={Wantedly} alt='wantedly' className={styles.wantedly} />
      </Link>
        </>
      ) : null}
      <div className={styles.footerText}>© KYLIEE All Rights Reserved.</div>
    </footer>
  ) : null;
}
