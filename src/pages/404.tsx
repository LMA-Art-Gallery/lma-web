
import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Constants from '../utils/constants';
import Footer from '../components/Footer';

const Custom404: NextPage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primaryLigthen">
      <Head>
        <title>404 - {Constants.appName}</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold pb-20">404 - Page Not Found</h1>
        <h1 className="text-6xl font-bold">
          Back to{' '}
          <Link href="/" passHref>
            <a className="text-blue-600" >
              LMA Art!
            </a>
          </Link>
        </h1>
      </main>
      <Footer />
    </div>
  )
}

export default Custom404
