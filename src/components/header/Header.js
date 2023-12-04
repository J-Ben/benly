import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "../../images/icon/mail.svg";
import cv from "../../images/Full_Stack_ CV__Ben_MK_2023.pdf";

const Header = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-site-header bg-transparent  absolute left-0 top-0 w-full z-50 md:py-[20px]">
      <h1 className="hidden">section heading hidden</h1>
      <div className="wraper">
        <div className="flex items-center justify-between">
          <MobileMenu />
          <div className="w-[195px] md:w-[280px] sm:w-[200px] col:w-[50px]">
            <Link
              className="text-[35px] col:text-[25px] font-bold flex items-center md:justify-center text-white"
              to="/"
            >
              <img className=" rounded-[50%] w-16 mr-[10px] " src={Logo} alt=""/>
              Ben-J.
            </Link>
          </div>
          <ul className="md:hidden">
            <li className="relative inline-block group">
              <Link
                // activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="relative text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                    before:opacity-1 before:visible before:transition-all before:rounded-[3px]
                    "
              >
                Accueil
              </Link>
              {/* <ul
                className="absolute w-[240px]  left-0 top-[110%] p-[20px] z-[111]  bg-[#fff] shadow-[#3e419f17]  transition-all  opacity-0 invisible
                    group-hover:opacity-100  group-hover:top-full group-hover:visible"
              >
                <li>
                  <NavLink
                    onClick={ClickHandler}
                    to="/home"
                    className="text-[16px] lg:text-[14px] inline-block py-[5px] capitalize text-[#002642] group relative overflow-hidden font-bold transition-all 
                            after:absolute after:left-0 after:bottom-[5px] after:w-0 after:h-[1px] after:content after:bg-[#59C378]  after:transition-all 
                            hover:after:w-full"
                  >
                    Main Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={ClickHandler}
                    to="/home2"
                    className="text-[16px] lg:text-[14px] inline-block py-[5px] capitalize text-[#202020] group relative overflow-hidden font-medium transition-all 
                            after:absolute after:left-0 after:bottom-[5px] after:w-0 after:h-[1px] after:content after:bg-[#59C378]  after:transition-all 
                            hover:after:w-full"
                  >
                    Home Style 2
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={ClickHandler}
                    to="/home3"
                    className="text-[16px] lg:text-[14px] inline-block py-[5px] capitalize text-[#202020] group relative overflow-hidden font-medium transition-all 
                            after:absolute after:left-0 after:bottom-[5px] after:w-0 after:h-[1px] after:content after:bg-[#59C378]  after:transition-all 
                            hover:after:w-full"
                  >
                    Home Style 3
                  </NavLink>
                </li>
              </ul> */}
            </li>
            <li className="relative inline-block">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                    before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                     hover:before:opacity-100 hover:before:visible
                    "
              >
                A propos 
              </Link>
            </li>
            <li className="relative inline-block group">
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
                className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                    before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                     hover:before:opacity-100 hover:before:visible
                    "
              >
                Expérience
              </Link>{" "}
            </li>
            {/* <li className="relative inline-block group">
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                    before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                     hover:before:opacity-100 hover:before:visible
                    "
              >
                Portfolio
              </Link>
            </li> */}
            <li className="relative inline-block">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                    before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                     hover:before:opacity-100 hover:before:visible
                    "
              >
                Contact
              </Link>
            </li>
            {/* <li className="relative inline-block group">
              <Link
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                duration={500}
                className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                    before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                     hover:before:opacity-100 hover:before:visible
                    "
              >
                Blog
              </Link>
            </li> */}
          </ul>
          <a className="theme-btn col:w-50px" download="My Cv" href={cv}>
            <img
              className="hidden overflow-hidden opacity-0"
              alt="ImageName"
              src={cv}
            />
            Mon CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
