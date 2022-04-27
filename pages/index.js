import React from 'react';
import { getLayout } from '../components/common/Layout';
import HomePage from '../components/page/Home';

export default function Home() {
  return (
    <HomePage />
  );
}

Home.getLayout = getLayout;
