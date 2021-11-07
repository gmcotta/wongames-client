import { AppProps } from 'next/app'
import Head from 'next/head'
import NextjsProgressbar from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { Provider as AuthProvider } from 'next-auth/client'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

import { CartProvider } from 'hooks/use-cart'
import { WishlistProvider } from 'hooks/use-wishlist'

import { useApollo } from 'utils/apollo'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState, null)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishlistProvider>
              <Head>
                <title>Won Games</title>
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#06092B" />
                <meta
                  name="description"
                  content="A place to buy your favorite games!"
                />
              </Head>
              <DefaultSeo {...SEO} />
              <GlobalStyles />
              <NextjsProgressbar
                color={theme.colors.primary}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
              />
              <Component {...pageProps} />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
