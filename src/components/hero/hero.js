import React from "react";
import { Link } from 'react-scroll'

import hero1 from '../../images/slider/1.jpg'
import profil_g_ben from '../../images/ben/profil_g_ben.png'
import profil_g_ben_bis from '../../images/ben/profil_g_ben_bis.png'

import icon1 from '../../images/icon/react.svg'
import icon2 from '../../images/icon/angular.svg'

import icon3 from '../../images/icon/java.svg'

import shape1 from '../../images/slider/line-1.png'
import shape2 from '../../images/slider/line-2.png'



const Hero = () => {
    return (
        <section className="static-hero bg-[#131313] h-[940px] xl:h-[900px] lg:h-[650px] md:h-[950px] sm:h-[890px] col:h-[800px]  relative z-40 overflow-hidden " id='home'>
            <div className="flex items-start justify-center md:justify-start md:pt-[150px] md:pb-[100px] flex-col w-full h-full bg-cover bg-center  text-left z-50">
                <div className="wraper">
                    <div className="flex-1">
                        <div className="w-[660px] lg:w-[470px]  md:w-full  md:text-center">
                            <h2 className="text-white text-[90px] capitalize font-bold leading-[100px] mb-[10px]  lg:text-[65px] lg:mb-[10px] lg:leading-[75px] md:text-[45px] md:leading-[45px]  col:text-[35px] col:leading-[35px] col:mb-[0px]">
                                <span className="block text-[60px] text-[#59C378] lg:text-[45px] md:text-[35px] col:text-[35px] col:leading-[35px] col:mb-[0px]">Salut ! C'est...</span>
                                 Ben-Jamin MK</h2>
                            <h5 className="text-[#FFE600] text-[32px] capitalize font-semibold leading-[39px] mb-[20px] lg:text-[28px] md:text-[22px] md:mb-[10px] col:text-[20px]  col:mb-[5px]">Développeur Full stack</h5>
                            <p className="text-white text-[19px]   font-normal leading-[33px] mb-[30px] col:text-[15px] col:leading-[28px] md:mx-[80px] col:mx-0">
                                Parlez-moi de TypeScript, React, Angular, Java, Spring Boot, Node JS, mais aussi d'agilité, de proactivité et de curiosité.
                                </p>
                            <div className="slide-btn"><Link className="theme-btn" to="contact" spy={true} smooth={true} duration={500}>Me contacter</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-[53%] rounded-[50%] right-[200px] z-10 transform -translate-y-1/2 2xl:max-w-[500px] lg:max-w-[450px]  lg:top-[54%] 2xl:right-[80px] xl:right-[30px] lg:right-[50px] md:top-[74%] md:mx-auto md:right-auto md:left-1/2 md:-translate-x-1/2 sm:top-[75%] sm:w-[400px] sm:h-[400px] sm:left-1/2 sm:m-0 col:top-[75%] col:w-[300px] col:h-[300px]">
                <img className="rounded-[50%] " src={profil_g_ben_bis} alt=""/>
                    <div className="absolute left-0 top-[20%] w-[110px] h-[110px] p-[20px] bg-white rounded-[25px] md:top-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item">
                        <img className="rounded-[0px] max-w-[100%]" src={icon1} alt=""/>
                    </div>
                    <div className="absolute left-auto right-0 top-[20%] w-[110px] h-[110px] p-[20px] bg-white rounded-[25px] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item">
                        <img src={icon2} alt=""/>
                    </div>
                    <div className="absolute top-auto right-[10%] bottom-0 w-[110px] h-[110px] p-[20px] bg-white rounded-[25px] md:right-0 md:bottom-[40px] col:left-auto col:right-0 col:top-auto col:bottom-[25px]  md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px]  col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item">
                        <img src={icon3} alt=""/>
                    </div>
                    <div className="absolute left-0 bottom-[5%] bg-white  rounded-[40px] py-[0] px-[20px]  flex items-center floating-item">
                    <img src={icon3} alt=""/>
                        {/* <div className="icon">
                            <i className="fi flaticon-verified relative top-[8px] mr-[10px] text-[50px] text-[#59C378] col:text-[40px]"></i>
                        </div>
                        <div className="p-text">
                            <h3 className="text-[25px] mb-0 text-[#202020] col:text-[20px]"><span className="odometer" data-count="1500">1500</span>+</h3>
                            <p className="text-[15px] mb-0 text-[#585858]">Complete Project</p>
                        </div> */}
                    </div>
            </div>

            <div className="absolute top-0 left-0 -z-10">
                <svg className=" fill-[#FF4155]" width="1038" height="938" viewBox="0 0 1038 938" fill="none">
                    <g opacity="0.5" filter="url(#filter0_f_39_4392)">
                        <circle cx="290.5" cy="282.5" r="247.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4392" x="-457" y="-465" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4392" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="absolute top-[50%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 -z-10">
                <svg className="fill-[#FFE600]" width="1295" height="938" viewBox="0 0 1295 938" fill="none">
                    <g opacity="0.4" filter="url(#filter0_f_39_4393)">
                        <circle cx="647.5" cy="561.5" r="247.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4393" x="0" y="-86" width="1295" height="1295"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4393" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="absolute top-0 right-0 -z-10">
                <svg className="fill-[#48C5EA]" width="752" height="747" viewBox="0 0 752 747" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4394)">
                        <circle cx="647.5" cy="99.5" r="247.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4394" x="0" y="-548" width="1295" height="1295"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4394" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="absolute left-0 bottom-0 -z-10">
                <img src={shape1} alt=""/>
            </div>
            <div className="absolute right-0 top-0 -z-10">
                <img src={shape2} alt=""/>
            </div>
        </section>
    )
}

export default Hero;