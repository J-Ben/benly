import React from "react";
import { Link } from 'react-scroll'
import hero1 from '../../images/slider/slide-3.jpg'

const Hero3 = () => {
    return (
        <section className="wpo-hero-style-3 bg-[#131313] h-[950px] md:h-[700px] sm:h-[500px] relative z-40 overflow-hidden flex items-start justify-center md:justify-start md:pt-[150px] md:pb-[100px] flex-col">
            <div className="z-50 w-full">
                <div className="slider-image">
                    <img src={hero1} alt="hero" className="slider-bg"/>
                </div>
                <div className="wraper">
                    <div className="w-[660px] sm:w-[100%]">
                        <h2 className="text-white text-[90px] capitalize font-bold leading-[100px] mb-[10px]  lg:text-[65px] lg:mb-[10px] lg:leading-[75px] md:text-[45px] md:leading-[45px]  col:text-[35px] col:leading-[35px] col:mb-[0px]">
                            <span className="block text-[60px] text-[#FFE600] lg:text-[45px] md:text-[35px] col:text-[35px] col:leading-[35px] col:mb-[0px]">Hello,</span>
                            I am Ronald.</h2>
                        <h5 className="text-[#59C378] text-[32px] capitalize font-semibold leading-[39px] mb-[20px] lg:text-[28px] md:text-[22px] md:mb-[10px] col:text-[20px]  col:mb-[5px]">UI/UX Designer</h5>
                        <p className="text-white text-[19px] capitalize font-normal leading-[33px] mb-[30px] col:text-[15px] col:leading-[28px]  col:mx-0">Must explain to how all this mistaken idea denouncing pleasure pain
                            the system and expound the actua.</p>
                        <div className="slide-btn"><Link className="theme-btn" to="contact" spy={true} smooth={true} duration={500}>Hire Me</Link></div>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 bottom-0 w-full overflow-hidden ">
                <svg className=" fill-[#191919]" x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
                </svg>
            </div>
        </section>
    )
}

export default Hero3;