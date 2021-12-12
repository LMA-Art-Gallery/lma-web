import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'use-intl';
import { NftCardProps } from './NftCard1';

const NftCard2: NextPage<NftCardProps> = ({ title, imageURL, _id, containerStyle, withoutHover }) => {
  const t = useTranslations('Templates');

  return (
    <div className="bg-local bg-cover bg-no-repeat" style={{ backgroundImage: `url(${imageURL})` }}>
      <div className={`group backdrop-filter h-96 md:h-screen/4 hover:backdrop-blur-lg  hover:backdrop-opacity-75 ${containerStyle}`}>
        {withoutHover ? null : <div className="flex-col items-center justify-center w-full h-96 md:h-screen/4 flex-1 text-center font-sans font-bold text-lg font-bold group-hover:flex hidden">
          <Link href={`/templates/${_id}/create`} passHref>
            <a className="flex flex-row items-center border-b-2 pb-2 gap-x-4 leading-relaxed tracking-wider text-shadow">{t('Start with', { title }).toUpperCase()} <Image className="ml-2" src="/icons/arrow-right.png" alt={'Enter the page'} height={24} width={45} objectFit="contain" /></a>
          </Link>
          <Link href={`/templates/${_id}/preview`} passHref>
            <a className="flex flex-row items-center leading-relaxed tracking-wider text-shadow">
              <span className="pt-6">{t('Preview').toUpperCase()}</span>
            </a>
          </Link>
        </div>}
      </div>
    </div>
  )
}

NftCard2.defaultProps = {
  withoutHover: false,
  containerStyle: '',
}

export default NftCard2


