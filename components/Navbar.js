import React, {useEffect, useRef, useState} from 'react';
import {FaBars, FaSearch, FaShoppingCart, FaTimes, FaUser} from 'react-icons/fa';
import Image from "next/image";
import logo from '../images/logo.png'
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";

export default function Navbar(){
    const router = useRouter();
    const {data ,status} = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const prevScrollY = useRef(0);
    const [showPopup, setShowPopup] = useState(false);
    const [isOpenDetails, setIsOpenDetails] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSignIn = async () => {
        await signIn();
        await router.push('/details');
    };
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY.current) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            prevScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(()=>{
        const handleKeyDown = (event)=>{
            if(event.keyCode === 27 && showPopup){
                setShowPopup(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [showPopup]);

    const toggleDropdownDetails = () => {
        setIsOpenDetails(!isOpenDetails);
    };

    return (
        <nav className={`z-20 bg-white text-black border-b-[1px] border-b-grey-200 transition-all duration-700 transition-all ${
            isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100 sticky top-0"
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="font-bold text-xl">
                            <Image src={logo} alt={''} height={60}/>
                        </a>
                    </div>
                    <div className="hidden md:block w-full">
                        <ul className="flex justify-between space-x-10 text-xl">
                            <ul className="mx-14 flex justify-center space-x-10 text-xl">
                                <li className={'flex items-center'}>
                                    <Link href="/matches" className="hover:text-gray-300">
                                        Find Matches
                                    </Link>
                                </li>
                                <li className={'flex items-center'}>
                                    <Link href="/tournament" className="hover:text-gray-300">
                                        Enter Tournaments
                                    </Link>
                                </li>
                                <li className={'flex items-center'}>
                                    <Link href="/book" className="hover:text-gray-300">
                                        Book venue
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex space-x-10 text-xl">
                                <li className={'relative flex flex-col justify-center items-center'}>
                                    <div className="hover:text-gray-300 underline flex items-center" onClick={() => setShowPopup(!showPopup)}>
                                        {data ?
                                            <button onClick={toggleDropdownDetails} className={'p-1 transform transition-all duration-500 rounded-full shadow-gray-800 shadow-sm'}>
                                                <div>
                                                    <Image className={'rounded-full cursor-pointer'} src={data?.user?.image} alt={''} width={35} height={35}/>
                                                    {isOpenDetails && (
                                                        <div
                                                            id="dropdownDelay"
                                                            className="absolute right-0 text-black z-10 mt-4 animate-slide-down bg-white divide-y divide-gray-100 rounded-md shadow-sm shadow-gray-800 w-44"
                                                        >
                                                            <ul className="my-2" aria-labelledby="dropdownDelayButton">
                                                                <li className={'text-lg'}>
                                                                    <Link href="/Dashboard" className="block px-3 py-1 hover:bg-gray-200">
                                                                        Dashboard
                                                                    </Link>
                                                                </li>
                                                                <li className={'text-lg'}>
                                                                    <Link href="/Details" className="block px-3 py-1 hover:bg-gray-200">
                                                                        Update details
                                                                    </Link>
                                                                </li>
                                                                <li className={'border-t-[1px] flex justify-center text-lg hover:bg-gray-200'}>
                                                                    <button onClick={()=>signOut()} className="block px-3 py-1 hover:bg-gray-200">
                                                                        LogOut
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </button>: <button onClick={()=>signIn( ['github', 'google'] ,  {callbackUrl:'http://localhost:3000/'})}><FaUser size={20}/></button>}
                                    </div>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-gray-400 hover:text-black focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {isOpen ? <FaTimes/> : <FaBars/>}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden text-xl">
                    <ul className="flex flex-col space-y-10 py-4 px-3 absolute top-16 left-0 w-full bg-white">
                        <li className="text-center">
                            <Link href="/Artworks" className="hover:text-gray-300">
                                Artworks
                            </Link>
                        </li>
                        <li className="text-center">
                            <Link href="/Artists" className="hover:text-gray-300">
                                Artist
                            </Link>
                        </li>
                        <li className="text-center">
                            <Link href="/About" className="hover:text-gray-300">
                                About
                            </Link>
                        </li>
                        <li className={'relative flex flex-col justify-center items-center'}>

                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

