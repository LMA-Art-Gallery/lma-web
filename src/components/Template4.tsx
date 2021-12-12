import type { NextPage } from 'next'
import Image from 'next/image'
import { useTranslations } from 'use-intl';
import { NftCardProps } from './NftCard1';
import { TemplateProps } from './Template1';
import NftCard2 from './NftCard2';

const Template4: NextPage<TemplateProps> = ({ collection }) => {
  const t = useTranslations('Templates');
  const texts = collection?.description.split('\n')

  const renderNFT = (item: NftCardProps) => <NftCard2 {...item} key={item?.title} withoutHover />

  return (
    <main className="flex flex-col w-full flex-1 md:px-20 px-5">
      <Image src={collection.coverImageURL} alt="collection cover image" height={540} width={'100%'} objectFit='cover' />
      <div className="mt-10">
        {texts.map((l: string, i: number) => <p key={i} className='font-bold text-xl'>{l}</p>)}
      </div>
      <div className="grid gap-x-5 gap-y-5 grid-cols-1 py-20 md:grid-cols-3">
        {collection.nfts.map(renderNFT)}
      </div>
    </main>
  )
}

Template4.defaultProps = {
  collection: {},
}

export default Template4


