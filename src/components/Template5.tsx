import type { NextPage } from 'next'
import SectionHeader from './SectionHeader';
import NftCard1, { NftCardProps } from './NftCard1';

export interface TemplateProps {
  collection: any
}

const Template5: NextPage<TemplateProps> = ({ collection }) => {
  const renderNFT = (item: NftCardProps) => <NftCard1 {...item} key={item?.title} withoutHover containerStyle={'hover:backdrop-contrast-50'} />

  return (
    <main className="flex flex-col w-full flex-1">
      <SectionHeader title={collection?.name} headerStyle="!text-5xl !py-0 !pb-10 !border-b-0 px-5 md:px-20 bg-coolGray" textStyle="text-white" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        {collection.nfts.map(renderNFT)}
      </div>
    </main>
  )
}

Template5.defaultProps = {
  collection: {},
}

export default Template5


