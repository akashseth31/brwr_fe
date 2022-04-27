import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href='/project'>Go to project</Link>
    </>
  )
}
