import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head';
import { useTranslations } from 'use-intl';
import Header from '../../components/Header';
import SectionHeader from '../../components/SectionHeader';
import Constants from '../../utils/constants';
import Footer from '../../components/Footer';
import TextInput from '../../components/Input';
import { Button, PlainButton } from '../../components/Button';
import { useRouter } from 'next/dist/client/router';

const Mint: NextPage = () => {
  const t = useTranslations('SettingsMint')
  const router = useRouter()

  const handleBack = (e: MouseEvent) => {
    e.preventDefault()
    router.replace('/settings')
  }
  const handleCreate = (e: MouseEvent) => {
    e.preventDefault()
    // TODO:- Contract Action: Create NFT
    router.push('/settings/mint')
  }
  const uploadImage = () => {
    //TODO:- upload image to NFT
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primaryLigthen">
      <Head>
        <title>{t('title_1')} - {Constants.appName}</title>
      </Head>
      <Header />
      <main className="flex flex-col w-full flex-1 px-20 ">
        <SectionHeader title={t('title_1')} />
        <form>
          <div className="grid gap-x-8 gap-y-16 grid-rows-none pt-20 grid-flow-col md:grid-rows-3">
            <TextInput label={'Brand Artist Name'} placeholder="Enter Name" required />
            <TextInput label={'Description'} placeholder="What is this marketplace about?" classStyle="row-span-2" required multiline />
            <TextInput label={'Custom URL Link'} placeholder="Your favorite slug" required />
            <TextInput label={'Tags'} placeholder="What is the marketplace related to?" required />
            <TextInput label={'Marketplace availability'} placeholder="" required />
          </div>
          <div className="flex flex-row content-center justify-end mt-10 gap-6">
            <PlainButton title={t('Cancel')} handlePress={handleBack} style="hover:text-red-400" />
            <Button title={t('Create')} handlePress={handleCreate} />
          </div>
        </form>

      </main>
      <Footer />
    </div>
  )
}

export default Mint
