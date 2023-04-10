import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
      <body className='flex flex-col'>
        <div className="drawer">
          <input title='sidebar' id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <div className="">
              <Header />
              <Main />
            </div>
            <Footer />
          </div>
          <Sidebar />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
