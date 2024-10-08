import React from 'react'

import { FootIcon, FootIcon1, FootIcon2, FootIcon3} from "../../assets/svg/Icons"
import logo from '../../assets/images/logo/logo.svg';

const FotFirstSection = () => {
  return (
    <>
         <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
          <div className="mb-10 w-full">
            <a href="javascript:void(0)" className="mb-6 inline-block  max-h-[100px]">
              <img src={logo} alt="logo" className="max-w-full" />
            </a>
            <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
              We create digital experiences for brands and companies by using
              technology.
            </p>
            <div className="-mx-3 flex items-center">
              <a href="javascript:void(0)" className="px-3 text-gray-7 hover:text-white">
              <FootIcon />
              </a>
              <a href="javascript:void(0)" className="px-3 text-gray-7 hover:text-white">
               <FootIcon1 />
              </a>
              <a href="javascript:void(0)" className="px-3 text-gray-7 hover:text-white">
                <FootIcon2 />
              </a>
              <a href="javascript:void(0)" className="px-3 text-gray-7 hover:text-white">
                <FootIcon3 />
              </a>
            </div>
          </div>
        </div>

    </>
  )
}

export default FotFirstSection