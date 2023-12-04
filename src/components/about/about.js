import React from 'react'
import shape1 from '../../images/about/shape1.png'
import shape2 from '../../images/about/shape2.png'


const About = (props) => {
    return (
        <section className="section-wrap bg-[#191919] md:pb-[60px] overflow-hidden z-50" id='about'>
            <div className="wraper">
                <div className="grid-rows-1 grid grid-cols-2 md:grid-cols-1 items-center">
                    <div className="relative z-20 md:max-w-[480px]">
                        <div className="max-w-[350px] col:max-w-[350px]  text-center rounded-[10px] pb-[180px] bg-gradient-to-b to-[#1B1B19] from-[#2E2C1F] xl:ml-[20px] col:ml-0">
                            <h2 className="text-[110px] col:text-[90px] text-[#FFE600] font-bold base-font">60%</h2>
                            <span className="text-white text-[48px] font-normal ">Front-end</span>
                        </div>
                        <div className="absolute right-[170px] lg:right-[80px] col:right-0  bottom-10 max-w-[300px] col:max-w-[350px] px-[20px] py-[20px] rounded-[12px] z-10 bg-transparent flex items-center justify-center 
                before:absolute before:content before:left-0 before:top-0 before:w-full before:h-full before:opacity-[1] before:-z-20 before:rounded-[12px] before:bg-gradient-to-l to-[#939393] from-[#1c1a1a4d] 
                after:absolute after:left-[2px] after:top-[2px] after:w-[98%] after:h-[98%] after:content after:bg-[#2D2B1F] after:opacity-[.85] after:-z-10 after:rounded-[12px]">
                            <h3 className="mr-[15px] w-[50%] text-[45px]  text-[#59C378] font-bold base-font flex items-center">
                                <span className="odometer" data-count="100">40</span>%</h3>
                            <p className="text-[25px] w-[70%] text-white font-normal base-font">back end</p>
                        </div>
                    </div>
                    <div className="about-right z-20 md:mt-7">
                        <div className="max-w-[640px] mx-auto text-left text-white mb-[60px] md:mb-[40px]">
                            <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">A propos</h2>
                            <p className="base-font text-lg font-normal">

                            Mon projet professionnel consiste à viser une carrière de Technical Lead. 
                            J'ai pour objectif une montée en compétences en développement web full stack, en cloud computing et en gestion de projet et leadership. Pour ce faire, je privilégie des environnements stimulants et riche en opportunités.

                            </p>
                        </div>
                        <ul className="flex flex-wrap  mx-[-15px]">
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#acac39] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="98">92</span>%</h3>
                                    <p className="font-normal text-[16px] text-[#FFE600]">React JS</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#59c37899] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="92">73</span>%</h3>
                                    <p className="font-normal text-[16px] text-[#59C378]">Node JS</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#dd584f99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="88">90</span>%</h3>
                                    <p className="font-normal text-[16px] text-[#DD584F]">TypeScript</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#78c04e] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="72">60</span>%</h3>
                                    <p className="font-normal text-[16px] text-[#78c04e]">Spring Boot</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#ff0084] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="43">67</span>%</h3>
                                    <p className="font-normal text-[16px] text-[#ff0084]">Angular</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#9e00ff99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="40">80</span>%</h3>
                                    <p className="font-normal text-[16px] text-[#AD00FF]">JavaScript</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="absolute top-[50px] left-0  z-0">
                <img src={shape1} alt=""/>
            </div>
            <div className="absolute right-0 bottom-0  z-0">
                <img src={shape2} alt=""/>
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

export default About;