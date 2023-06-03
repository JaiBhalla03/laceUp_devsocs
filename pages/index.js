import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from "../components/Hero";
import YourMatches from '../components/YourMatches'
import About from "../components/About";
import marginImage from "../images/tracer.png"
import {Fade} from "react-awesome-reveal";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={``}
    >
      <Hero/>
      <Fade delay={400} triggerOnce>
        <div className={'relative'}>
          <Image src={marginImage} alt={''}/>
          <div className={'absolute top-0 left-0 flex justify-around w-full items-center h-full'}>
            <div className={'w-72 h-72 backdrop-blur-sm p-4'}>
              <div>
                vjdfiovdsoid
              </div>
            </div>
            <div className={'w-72 h-72 backdrop-blur-sm p-4'}>
              2
            </div>
            <div className={'w-72 h-72 backdrop-blur-sm p-4'}>
              3
            </div>
          </div>
        </div>
      </Fade>
      <div className="bg-white text-black px-4 pt-4 sm:px-16 md:px-24 lg:px-24 sm:py-4">
        <YourMatches/>
      </div>
      <About/>
    </main>
  )
}
