import React, { useState } from 'react';
import Slider from "react-slick";
import { Button } from '@material-ui/core'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogs from '../../api/blogs'
import BlogSingle from "../BlogSingle";

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const BlogSection = () => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({
    })

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }
    return (

        <section className="wpo-blog-section bg-[#262626] relative overflow-hidden z-10 pb-[360px] pt-[120px] md:py-[90px] sm:py-[80px]" id='blog'>
            <div className="wraper">
                <div className="max-w-[640px] mx-auto text-center text-white mb-[60px] md:mb-[40px]">
                    <h2 className="base-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">Latest News</h2>
                    <p className="base-font text-lg font-normal px-12">Must explain to you how all this mistaken idea
                        pleasure
                        born and give you a complete account.</p>
                </div>
                <div className="wpo-blog-slide">
                    <Slider {...settings}>
                        {blogs.map((blog, bl) => (
                            <div className="blog-item" key={bl}>
                                <div>
                                    <img className="w-full" src={blog.screens} alt="" />
                                </div>
                                <div className="p-7 pl-0">
                                    <span className="base-font inline-block text-white px-3 py-1 bg-[#3C3C3C] text-[14px] ">{blog.create_at}</span>
                                    <h2 onClick={() => handleClickOpen(blog)}
                                        className="cursor-pointer text-white transition hover:text-[#3faf60] text-[25px] font-semibold leading-9 mt-4 mb-5 font-base-font xl:text-[22px] md:text-[20px]">
                                        {blog.title}
                                    </h2>
                                    <Button
                                        className="details font-base-font text-white transition font-medium text-[16px] inline-block pl-[30px] leading-5 relative before:absolute before:transition before:content-['\e628'] before:font-[themify] before:left-[-5px] before:top-0 hover:text-[#FFE600] hover:before:left-0"
                                        onClick={() => handleClickOpen(blog)}>
                                        Post Details
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="absolute right-0 bottom-[-75%]  -z-10">
                <svg className="fill-[#59c378]" width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                    <g filter="url(#filter0_f_39_3832)">
                        <circle cx="803" cy="803" r="303" fill="#59C378" fillOpacity="0.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_3832" x="0" y="0" width="1606" height="1606"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <BlogSingle open={open} onClose={handleClose} title={state.title} bImg={state.screens} create_at={state.create_at} author={state.author} comment={state.comment} />
        </section>
    );
}

export default BlogSection;