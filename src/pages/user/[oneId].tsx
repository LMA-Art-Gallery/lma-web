import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head';
import Header from '../../components/Header';
import Constants, { Offers, Pages, Templates } from '../../utils/constants';
import Footer from '../../components/Footer';
import { useTranslations } from 'use-intl';
import SectionHeader from '../../components/SectionHeader';
import LatestOfferListItem, { LatestOfferListItemProps } from '../../components/LatestOfferListItem';
import IconButton, { Button } from '../../components/Button';
import { useRouter } from 'next/dist/client/router';
import TemplateCard, { TemplateCardProps } from '../../components/TemplateCard';

interface UserDetailProps {
  oneId: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { oneId } = context.query

  return {
    props: { oneId },
  }
}

const UserDetail: NextPage<UserDetailProps> = ({ oneId }) => {
  const t = useTranslations('User');
  const router = useRouter()

  const handleCreate = () => router.push('settings/mint')

  const renderLatestOffer = (item: LatestOfferListItemProps) => <LatestOfferListItem key={item._id} {...item} />
  const renderAddWorkButton = () => <Button title={t('Create new art')} handlePress={handleCreate} style={'text-base'} />
  const renderAddCollection = () => <Button title={t('Create new collection')} handlePress={handleCreate} style={'text-base !border-black !bg-black'} />
  const renderTemplate = (item: TemplateCardProps) => <TemplateCard {...item} key={item?.title} withoutTitle withoutHover />

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primaryLigthen">
      <Head>
        <title>About Us - {Constants.appName}</title>
      </Head>
      <Header />
      <main className="flex flex-col w-full flex-1 px-20 my-10">
        <SectionHeader title={t('Offer')} headerStyle="!text-4xl !py-4" />
        <div className="w-full pb-10">
          <div className="w-full divide-y  border-b">
            {Offers.map(renderLatestOffer)}
          </div>
        </div>
        <SectionHeader title={t('Add Work')} headerStyle="!text-4xl !py-4" leftComponent={renderAddWorkButton}/>
        <div className="w-full pb-10">
        </div>
        <SectionHeader title={t('My Collections')} headerStyle="!text-4xl !py-4" leftComponent={renderAddCollection} />
        <div className="grid gap-x-8 gap-y-16 grid-cols-1 pt-20 md:grid-cols-3">
          {Templates.map(renderTemplate)}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default UserDetail

