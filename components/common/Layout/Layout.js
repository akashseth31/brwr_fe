import React from 'react';
import PropTypes from 'prop-types';
import MetaHead from '../MetaHead';
import Header from '../Header';
import Footer from '../Footer';
import { Body } from './Layout.styled';

const Layout = ({ children }) => {
  return <>
    <MetaHead />
    <Header />
    <Body>{children}</Body>
    <Footer />
  </>;
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export const getLayout = page => <Layout>{page}</Layout>;

export default Layout;
