// Next.js
import { usePathname } from 'next/navigation';

// styles
import { styles } from 'src/components/common/footer/styles.css';

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

  return isDisplay() ? (
    <footer className={styles.container}>
      <div className={styles.footerText}>© KYLIEE All Rights Reserved.</div>
    </footer>
  ) : null;
}
