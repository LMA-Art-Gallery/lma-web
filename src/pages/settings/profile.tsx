import type { NextPage } from 'next'
import Head from 'next/head';
import { useTranslations } from 'use-intl';
import Header from '../../components/Header';
import SectionHeader from '../../components/SectionHeader';
import Constants from '../../utils/constants';
import Footer from '../../components/Footer';
import  { RightInput } from '../../components/Input';
import { useState } from 'react';

const Profile: NextPage = () => {
  const t = useTranslations('SettingsProfile')
  const [profile, setProfile] = useState({ imageURL: '', name: 'LMA Gallery', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.', createdAt: new Date() })
  const [social, setSocial] = useState({ twitter: '', website: '', instagram: '' })

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primaryLigthen">
      <Head>
        <title>{t('title_1')} - {Constants.appName}</title>
      </Head>
      <Header />
      <main className="flex flex-col w-full flex-1 px-20">
        <SectionHeader title={t('title_1')} />
        <div className="w-full divide-y  border-b gap-y-2 mb-20">
          <RightInput disabled label={t('Profile Image')} value={profile?.imageURL} classStyle={"py-2"} />
          <RightInput label={t('Artist Name')} value={profile?.name} classStyle={"py-2"} />
          <RightInput label={t('Description')} value={profile?.description} classStyle={"py-2"} multiline/>
          <RightInput disabled label={t('Member Since')} value={profile?.createdAt} classStyle={"py-2"} />
        </div>

        <SectionHeader title={t('title_2')} />
        <div className="w-full divide-y border-b gap-y-2">
          <RightInput label={t('Website')} value={social?.website} classStyle={"py-2"} />
          <RightInput label={t('Twitter')} value={social?.twitter} classStyle={"py-2"} />
          <RightInput label={t('Instagram')} value={social?.instagram} classStyle={"py-2"} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Profile
