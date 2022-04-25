import Header from '../Header';
import Footer from '../Footer';
import { Body } from './style';

const Layout = ({ children }) => {
  return <>
    <Header />
    <Body>{children}</Body>
    <Footer />
  </>
}

export const getLayout = page => <Layout>{page}</Layout>;

export default Layout;
