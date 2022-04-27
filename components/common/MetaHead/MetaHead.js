import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function MetaHead({ title, description }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content={description} />
      <meta name="author" content="" />
      <title>{title}</title>
    </Head>
  );
}

MetaHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

MetaHead.defaultProps = {
  title: ':: Savii ::',
  description: 'Savii Borrower Platform',
};


