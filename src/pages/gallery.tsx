import type { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import { useTranslations } from 'use-intl';
import Constants, { Pages } from '../utils/constants';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import Footer from '../components/Footer';
import PageCard, { PageCardProps } from '../components/PageCard';


const Gallery: NextPage = () => {
  const t = useTranslations('Gallery');

  const renderPage = (item: PageCardProps) => <PageCard {...item} key={item?._id} />

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primaryLigthen">
      <Head>
        <title>{t('title_1')} - {Constants.appName}</title>
      </Head>
      <Header />
      <main className="flex flex-col w-full flex-1 px-20 ">
        <SectionHeader title={t('title_1')} headerStyle={'!border-b-0'} />
        <div className="flex flex-row flex-wrap items-center justify-evenly gap-x-5 gap-y-5">
          {Pages.map(renderPage)}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Gallery
