import type { NextPage } from 'next'
import Image from 'next/image'
import { useTranslations } from 'use-intl';
import SectionHeader from './SectionHeader';
import NftCard1, { NftCardProps } from './NftCard1';
import { TemplateProps } from './Template1';

const Template2: NextPage<TemplateProps> = ({ collection }) => {
  const t = useTranslations('Templates');
  const [first, ...last] = collection?.description.split('\n')

  const renderNFT = (item: NftCardProps) => <NftCard1 {...item} key={item?.title} withoutHover />

  return (
    <main className="flex flex-col w-full flex-1 md:px-20 px-5">
      <SectionHeader title={last.length > 0 ? first : collection?.name} headerStyle="!text-5xl !py-0 !pb-10 !border-b-0" />
      <div className="relative md:-left-20 -left-5 h-[36rem] w-screen">
        <Image src={collection.coverImageURL} alt="collection cover image" layout="fill" objectFit='cover' />
      </div>
      <div className="my-10">
        <p className="font-bold pb-4">{t('About')}</p>
        {last.length > 0 ? last.map((l: string, i: number) => <p key={i}>{l}</p>) : <p>{first}</p>}
      </div>
      <div className="grid gap-x-5 gap-y-5 grid-cols-1 py-20 md:grid-cols-2">
        {collection.nfts.map(renderNFT)}
      </div>
    </main>
  )
}

Template2.defaultProps = {
  collection: {},
}

export default Template2


