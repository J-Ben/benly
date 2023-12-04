import React from 'react'
import shape1 from '../../images/about/shape1.png'
import shape2 from '../../images/about/shape2.png'

import icon1 from '../../images/icon/photoshop.svg'
import icon2 from '../../images/icon/illustrator.svg'
import icon3 from '../../images/icon/diamond.svg'


const About2 = (props) => {
    return (
        <section className="section-wrap bg-[#191919] md:pb-[60px] overflow-hidden z-50" id='about'>
            <div className="wraper">
                <div className="grid-rows-1 grid grid-cols-2 md:grid-cols-1 items-center">
                    <div className="relative z-30 p-7 bg-[#222121] rounded-[6px] w-[540px] 2xl:max-w-[500px] lg:max-w-[450px]  md:mx-auto sm:w-[400px] sm:h-[400px]   col:w-[300px] col:h-[300px]">
                        <img className="" src={props.abImg} alt="" />
                        <div className="absolute left-0 top-[5%] w-[110px] h-[110px] p-[20px] bg-white rounded-[25px] md:top-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item">
                            <img className="rounded-[0px] max-w-[100%]" src={icon1} alt="" />
                        </div>
                        <div className="absolute left-auto right-0 top-[5%] w-[110px] h-[110px] p-[20px] bg-white rounded-[25px] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item">
                            <img src={icon2} alt="" />
                        </div>
                        <div className="absolute top-auto right-[10%] bottom-0 w-[110px] h-[110px] p-[20px] bg-white rounded-[25px] md:right-0 md:bottom-[40px] col:left-auto col:right-0 col:top-auto col:bottom-[25px]  md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px]  col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="absolute left-0 bottom-[5%] bg-white  rounded-[40px] py-[0] px-[20px]  flex items-center floating-item">
                            <div className="icon">
                                <i className="fi flaticon-verified mr-[10px] text-[50px] text-[#59C378] col:text-[40px]"></i>
                            </div>
                            <div className="p-text">
                                <h3 className="text-[25px] mb-0 text-[#202020] col:text-[20px]"><span className="odometer" data-count="1500">00</span>+</h3>
                                <p className="text-[15px] mb-0 text-[#585858]">Complete Project</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-right z-20 md:mt-7">
                        <div className="max-w-[640px] mx-auto text-left text-white mb-[60px] md:mb-[40px]">
                            <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[20px]">My
                                Advantage</h2>
                            <p className="base-font text-lg font-normal">Must explain to you how all this mistaken idea of
                                denouncing pleasure and praising pain was born and I will give you a complete account
                                the system and expound the actual and praising pain was born.</p>
                        </div>
                        <ul className="flex flex-wrap  mx-[-15px]">
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#acac39] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="98">98</span>%</h3>
                                    <p className="font-normal text-[16px] text-[#FFE600]">Figma</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#59c37899] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="92">92</span>%</h3>
                                    <p className="font-normal text-[16px] text-[#59C378]">Sketch</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#dd584f99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="88">88</span>%</h3>
                                    <p className="font-normal text-[16px] text-[#DD584F]">Photoshop</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#ff9a0099] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="72">72</span>%</h3>
                                    <p className="font-normal text-[16px] text-[#FF9A00]">Illustrator</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#00a9ff99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="43">43</span>%</h3>
                                    <p className="font-normal text-[16px] text-[#00A9FF]">WordPress</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#9e00ff99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="40">40</span>%</h3>
                                    <p className="font-normal text-[16px] text-[#AD00FF]">ReactJS</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="absolute top-[50px] left-0  z-0">
                <img src={shape1} alt="" className="" />
            </div>
            <div className="absolute right-0 bottom-0  z-0">
                <img src={shape2} alt="" className="" />
            </div>
            <div className="absolute bottom-[-95%] left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 z-0">
                <svg className="fill-[#FFE500]" width="995" height="1495" viewBox="0 0 995 1495" fill="none">
                    <g opacity="0.3" filter="url(#filter0_f_39_4267)">
                        <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500"></circle>
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4267" x="-500" y="0" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267"></feGaussianBlur>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="absolute bottom-[-95%] right-[-10%]  z-10">
                <svg className="fill-[#AD00FF]" width="1252" height="1901" viewBox="0 0 1252 1901" fill="none">
                    <g opacity="0.15" filter="url(#filter0_f_39_4265)">
                        <circle cx="950" cy="950.004" r="450"></circle>
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4265" x="-0.00012207" y="0.00402832" width="1900" height="1900"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4265"></feGaussianBlur>
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default About2;