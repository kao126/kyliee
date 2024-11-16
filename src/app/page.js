// components
import { Loading } from 'src/components/common/loading';
import { Top } from 'src/components/top/top';

export const metadata = {
  title: 'Top',
};

export default function Home() {
  return (
    <Loading>
      <Top />
    </Loading>
  );
}
