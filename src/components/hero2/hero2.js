import React from "react";
import Slider from "react-slick";
import { Link } from 'react-scroll'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'


const settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    fade: true
};

const Hero2 = () => {
    return (
        <section className="wpo-hero-slider bg-[#131313] w-full h-[1000px] lg:h-[900px]  md:h-[600px] sm:h-[500px]  relative z-40 overflow-hidden">
            <div className="hero-container">
                <div className="hero-wrapper">
                    <Slider {...settings}>
                        <div className="hero-slide  bg-[#131313] w-full h-[1000px] lg:h-[900px]  md:h-[600px] sm:h-[500px]  relative z-40 overflow-hidden">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                                <div className="wraper">
                                    <div className="relative h-[1000px] lg:h-[900px]  md:h-[600px] sm:h-[500px]">
                                        <div className="w-[660px] lg:w-[470px] md:w-full  md:text-center absolute top-1/2 left-0 transform  -translate-y-1/2">
                                            <h2 className="text-white text-[90px] capitalize font-bold leading-[100px] mb-[10px]  lg:text-[65px] lg:mb-[10px] lg:leading-[75px] md:text-[45px] md:leading-[45px]  col:text-[35px] col:leading-[35px] col:mb-[0px]">
                                                <span className="block text-[60px] text-[#FFE600] lg:text-[45px] md:text-[35px] col:text-[35px] col:leading-[35px] col:mb-[0px]">Hello,</span>
                                                I am Ronald.</h2>
                                            <h5 className="text-[#59C378] text-[32px] capitalize font-semibold leading-[39px] mb-[20px] lg:text-[28px] md:text-[22px] md:mb-[10px] col:text-[20px]  col:mb-[5px]">UI/UX Designer</h5>
                                            <p className="text-white text-[19px] capitalize font-normal leading-[33px] mb-[30px] col:text-[15px] col:leading-[28px] md:mx-[80px] col:mx-0">Must explain to how all this mistaken idea denouncing pleasure pain
                                                the system and expound the actua.</p>
                                            <div className="slide-btn"><Link className="theme-btn" to="contact" spy={true} smooth={true} duration={500}>Hire Me</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-slide bg-[#131313] w-full h-[1000px] lg:h-[900px]  md:h-[600px] sm:h-[500px]  relative z-40 overflow-hidden">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                                <div className="wraper">
                                    <div className="relative h-[1000px] lg:h-[900px]  md:h-[600px] sm:h-[500px]">
                                        <div className="w-[660px] lg:w-[470px] md:w-full  md:text-center absolute top-1/2 left-0 transform  -translate-y-1/2">
                                            <h2 className="text-white text-[90px] capitalize font-bold leading-[100px] mb-[10px]  lg:text-[65px] lg:mb-[10px] lg:leading-[75px] md:text-[45px] md:leading-[45px]  col:text-[35px] col:leading-[35px] col:mb-[0px]">
                                                <span className="block text-[60px] text-[#FFE600] lg:text-[45px] md:text-[35px] col:text-[35px] col:leading-[35px] col:mb-[0px]">Hello,</span>
                                                I am Ronald.</h2>
                                            <h5 className="text-[#59C378] text-[32px] capitalize font-semibold leading-[39px] mb-[20px] lg:text-[28px] md:text-[22px] md:mb-[10px] col:text-[20px]  col:mb-[5px]">UI/UX Designer</h5>
                                            <p className="text-white text-[19px] capitalize font-normal leading-[33px] mb-[30px] col:text-[15px] col:leading-[28px] md:mx-[80px] col:mx-0">Must explain to how all this mistaken idea denouncing pleasure pain
                                                the system and expound the actua.</p>
                                            <div className="slide-btn"><Link className="theme-btn" to="contact" spy={true} smooth={true} duration={500}>Hire Me</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Hero2;