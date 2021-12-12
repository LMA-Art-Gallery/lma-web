import type { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'use-intl';
import Footer from '../components/Footer';
import Header from '../components/Header'
import LatestPageListItem, { LatestPageListItemProps } from '../components/LatestPageListIitem';
import StepGuide from '../components/StepGuide';
import TemplateCard, { TemplateCardProps } from '../components/TemplateCard';
import Constants, { Pages, Templates } from '../utils/constants';



const Home: NextPage = () => {
  const t = useTranslations('Home');

  const renderLatestPage = (item: LatestPageListItemProps) => <LatestPageListItem key={item._id} {...item} />
  const renderTemplateCover = (item: TemplateCardProps) => <TemplateCard key={item._id} {...item} withoutTitle />

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primaryLigthen">
      <Head>
        <title>{t('title')} - {Constants.appName}</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
        <p className="font-bold font-sans text-l tracking-wider pt-20">{t("artist label marketplace")}</p>
        <h1 className="font-extrabold font-sans text-5xl tracking-wider leading-normal">
          {t("Create your own")}
        </h1>
        <p className="font-extrabold font-sans text-5xl tracking-wider leading-normal">
          {t("individual NFT marketplace")}
        </p>
        <button className="flex flex-row font-bold border-1 bg-black p-2 hover:text-black hover:bg-white items-center justify-center mt-5 mb-10 text-white w-60">
          <Link href="/templates" passHref>
            <a>{t("Start Now")}</a>
          </Link>
        </button>
        <Image src="https://picsum.photos/840/525" alt="main photo" height={525} width={840} />
        <StepGuide />

        <div className="w-full py-20 overflow-x-hidden">
          <div className="flex flex-row">
            <div className="grid grid-cols-2 gap-x-3 gap-y-3 w-full">
              <div className="flex flex-col">
                <h2 className="text-left font-extrabold font-sans text-5xl">Choose a</h2>
                <h2 className="text-left font-extrabold font-sans text-5xl">template that</h2>
                <h2 className="text-left font-extrabold font-sans text-5xl">fits your needs.</h2>
              </div>
              {Templates.slice(0, 1).map(renderTemplateCover)}
            </div>
            <div className="absolute -right-64 h-auto w-80">
            {Templates.slice(1, 2).map(renderTemplateCover)}
            </div>
          </div>
          <div className="flex flex-row pt-3">
            <div className="absolute -left-64 h-auto w-80">
              {Templates.slice(2, 3).map(renderTemplateCover)}
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-3 w-full">
              {Templates.slice(3, 5).map(renderTemplateCover)}
            </div>
          </div>

          <Link href="/templates" passHref>
            <a className="text-right flex flex-row content-center justify-end pt-10">
              <span className="pr-5 font-sans text-xl text-bold">
                {t('Explore ALL templates')}
              </span>
              <Image src="/icons/arrow-right.png" alt={'Go to templage page'} height={18} width={36} objectFit="contain" />
            </a>
          </Link>
        </div>

        <div className="w-full pt-20 pb-10">
          <h2 className="text-right font-extrabold font-sans text-5xl pb-10">{t("Your Artists")}</h2>
          <div className="w-full divide-y border-t border-b">
            {Pages.map(renderLatestPage)}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default Home
