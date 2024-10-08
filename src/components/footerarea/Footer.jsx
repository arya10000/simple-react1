import React from 'react'

import FotFirstSection from './FotFirstSection'
import FotAboutSection from './FotAboutSection'
import FotFeaturesSection from './FotFeaturesSection'
import FotLatestBlog from './FotLatestBlog'

function Footer() {
  return (
    <>
     <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
          <FotFirstSection />
          <FotAboutSection />
          <FotFeaturesSection />
          <FotLatestBlog />
      </div>
    </div>
  </footer> 
    </>
  )
}

export default Footer;
