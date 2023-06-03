import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from "../components/Hero";
import YourMatches from '../components/YourMatches'
import About from "../components/About";
import marginImage from "../images/tracer.png"
import marginImage1 from "../images/tracer2.jpeg"
import {Fade} from "react-awesome-reveal";
import {Head} from "next/document";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
        {/*<Head>*/}
        {/*  <title>Lace-Up</title>*/}
        {/*  <meta name="description" content="Generated by create next app" />*/}
        {/*  <meta name="viewport" content="width=device-width, initial-scale=1" />*/}
        {/*  <link rel="icon" href="/favicon.ico" />*/}
        {/*</Head>*/}
        <main
            className={`overflow-x-hidden`}
        >
          <Hero/>
          <Fade delay={400} triggerOnce>
            <div className={'relative'}>
              <Image src={marginImage} alt={''}/>
              <div className={'absolute top-0 left-0 flex justify-around w-full items-center h-full'}>
                <div className={'w-72 h-72 backdrop-blur-sm hover:backdrop-blur-md duration-500 transform transition-all p-4'}>
                  <div className={'md:text-xl lg:text-2xl font-semibold flex h-full text-gray-950'}>
                    Match Creation and Discovery: Easily create and find matches in your favorite sports, connecting you with fellow players and expanding your sports network.
                  </div>
                </div>
                <div className={'w-72 h-72 backdrop-blur-sm hover:backdrop-blur-md duration-500 transform transition-all p-4'}>
                  <div className={'md:text-xl lg:text-2xl font-semibold flex h-full text-gray-950'}>
                    User Profile and Social Interactions: Connect with other players, build your profile, and engage in social interactions.
                  </div>
                </div>
                <div className={'w-72 h-72 backdrop-blur-sm hover:backdrop-blur-md duration-500 transform transition-all p-4'}>
                  <div className={'md:text-xl lg:text-2xl font-semibold flex h-full text-gray-950'}>
                    SlayPoint System: Earn points based on performance and participation, adding a competitive element to the platform.
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <div className="bg-white text-black px-4 pt-4 sm:px-16 md:px-24 lg:px-24 sm:py-4">
            <YourMatches/>
          </div>
          <Fade delay={400} triggerOnce>
            <div className={'relative w-full my-8'}>
              <Image src={marginImage1} alt={''} className={'w-full'}/>
              <div className={'absolute top-0 left-0 h-full w-full'}>
                <div className={'w-full h-full backdrop-blur-sm hover:backdrop-blur-md duration-700 transform transition-all p-4 flex flex-col justify-between items-center'}>
                  <marquee behavior="scroll" direction="left" scrollamount="5" className={'p-4 text-3xl md:text-6xl lg:text-8xl font-semibold text-white'}>
                    Badminton Tournament at Vellore Stadium
                  </marquee>
                  <div className={'font-thin text-xl md:text-3xl lg:text-5xl text-white'}>
                    Check out upcoming tournaments!
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <About/>
        </main>
      </>
  )
}
