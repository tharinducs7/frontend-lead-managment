import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import store from "../store";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer delay={3000} position={'top-right'} />
    </Provider>
  )
}
