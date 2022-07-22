import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ChakraProvider } from '@chakra-ui/react'
import RtlProvider from '../provider/RTLprovider'
import I18nProvider from '../provider/I18nProvider'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

  return (
    <SessionProvider session={session}>
      <I18nProvider>
        <ChakraProvider>
          <RtlProvider>
            <Component {...pageProps} />
          </RtlProvider>
        </ChakraProvider>
      </I18nProvider>
    </SessionProvider>
  )
}

export default MyApp
