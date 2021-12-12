import type { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import { useTranslations } from 'use-intl';
import Constants, { Templates } from '../utils/constants';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import TemplateCard, { TemplateCardProps } from '../components/TemplateCard';
import Footer from '../components/Footer';


const Template: NextPage = () => {
  const t = useTranslations('Templates');

  const renderTemplate = (item: TemplateCardProps) => <TemplateCard {...item} key={item?.title} />

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primaryLigthen">
      <Head>
        <title>{t('title_1')} - {Constants.appName}</title>
      </Head>
      <Header />
      <main className="flex flex-col w-full flex-1 px-20 ">
        <SectionHeader title={t('title_1')} subtitle={t('title_2')}/>
        <div className="grid gap-x-8 gap-y-16 grid-cols-1 pt-20 md:grid-cols-2">
          {Templates.map(renderTemplate)}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Template
