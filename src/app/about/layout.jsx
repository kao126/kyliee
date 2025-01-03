// components
import { PageContainer } from 'src/components/common/pageContainer';

export const metadata = {
  title: 'About',
};

export default function AboutLayout({ children }) {
  return <PageContainer>{children}</PageContainer>;
}
