// components
import { PageContainer } from 'src/components/common/pageContainer';

export const metadata = {
  title: 'Blog',
};

export default function BlogLayout({ children }) {
  return <PageContainer>{children}</PageContainer>;
}
