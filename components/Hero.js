import React from 'react';
import Image from "next/image";
import imag from '../images/heroImage.png'

const Hero = () => {
    return (
        <div className={'h-screen flex justify-between'}>
            <div className={'mr-8'}>
                <h2 className={'text-8xl font-bold'}>
                    Lace-Up
                </h2>
            </div>
            <div className={''}>
                <Image src={imag} alt={''} height={550}/>
            </div>
        </div>
    );
};

export default Hero;