// importing react and component dependencies for the AboutSection component
import React from 'react'

// importing child components for AboutSection
import Heading from './Heading'
import Description from './Description'
import Button from './Button'
import Experience from './Experience'

// importing images  
import about from '../../assets/images/about/about-image-01.jpg';
import about2 from '../../assets/images/about/about-image-02.jpg';

// importing svg 

import { Svg, Svgtwo, Svgthree } from '../../assets/svg/Icons'


function About() {
  return (
    <>
    {/* <!-- ====== About Section Start --> */}
    <section id="about" className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">

    <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[540px] lg:mb-0">
              < Heading />
              <Description />
              <Button />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">

            <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
              <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                  <img src={about} alt="about image"
                    className="h-full w-full object-cover object-center" />
                </div>
              </div>

              <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                  <img src={about2} alt="about image"
                    className="h-full w-full object-cover object-center" />
                </div>

                <div
                  className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                  <Experience />
                  <div>
                    <span className="absolute left-0 top-0 -z-10">
                    <Svg />
                    </span>
                    <span className="absolute right-0 top-0 -z-10">
                      <Svgtwo />
                    </span>
                    <span className="absolute bottom-0 right-0 -z-10">
                      <Svgthree />
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
    </section>
  {/* <!-- ====== About Section End --> */}
    </>
  )
}

export default About;
