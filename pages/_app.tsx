import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})
// serif
const playfair_display = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair_display'
})

// The default export of _app.js is a top-level React component that wraps 
// all the pages in your application. 
// You can use this component to keep state when navigating between pages, 
// or to add global styles
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${playfair_display.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}