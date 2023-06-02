import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from "../components/Hero";
import YourMatches from '../components/YourMatches'
import About from "../components/About";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={``}
    >
      <Hero/>
      <div className="bg-white text-black px-4 pt-4 sm:px-16 md:px-24 lg:px-24 sm:py-4">
        <YourMatches/>
      </div>
      <About/>
    </main>
  )
}
