import type { NextPage } from 'next'
import Image from 'next/image'
import { useTranslations } from 'use-intl';
import SectionHeader from './SectionHeader';
import { NftCardProps } from './NftCard1';
import NftCard2 from './NftCard2';
import { TemplateProps } from './Template1';

const Template3: NextPage<TemplateProps> = ({ collection }) => {
  const t = useTranslations('Templates');

  const renderNFT = (item: NftCardProps) => <NftCard2 {...item} key={item?.title} withoutHover />

  return (
    <main className="flex flex-col w-full flex-1 md:px-20 px-5">
      <div className="relative -top-32 md:-left-20 -left-5 h-[36rem] w-screen">
        <Image src={collection.coverImageURL} alt="collection cover image" layout="fill" objectFit='cover' />
      </div>
      <SectionHeader title={collection?.name} headerStyle="!text-5xl !py-0 !pb-10 !border-b-0" />
      <div className="my-10">
        <span className="font-bold">{t('About')}</span>
        <p className="pt-4">{collection?.description}</p>
      </div>
      <div className="grid gap-x-5 gap-y-5 grid-cols-1 py-20 md:grid-cols-4">
        {collection.nfts.map(renderNFT)}
      </div>
    </main>
  )
}

Template3.defaultProps = {
  collection: {},
}

export default Template3


