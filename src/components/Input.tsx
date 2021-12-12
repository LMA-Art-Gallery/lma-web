import type { NextPage } from 'next'
import Image from 'next/image'

interface TextInputProps {
  label?: string
  placeholder?: string
  type?: string
  inputStyle?: string
  classStyle?: string
  multiline?: boolean
  required?: boolean
  disabled?: boolean
  value?: any
  defaultValue?: any
}

const defaultProps = {
  value: undefined,
  defaultValue: undefined,
  required: false,
  disabled: false,
  multiline: false,
  classStyle: "",
  inputStyle: "",
  placeholder: "",
  type: "text"
}

export const TextInput: NextPage<TextInputProps> = ({ label, placeholder, type, inputStyle, classStyle, multiline = false, required, disabled, value, defaultValue, ...props }) => {
  const underlineStyle = `
                    peer
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-primary
                    ${inputStyle}
                  `

  return (
    <label className={`flex flex-col-reverse ${classStyle}`}>
      {multiline ? <textarea value={value} defaultValue={defaultValue} className={underlineStyle} placeholder={placeholder} rows={6} required {...props} /> : <input value={value} type={type} defaultValue={defaultValue} className={underlineStyle} placeholder={placeholder} required {...props} />}
      <span className="text-black font-bold text-sm peer-focus:text-primary">{label?.toUpperCase()}<span className="text-primary">{required ? ' *' : null}</span></span>
      
    </label>
  )
}



export const RightInput: NextPage<TextInputProps> = ({ label, placeholder, type, inputStyle, classStyle, multiline, required, value, defaultValue, disabled, ...props }) => {
  const defaultStyle = `
                    peer
                    mt-0
                    w-full
                    border-0
                    px-0.5
                    focus:ring-0 focus:border-primary
                    ${inputStyle}
                  `


  return <label className={`flex flex-col-reverse justify-between items-start ${classStyle} md:flex-row-reverse md:items-start `}>
    {!disabled ?<div className="flex w-1/6 justify-end py-2">
      <Image src="/icons/edit.png" alt={'Enter the page'} height={27} width={27} objectFit="contain" />
    </div> : <></>}
    {multiline ? <textarea disabled className={defaultStyle} value={value} defaultValue={defaultValue} placeholder={placeholder} rows={6} required {...props} /> : <input disabled value={value} defaultValue={defaultValue} type={type} className={defaultStyle} placeholder={placeholder} required {...props} />}
    <span className="text-black font-bold text-base peer-focus:text-primary min-w-max w-48 py-2">{label}<span className="text-primary">{required ? ' *' : null}</span></span>

  </label>
}

TextInput.defaultProps = defaultProps
RightInput.defaultProps = defaultProps

export default TextInput



