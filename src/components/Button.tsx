
import type { NextPage } from 'next'
import Image from 'next/image'

interface IconButtonProps {
  title?: string
  icon?: string
  handlePress: any
  style?: string
}

export const IconButton: NextPage<IconButtonProps> = ({ handlePress, title, icon, style }) => {
  return (
    <button className={`flex flex-row font-bold border-1 border-black p-2 hover:text-primary hover:!bg-transparent hover:!border-primary items-center justify-center ${style}`} onClick={handlePress}>
      {icon ? <div className="flex pr-2 items-center justify-center">
        <Image src={icon} alt={`${title} logo`} width={32} height={32} objectFit="cover" objectPosition="center" />
        </div> :null}
      {title}
    </button>

  )
}

export const Button: NextPage<IconButtonProps> = ({ handlePress, title, icon, style }) => {
  return (
    <button className={`flex flex-row font-bold border-1 border-primary bg-primary text-white p-2 hover:text-primary hover:!bg-transparent hover:!border-primary items-center justify-center ${style}`} onClick={handlePress}>
      {icon ? <div className="flex pr-2 items-center justify-center">
        <Image src={icon} alt={`${title} logo`} width={32} height={32} objectFit="cover" objectPosition="center" />
        </div> :null}
      {title}
    </button>

  )
}

export const PlainButton: NextPage<IconButtonProps> = ({ handlePress, title, icon, style }) => {
  return (
    <button className={`flex flex-row font-bold p-2 items-center justify-center ${style}`} onClick={handlePress}>
      {icon ? <div className="flex pr-2 items-center justify-center">
        <Image src={icon} alt={`${title} logo`} width={32} height={32} objectFit="cover" objectPosition="center" />
        </div> :null}
      {title}
    </button>

  )
}

export default IconButton


