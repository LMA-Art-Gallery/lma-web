import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'use-intl';
import { Collections } from '../utils/constants';

export interface PageCardProps {
  imageURL: string
  name: string
  _id: string
  site: string
  withoutTitle?: boolean
  withoutHover?: boolean
  collection: any
}

const PageCard: NextPage<PageCardProps> = ({ name, imageURL, collection, site, withoutTitle }) => {
  const t = useTranslations('Templates');

  return (
    <Link href={site} passHref>
      <a className="flex flex-col items-center">
        <Image height={320} width={320} src={imageURL} alt={`${collection.name} cover image`} objectFit='cover' />
        {withoutTitle ? null : 
        <>
          <h4 className="font-bold pt-2 text-xl">{name}</h4>
          <h4 className="text-primary">{Collections[collection].nfts.length} artworks</h4>
        </>
        }
      </a>
    </Link>
  )
}

PageCard.defaultProps = {
  withoutHover: false,
  withoutTitle: false,
}

export default PageCard


