import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'use-intl';
import IconButton, { Button } from './Button';

export interface LatestOfferListItemProps {
  name: string
  _id: string
  offerPrice: string
}

const LatestOfferListItem: NextPage<LatestOfferListItemProps> = ({ name, _id, offerPrice }) => {
  const t = useTranslations('Offer');

  const handleDecline = () => {}
  const handleAccept = () => {}

  return (
    <Link href={`/nft/${_id}`} passHref >
      <a className="flex flex-row justify-between items-center w-full py-4 space-x-2">
        <div className="text-xl font-bold w-1/3 text-left">{name}</div>
        <div className="text-l w-3/6 text-left">{offerPrice} ONE</div>
        <div className="flex w-1/6 justify-end gap-x-1">
          <IconButton title={t('DECLINE')} handlePress={handleDecline} />
          <Button title={t('ACCEPT')} handlePress={handleAccept} style={'!border-black !bg-black'} />
        </div>
      </a>
    </Link>
  )
}

export default LatestOfferListItem


