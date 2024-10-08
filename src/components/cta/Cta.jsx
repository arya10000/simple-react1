import { CtaIcon, CtaIcon1} from "../../assets/svg/Icons"

import React from 'react'
import CtaHeading from "./CtaHeading";
import CtaSubHeading from "./CtaSubHeading";
import MeetingBtn from "./MeetingBtn";
import CtaDescription from "./CtaDescription";

function Cta() {
  return (
    <>
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
    <div className="container mx-auto">
    <div className="relative overflow-hidden">
      <div className="-mx-4 flex flex-wrap items-stretch">
        <div className="w-full px-4">
          <div className="mx-auto max-w-[570px] text-center">
            <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
             <CtaHeading />
             <CtaSubHeading />
            </h2>
            <CtaDescription />
            <MeetingBtn />
          </div>
        </div>
      </div>
    </div>
    </div>
    <div>
    <span className="absolute left-0 top-0">
      <CtaIcon />
    </span>
    <span className="absolute bottom-0 right-0">
    <CtaIcon1 />
    </span>
    </div>
    </section>
    </>
  )
}

export default Cta;
