import React from 'react';
import Image from "next/image";
import imag from '../images/heroImage.png'
import imag1 from '../images/heroImage2.png'

const Hero = () => {
    return (
        <div className={'h-screen flex justify-between'}>
            <div className={'pl-32 pt-32'}>
                <Image src={imag1} alt={''} height={350}/>
            </div>
            <div className={''}>
                <Image src={imag} alt={''} height={550}/>
            </div>
        </div>
    );
};

export default Hero;