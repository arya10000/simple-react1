// importing react and component dependencies for the HeroSection component
import React from 'react'

// importing child components for HeroSection
import Heroheading from './Heroheading';
import HeroDescription from './HeroDescription';
import HeroBtn from './HeroBtn';

// importing image
import hero from '../../assets/images/hero/hero-image.png';

// importing svg 
import { HeroIcon, HeroIcon1 } from '../../assets/svg/Icons';


function Hero() {
  return (
    <>
  {/* <!-- ====== Hero Section Start --> */}
    <div id="home" className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="hero-content  mx-auto max-w-[780px] text-center">
                <Heroheading />
                <HeroDescription />
                <HeroBtn />
            </div>
          </div>

          <div className="w-full px-4">
            <div className=" relative z-10 mx-auto max-w-[845px]">
              <div className="mt-16">
                <img src={hero} alt="hero"
                  className="mx-auto max-w-full rounded-t-xl rounded-tr-xl" />
              </div>
              <div className="absolute -left-9 bottom-0 z-[-1]">
                < HeroIcon />
              </div>
              <div className="absolute -right-6 -top-6 z-[-1]">
                <HeroIcon1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* <!-- ====== Hero Section End --> */}
  </>
  )
}

export default Hero;
