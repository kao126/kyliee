// components
import { PageContainer } from 'src/components/common/pageContainer';

export const metadata = {
  title: 'News',
};

export default function NewsLayout({ children }) {
  return <PageContainer>{children}</PageContainer>;
}
