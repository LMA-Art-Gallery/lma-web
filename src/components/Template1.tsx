import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'use-intl';
import SectionHeader from './SectionHeader';
import NftCard1, { NftCardProps } from './NftCard1';

export interface TemplateProps {
  collection: any
}

const Template1: NextPage<TemplateProps> = ({collection}) => {
  const t = useTranslations('Templates');

  const renderNFT = (item: NftCardProps) => <NftCard1 {...item} key={item?.title} withoutHover/>

  return (
    <main className="flex flex-col w-full flex-1 md:px-20 px-5">
      <SectionHeader title={collection?.name} headerStyle="!text-5xl !py-0 !pb-10 !border-b-0" />
      <Image src={collection.coverImageURL} alt="collection cover image" height={540} width={'100%'} objectFit='cover'/>
      <div className="border-t my-10 grid gap-x-3 gap-y-3 grid-cols-1 pt-10 md:grid-cols-4">
        <span className="font-bold">{t('About')}</span>
        <p className="col-span-3">{collection?.description}</p>
      </div>
      <div className="grid gap-x-5 gap-y-5 grid-cols-1 py-20 md:grid-cols-3">
        {collection.nfts.map(renderNFT)}
      </div>
    </main>
  )
}

Template1.defaultProps = {
  collection: {},
}

export default Template1


