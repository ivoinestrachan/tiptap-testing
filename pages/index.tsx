import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Tiptap from '../components/Tiptap'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>tiptap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

  <Tiptap />
    </div>
  )
}

export default Home
