import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head';
import { useTranslations } from 'use-intl';
import Header from '../../../components/Header';
import Constants, { Collections } from '../../../utils/constants';
import { useRouter } from 'next/dist/client/router';
import { MouseEvent } from 'react';
import TemplateSelection from '../../../components/TemplateSelection';
interface TemplateReviewProps {
  templateId: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { templateId } = context.query
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const errorCode = res.ok ? false : res.statusCode
  // const json = await res.json()
  if (+(templateId || 99) > 5 || +(templateId || 99) < 1) {
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

const TemplateReview: NextPage<TemplateReviewProps> = ({ templateId }) => {
  const t = useTranslations('TemplatesPreview');
  const router = useRouter()
  const collection = Collections[+templateId - 1]

  const handleBack = (e: MouseEvent) => {
    e.preventDefault()
    router.back()
  }
  const handleCreate = (e: MouseEvent) => {
    e.preventDefault()
    router.push(`templates/${templateId}/create`)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primaryLigthen">
      <Head>
        <title>{collection.name} - {Constants.appName}</title>
      </Head>
      <Header headerStyle={collection.headerStyle} textStyle={collection.textStyle} buttonStyle={collection.buttonStyle} />
      <TemplateSelection key={templateId} collection={collection} id={+templateId} />
    </div>
  )
}

export default TemplateReview
