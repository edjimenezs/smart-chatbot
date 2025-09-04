import type { AppProps } from 'next/app'
import { SocketProvider } from '../contexts/SocketContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SocketProvider>
      <Component {...pageProps} />
    </SocketProvider>
  )
}
