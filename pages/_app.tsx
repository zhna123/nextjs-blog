import '../styles/globals.css'
import { AppProps } from 'next/app'

// The default export of _app.js is a top-level React component that wraps 
// all the pages in your application. 
// You can use this component to keep state when navigating between pages, 
// or to add global styles
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}