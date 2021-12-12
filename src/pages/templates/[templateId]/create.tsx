import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head';
import { useTranslations } from 'use-intl';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import SectionHeader from '../../../components/SectionHeader';
import Constants from '../../../utils/constants';
import TextInput from '../../../components/Input';
import { Button, PlainButton } from '../../../components/Button';
import { useRouter } from 'next/dist/client/router';
import { MouseEvent } from 'react';
interface TemplateCreateProps {
  templateId: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { templateId } = context.query
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const errorCode = res.ok ? false : res.statusCode
  // const json = await res.json()
  if(+(templateId || 99) > 5 || +(templateId || 99) < 1) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { templateId },
  }
}

const TemplateCreate: NextPage<TemplateCreateProps> = ({templateId}) => {
  const t = useTranslations('TemplatesCreate');
  const router = useRouter()

  const handleBack = (e: MouseEvent) => {
    e.preventDefault()
    router.back()
  }
  const handleCreate = (e: MouseEvent) => {
    e.preventDefault()
    // TODO:- Contract Action: Create page
    router.push('/settings/mint')
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
            <TextInput label={t('Brand Artist Name')} type="text" placeholder={t("Enter Name")} required/>
            <TextInput label={t('Description')} type="text" placeholder={t("What is this marketplace about?")} classStyle="row-span-2" required multiline/>
            <TextInput label={t('Custom URL Link')} type="text" placeholder={t("Your favorite slug")} required/>
            <TextInput label={t('Tags')} type="text" placeholder={t("What is the marketplace related to?")} required/>
            <TextInput label={t('Marketplace availability')} type="text" placeholder="" required/>
          </div>
          <div className="flex flex-row content-center justify-end mt-10 gap-6">
            <PlainButton title={t('Cancel')} handlePress={handleBack} style="hover:text-red-400" />
            <Button title={t('Create and Proceed to the Payment')} handlePress={handleCreate}/>
          </div>
        </form>

      </main>
      <Footer />
    </div>
  )
}

export default TemplateCreate
