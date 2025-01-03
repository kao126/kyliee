// components
import { PageContainer } from 'src/components/common/pageContainer';

export const metadata = {
  title: 'Gallery',
};

export default function GalleryLayout({ children }) {
  return <PageContainer>{children}</PageContainer>;
}
