import type { NextPage } from 'next'
import Head from 'next/head';
import { useTranslations } from 'use-intl';
import Header from '../../components/Header';
import SectionHeader from '../../components/SectionHeader';
import Constants from '../../utils/constants';
import Footer from '../../components/Footer';
import { RightInput } from '../../components/Input';
import { useState } from 'react';

const SettingStats: NextPage = () => {
  const t = useTranslations('SettingsStats')
  const [stats, setStats] = useState({minted: 1, owned: 1, sold: 1, earnings: 1})
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primaryLigthen">
      <Head>
        <title>{t('title_1')} - {Constants.appName}</title>
      </Head>
      <Header />
      <main className="flex flex-col w-full flex-1 px-20 ">
        <SectionHeader title={t('title_1')} />
        <div className="w-full divide-y  border-b gap-y-2">
          <RightInput disabled label={t('NFT minted')} value={stats?.minted} classStyle={"py-2"}/>
          <RightInput disabled label={t('NFT owned')} value={stats?.owned} classStyle={"py-2"}/>
          <RightInput disabled label={t('NFT sold')} value={stats?.sold} classStyle={"py-2"}/>
          <RightInput disabled label={t('Earnings')} value={stats?.earnings} classStyle={"py-2"}/>
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default SettingStats
