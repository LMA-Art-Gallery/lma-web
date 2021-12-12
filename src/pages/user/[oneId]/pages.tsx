import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head';
import Header from '../../../components/Header';
import Constants, { Pages } from '../../../utils/constants';
import Footer from '../../../components/Footer';
import LatestPageListItem, { LatestPageListItemProps } from '../../../components/LatestPageListIitem';
import { useTranslations } from 'use-intl';
import SectionHeader from '../../../components/SectionHeader';

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
  const t = useTranslations('Home');

  const renderLatestPage = (item: LatestPageListItemProps) => <LatestPageListItem key={item._id} {...item} />

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primaryLigthen">
      <Head>
        <title>About Us - {Constants.appName}</title>
      </Head>
      <Header />
      <main className="flex flex-col w-full flex-1 px-20">
        <SectionHeader title={t('Your Artists')} />
        <div className="w-full pb-10">
          <div className="w-full divide-y  border-b">
            {Pages.map(renderLatestPage)}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default UserDetail

