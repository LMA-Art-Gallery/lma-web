import type { NextPage } from 'next'
import { useTranslations } from 'use-intl';

interface SectionHeaderProps {
  title?: string
  subtitle?: string
  headerStyle?: string
  textStyle?: string
  leftComponent?: any
}

const SectionHeader: NextPage<SectionHeaderProps> = ({ title, subtitle, headerStyle, textStyle, leftComponent}) => {
  const t = useTranslations('Header');

  return (
    <div className={`flex flex-row justify-between border-b py-10 text-6xl font-sans font-extrabold ${headerStyle}`}>
      <div className={'flex flex-col'}>
        <h1 className={`${textStyle}`}>
          {title}
        </h1>
        {subtitle ? <h1 className={`${textStyle}`}>
          {subtitle}
        </h1> : null}
      </div>
      {leftComponent ? leftComponent() : null}
    </div>
  )
}

SectionHeader.defaultProps = {
  title: '',
  subtitle: '',
  headerStyle: '',
  textStyle: '',
  leftComponent: undefined
}

export default SectionHeader


