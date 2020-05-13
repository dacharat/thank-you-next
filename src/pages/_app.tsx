import React, { useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme'

// export default class MyApp extends App {
//   componentDidMount() {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector('#jss-server-side')
//     if (jssStyles) {
//       jssStyles.parentElement?.removeChild(jssStyles)
//     }
//   }

//   render() {
//     const { Component, pageProps } = this.props

//     return (
//       <React.Fragment>
//         <Head>
//           <title>My page</title>
//           <meta
//             name="viewport"
//             content="minimum-scale=1, initial-scale=1, width=device-width"
//           />
//         </Head>
//         <ThemeProvider theme={theme}>
//           {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//           <CssBaseline />
//           <Component {...pageProps} />
//         </ThemeProvider>
//       </React.Fragment>
//     )
//   }
// }

export default ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
