import { Inter } from 'next/font/google'
import HomePage from '../components/Home'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import About from '@/components/About'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Popular from '@/components/Popular'
import Explore from '@/components/Explore'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
        <title>Travel</title>
        <link rel="icon" href="dove.png" type="image/png"></link>
      </Head>
      <main className="grid gap-10 overflow-x-hidden relative">
        <Navbar />
        <HomePage />
        <div id="about">
          <About />
        </div>
        <div id="popular">
          <Popular />
        </div>
        <Explore />
        <Footer />
      </main>
    </>
  );
}
