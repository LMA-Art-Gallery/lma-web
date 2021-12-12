import '../styles/globals.css'
import NextApp, {AppContext, AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { NextIntlProvider, IntlMessages } from 'next-intl';

type Props = AppProps & {
  messages: IntlMessages;
};


function MyApp({ Component, messages, pageProps }: Props) {
  return <NextIntlProvider messages={{...messages, ...pageProps?.messages}} formats={{
    dateTime: {
      short: {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }
    }
  }}>
    <Component {...pageProps} />
  </NextIntlProvider>
}


MyApp.getInitialProps = async function getInitialProps(ctx: AppContext) {
  const localeData = await import(`../utils/locales/${ctx?.router?.locale || 'en'}.json`)

  return {
    ...(await NextApp.getInitialProps(ctx)),
    messages: JSON.parse(JSON.stringify(localeData))
  };
}


export default MyApp
