import { getLayout } from '../components/Layout'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href='/project'>Go to project</Link>
    </>
  )
}

Home.getLayout = getLayout;
