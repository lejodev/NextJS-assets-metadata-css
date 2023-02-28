import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_CLIENTID)
  return (
    <>
      GREAT
    </>
  )
}
