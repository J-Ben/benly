import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'
import ts4 from '../../images/testimonial/img-4.jpg'
import ts5 from '../../images/testimonial/img-5.jpg'
import ts6 from '../../images/testimonial/img-6.jpg'

import tshape from '../../images/testimonial/shape.png'


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        tTitle: 'Many desktop publishing packages and editors now use as their.',
        Des: "It is a long established fact that a reader will be distracted by the readable content of page when looking at its layout point of using is that it has more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making look like readable English.",
        Title: 'Cathi Falcon',
        Sub: "Founder",
    },
    {
        id: '02',
        tImg: ts2,
        tTitle: 'Many desktop publishing packages and editors now use as their.',
        Des: "It is a long established fact that a reader will be distracted by the readable content of page when looking at its layout point of using is that it has more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making look like readable English.",
        Title: 'Harry Abraham',
        Sub: "SCG First Company",
    },
    {
        id: '03',
        tImg: ts3,
        tTitle: 'Many desktop publishing packages and editors now use as their.',
        Des: "It is a long established fact that a reader will be distracted by the readable content of page when looking at its layout point of using is that it has more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making look like readable English.",
        Title: 'Benjir Walton',
        Sub: "Merketer",
    },
    {
        id: '04',
        tImg: ts4,
        tTitle: 'Many desktop publishing packages and editors now use as their.',
        Des: "It is a long established fact that a reader will be distracted by the readable content of page when looking at its layout point of using is that it has more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making look like readable English.",
        Title: 'Benjir Walton',
        Sub: "Merketer",
    },
    {
        id: '05',
        tImg: ts5,
        tTitle: 'Many desktop publishing packages and editors now use as their.',
        Des: "It is a long established fact that a reader will be distracted by the readable content of page when looking at its layout point of using is that it has more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making look like readable English.",
        Title: 'Benjir Walton',
        Sub: "Merketer",
    },
    {
        id: '06',
        tImg: ts6,
        tTitle: 'Many desktop publishing packages and editors now use as their.',
        Des: "It is a long established fact that a reader will be distracted by the readable content of page when looking at its layout point of using is that it has more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making look like readable English.",
        Title: 'Benjir Walton',
        Sub: "Merketer",
    },
]

const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className="relative bg-[#2C2C2C] z-50 ">
            <div className="section-wrap col:pt-[130px] overflow-hidden">
                <div className="wraper">
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-3 items-center relative z-20 wpo-testimonial-wrap">
                        <div className="relative w-[474px] h-[469px] col:w-[220px] col:h-[220px] z-10 flex justify-center flex-col mx-auto md:mb-[40px]">
                            <div className="relative w-[250px] h-[250px] col:w-[180px] col:h-[180px] z-10 sm:mx-auto">
                                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={false} arrows={false} fade={true}>
                                    {
                                        testimonial.map((tesmnl, tsm) => (
                                            <div className="relative w-[250px] h-[250px] col:w-[180px] col:h-[180px] rounded-[8px] " key={tsm}>
                                                <img className="rounded-[50%]" src={tesmnl.tImg} alt="" />
                                            </div>
                                        ))
                                    }
                                </Slider>

                                <div className="absolute left-[-35px] top-[-25%]">
                                    <img className="w-[80px] h-[80px] rounded-[50%] object-cover col:w-[60px] col:h-[60px]" src={ts2} alt="" />
                                </div>
                                <div className="absolute left-auto top-[-18%] col:top-[-20%]  right-[-120px] col:right-[-50px]">
                                    <img className="w-[80px] h-[80px] rounded-[50%] object-cover col:w-[60px] col:h-[60px]" src={ts3} alt="" />
                                </div>
                                <div className="absolute left-[-120px] top-auto bottom-0 col:left-[-50px] ">
                                    <img className="w-[80px] h-[80px] rounded-[50%] object-cover col:w-[60px] col:h-[60px]" src={ts4} alt="" />
                                </div>
                                <div className="absolute left-auto top-auto bottom-0 right-[-85px] col:right-[-60px]">
                                    <img className="w-[60px] h-[60px] rounded-[50%] object-cover col:w-[40px] col:h-[40px]" src={ts5} alt="" />
                                </div>
                                <div className="absolute top-auto bottom-[-104px] right-[1px] left-[45%] col:bottom-[-65px]">
                                    <img className="w-[60px] h-[60px] rounded-[50%] object-cover col:w-[40px] col:h-[40px]" src={ts6} alt="" />
                                </div>
                                <div className="absolute w-[130%] h-[130%]  left-[-14%] top-[-16%] rounded-[50%] -z-10 border border-[#ffffff1f]"></div>
                                <div className="absolute w-[160%] h-[160%]  left-[-28%] top-[-30%] rounded-[50%] -z-10 border border-[#ffffff1f]"></div>
                                <div className="absolute w-[190%] h-[190%]  left-[-42%] top-[-45%] rounded-[50%] -z-10 border border-[#ffffff1f]"></div>
                                <div className="absolute top-[50%] left-[30%]  transform -translate-x-1/2 -translate-y-1/2 -z-20">
                                    <svg className="fill-[#FFE600]" width="750" height="750" viewBox="0 0 750 750" fill="none">
                                        <g filter="url(#filter0_f_39_4154)">
                                            <circle r="125" transform="matrix(-1 0 0 1 375 375)" fillOpacity="0.4" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_39_4154" x="0" y="0" width="750" height="750"
                                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                    result="shape" />
                                                <feGaussianBlur stdDeviation="125"
                                                    result="effect1_foregroundBlur_39_4154" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col:mt-[70px]">
                            <div className="slider-nav">
                                <div className="slider-nav">
                                    <Slider
                                        asNavFor={nav1}
                                        ref={(slider2) => setNav2(slider2)}
                                        slidesToShow={1}
                                        dots={true}
                                        swipeToSlide={true}
                                        focusOnSelect={true}
                                    >
                                        {
                                            testimonial.map((tesmnl, tsm) => (
                                                <div className="sm:text-center" key={tsm}>
                                                    <h2 className="font-medium text-[32px] leading-[52px]
                             text-white font-base-font mb-[20px] sm:text-[24px] sm:leading-[35px] sm:mb-[10px]">{tesmnl.tTitle}</h2>
                                                    <p className="font-normal text-[16px] leading-[30px] text-[#D8D8D8] ">{tesmnl.Des}</p>
                                                    <div className="mt-[30px]">
                                                        <h3 className="font-semibold text-[26px] font-base-font leading-[31px]
                                    flex items-center text-white sm:justify-center sm:text-[18px]">{tesmnl.Title},
                                                            <span className="font-normal text-[14px] leading-[17px] text-[#D8D8D8] block ml-[10px] relative top-[3px]">{tesmnl.Sub}</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </Slider>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-2/5 h-[110%] bg-[#262626] top-[-70px] left-0 z-1 clip-your-needful-style md:hidden"></div>
            <div className="absolute right-0 bottom-0">
                <img src={tshape} alt="" />
            </div>
        </section>
    );
}

export default Testimonial;