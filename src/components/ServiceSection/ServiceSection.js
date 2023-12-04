import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Services from '../../api/service'
import classnames from 'classnames';
import ServiceSingle from '../ServiceSingle';

const ServiceSection = (props) => {

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


    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (

        <section className="section-wrap bg-[#191919] overflow-hidden z-50" id='service'>
            <div className="absolute left-0 top-[-70%] sm:top-[-40%] -z-10">
                <svg className="fill-[#FFE500]" width="995" height="1495" viewBox="0 0 995 1495" fill="none">
                    <g opacity="0.3" filter="url(#filter0_f_39_4268)">
                        <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4268" x="-500" y="0" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="wraper sm:max-w-[540px] col:max-w[100%]">
                <div className="max-w-[640px] mx-auto text-center text-white mb-[60px] md:mb-[40px]">
                    <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">Popular Services
                    </h2>
                    <p className="base-font text-lg font-normal">Must explain to yotu how all this mistaken idea of
                        denouncing
                        pleasure born and give you
                        a complete account the system</p>
                </div>
                <Nav tabs className='flex col:flex-col-reverse items-center justify-center list-none'>
                    <NavItem>
                        <NavLink
                            className={`${classnames({ active: activeTab === '1' })} nav-link inline-block focus:border-transparent border-tab
                            w-[250px] md:w-[180px] sm:w-[120px] col:w-[150px] h-[65px] md:h-[55px] sm:h-[45px] bg-[#373737] active:bg-transparent 
                             text-center mr-7 md:mr-5 sm:mr-[10px] col:mb-[10px]  col:mr-0 rounded-[38px] font-bold text-[22px] md:text-[16px] sm:text-[14px] leading-[65px] 
                             md:leading-[55px] sm:leading-[35px] p-0 border-2 border-transparent 
                             text-white active:text-[#FFE600] active:border-[#373737]`}
                            onClick={() => { toggle('1'); }}
                        >
                            Design
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={`${classnames({ active: activeTab === '2' })} nav-link inline-block focus:border-transparent border-tab
                            w-[250px] md:w-[180px] sm:w-[120px] col:w-[150px] h-[65px] md:h-[55px] sm:h-[45px] bg-[#373737] active:bg-transparent 
                             text-center mr-7 md:mr-5 sm:mr-[10px] col:mb-[10px] col:mr-0 rounded-[38px] font-bold text-[22px] md:text-[16px] sm:text-[14px] leading-[65px] 
                             md:leading-[55px] sm:leading-[35px] p-0 border-2 border-transparent 
                             text-white active:text-[#FFE600] active:border-[#373737]`}
                            onClick={() => { toggle('2'); }}
                        >
                            Development
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={`${classnames({ active: activeTab === '3' })} nav-link inline-block focus:border-transparent border-tab
                            w-[250px] md:w-[180px] sm:w-[120px] col:w-[150px] h-[65px] md:h-[55px] sm:h-[45px] bg-[#373737] active:bg-transparent 
                             text-center mr-7 md:mr-5 sm:mr-[10px] col:mb-[10px] col:mr-0 rounded-[38px] font-bold text-[22px] md:text-[16px] sm:text-[14px] leading-[65px] 
                             md:leading-[55px] sm:leading-[35px] p-0 border-2 border-transparent 
                             text-white active:text-[#FFE600] active:border-[#373737]`}
                            onClick={() => { toggle('3'); }}
                        >
                            Marketing
                        </NavLink>
                    </NavItem>
                </Nav>
                <div className="mt-[65px] sm:mt-[45px]">

                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="row align-items-center">
                                {Services.slice(0, 3).map((service, srv) => (
                                    <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-[#232221] border-2 border-[#373737] rounded-[12px] 
                                    text-center px-[40px] lg:px-[20px] py-[50px] md:mb-[30px] group" key={srv}>
                                        <div
                                            className="max-w-[120px] max-h-[120px] bg-[#373737]
                                        group-hover:bg-[#59C378] mx-auto leading-[140px] mb-[30px] rounded-[50%] transition-all">
                                            <i className={`fi ${service.icon}  transition-all text-[50px] text-[#FFE600] group-hover:text-white `}></i>
                                        </div>
                                        <h2
                                            className="font-bold font-base-font text-[26px] lg:text-[20px] leading-[31px] text-white mb-[20px] text-center">
                                            {service.sTitle}</h2>
                                        <p className="text-[16px] md:text-[14px] text-[#D8D8D8] my-6 md:my-4">{service.description}</p>
                                        <button onClick={() => handleClickOpen(service)} className="text-center m-auto flex items-center justify-center
                                    font-bold  text-white leading-[19px] group hover:text-[#FFE600] transition-all"><i
                                                className="fi flaticon-right-arrow transition-all mr-7 sm:mr-3"></i> Learn More</button>
                                    </div>
                                ))}
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="row align-items-center">
                                {Services.slice(3, 6).map((service, srv) => (
                                    <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-[#232221] border-2 border-[#373737] rounded-[12px] 
                                    text-center px-[40px] lg:px-[20px] py-[50px] md:mb-[30px] group" key={srv}>
                                        <div
                                            className="max-w-[120px] max-h-[120px] bg-[#373737]
                                        group-hover:bg-[#59C378] mx-auto leading-[140px] mb-[30px] rounded-[50%] transition-all">
                                            <i className={`fi ${service.icon}  transition-all text-[50px] text-[#FFE600] group-hover:text-white `}></i>
                                        </div>
                                        <h2
                                            className="font-bold font-base-font text-[26px] lg:text-[20px] leading-[31px] text-white mb-[20px] text-center">
                                            {service.sTitle}</h2>
                                        <p className="text-[16px] md:text-[14px] text-[#D8D8D8] my-6 md:my-4">{service.description}</p>
                                        <button onClick={() => handleClickOpen(service)} className="text-center m-auto flex items-center justify-center
                                    font-bold  text-white leading-[19px] group hover:text-[#FFE600] transition-all"><i
                                                className="fi flaticon-right-arrow transition-all mr-7 sm:mr-3"></i> Learn More</button>
                                    </div>
                                ))}
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <div className="row align-items-center">
                                {Services.slice(6, 9).map((service, srv) => (
                                    <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-[#232221] border-2 border-[#373737] rounded-[12px] 
                                    text-center px-[40px] lg:px-[20px] py-[50px] md:mb-[30px] group" key={srv}>
                                        <div
                                            className="max-w-[120px] max-h-[120px] bg-[#373737]
                                        group-hover:bg-[#59C378] mx-auto leading-[140px] mb-[30px] rounded-[50%] transition-all">
                                            <i className={`fi ${service.icon}  transition-all text-[50px] text-[#FFE600] group-hover:text-white `}></i>
                                        </div>
                                        <h2
                                            className="font-bold font-base-font text-[26px] lg:text-[20px] leading-[31px] text-white mb-[20px] text-center">
                                            {service.sTitle}</h2>
                                        <p className="text-[16px] md:text-[14px] text-[#D8D8D8] my-6 md:my-4">{service.description}</p>
                                        <button onClick={() => handleClickOpen(service)} className="text-center m-auto flex items-center justify-center
                                    font-bold  text-white leading-[19px] group hover:text-[#FFE600] transition-all"><i
                                                className="fi flaticon-right-arrow transition-all mr-7 sm:mr-3"></i> Learn More</button>
                                    </div>
                                ))}
                            </div>
                        </TabPane>
                    </TabContent>
                </div>

            </div>
            <ServiceSingle open={open} onClose={handleClose} title={state.sTitle} dImg={state.sImgS} sImg1={state.ssImg1} sImg2={state.ssImg2} />
        </section>
    );
}

export default ServiceSection;