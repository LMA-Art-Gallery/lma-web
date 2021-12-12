import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'use-intl';

export interface TemplateCardProps {
  imageURL: string
  title: string
  _id: string
  withoutTitle?: boolean
  withoutHover?: boolean
}

const TemplateCard: NextPage<TemplateCardProps> = ({ title, imageURL, _id, withoutTitle, withoutHover}) => {
  const t = useTranslations('Templates');

  return (
    <div className="">
      <div className="bg-local bg-cover bg-no-repeat" style={{  backgroundImage: `url(${imageURL})`}}>
        <div className="group backdrop-filter h-80 hover:backdrop-blur-lg hover:backdrop-constrast-75 hover:backdrop-brightness-110 hover:backdrop-opacity-75">
          {withoutHover ? null : <div className="flex-col items-center justify-center w-full h-80 flex-1 text-center font-sans font-bold text-lg font-bold group-hover:flex hidden">
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
      {withoutTitle ? null : <h4 className="font-bold pt-2">{title}</h4>}
    </div>
  )
}

TemplateCard.defaultProps = {
  withoutHover: false,
  withoutTitle: false,
}

export default TemplateCard


