import { useState, useEffect, Fragment } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Nav from "../Nav";
import Goto from "../../../components/atoms/Goto";
import { StarIcon } from "@heroicons/react/24/solid";

import { Tilt } from 'react-tilt'

import { Carousel } from 'react-carousel3';
import react from "../../../assets/img/react-svgrepo-com.png"
import reactjs from "../../../assets/img/reacttemplate-svgrepo-com.png"
import css from "../../../assets/img/css-svgrepo-com.png"
import node from "../../../assets/img/nodejs-svgrepo-com (1).png"
import aws from "../../../assets/img/aws-svgrepo-com.png"
import nodejs from "../../../assets/svg/nodejs-1-logo-svgrepo-com.svg"
import typescript from "../../../assets/img/typescript-svgrepo-com (1).png"
import svelte from "../../../assets/img/svelte-svgrepo-com.png"
import { TypeAnimation } from 'react-type-animation';

const style = {
  width: 297,
  height: 296,
};

const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 35,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
const defaultOptions2 = {
  reverse: true,  // reverse the tilt direction
  max: 35,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 500,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: "Y",   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


export default function HeaderMain() {
  const [openNav, setOpenNav] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center  text-lg  text-teal-50">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-lg  text-teal-50">
          CV
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          <svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_31_141)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15 28.7503C15 28.0594 15.5591 27.5003 16.25 27.5003C16.9409 27.5003 17.5 28.0594 17.5 28.7503C17.5 29.4413 16.9409 30.0003 16.25 30.0003C15.5591 30.0003 15 29.4413 15 28.7503ZM27.2913 38.6063C26.958 38.7015 26.6138 38.7698 26.25 38.7698C24.1784 38.7698 22.5 37.0914 22.5 35.0198V30.4739C22.5 28.9041 23.5077 27.5711 24.906 27.0803C27.5909 26.1783 30 23.9127 30 21.2503V18.75C30 17.5653 29.5166 16.4621 28.75 15.5182V12.6953C28.75 11.315 27.6306 10.8423 26.25 11.6409L24.3347 12.7484C23.7213 12.5895 23.1018 12.5 22.5 12.5H17.5C16.8985 12.5 16.2787 12.5895 15.6653 12.7484L13.75 11.6409C12.3697 10.8423 11.25 11.315 11.25 12.6953V15.5182C10.4834 16.4621 10 17.5653 10 18.75V21.2503C10 23.0691 11.1319 24.7025 12.7014 25.845L12.6998 25.8474C13.0258 26.0708 13.2424 26.448 13.2424 26.8752C13.2424 27.5649 12.6818 28.1252 11.9924 28.1252C11.6393 28.1252 11.3226 27.9775 11.0955 27.742C8.98469 26.1429 7.5 23.8309 7.5 21.2503V18.75C7.5 17.3029 7.96969 15.9393 8.75 14.7363V11.015C8.75 8.25438 10.9879 7.30891 13.75 8.90594L15.8954 10.1471C16.4304 10.0562 16.9666 10 17.5 10H22.5C23.0334 10 23.5694 10.0562 24.1046 10.1471L26.25 8.90594C29.0124 7.30899 31.25 8.25438 31.25 11.015V14.7363C32.03 15.9393 32.5 17.3029 32.5 18.75V21.2503C32.5 24.9698 29.4336 28.1363 25.8179 29.4034C25.8136 29.407 25.8094 29.4168 25.8032 29.418C25.3332 29.5987 25 30.0528 25 30.5863V35.0198C25 35.7108 25.5591 36.2698 26.25 36.2698C26.3544 36.2698 26.4502 36.2406 26.5466 36.2161C32.9663 33.6258 37.5 27.3489 37.5 20C37.5 10.3348 29.6655 2.5 20 2.5C10.3348 2.5 2.5 10.3348 2.5 20C2.5 27.6102 7.36359 34.0677 14.1501 36.4762C14.1848 36.4798 14.2166 36.4945 14.2529 36.4945C14.6652 36.4945 14.9999 36.1588 14.9999 35.7474C14.9999 35.3348 14.6652 35.0004 14.2529 35.0004C14.2441 35.0004 14.2441 34.993 14.238 34.9894C10.0848 34.8783 10.0802 30.0004 8.75 30.0004C8.05906 30.0004 7.5 29.4413 7.5 28.7504C7.5 28.0595 8.05906 27.5004 8.75 27.5004H9.37406C11.8756 27.5004 11.5182 32.5004 15 32.5004C16.3803 32.5004 17.5 33.6198 17.5 35.0004V37.1879C17.5 38.3952 16.5213 39.3754 15.3122 39.3754C15.1803 39.3754 15.0562 39.3485 14.9304 39.3241C6.34398 37.0791 0 29.2911 0 20C0 8.95445 8.95445 0 20 0C31.0455 0 40 8.95445 40 20C40 28.4695 34.7272 35.6913 27.2913 38.6063Z" fill="#E7FFFB" />
            </g>
            <defs>
              <clipPath id="clip0_31_141">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          <svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.875 37.5H30.6257C29.112 37.5 27.8505 36.4252 27.5623 34.9969C27.541 34.9969 27.5215 34.9999 27.5001 34.9999V23.6879C27.5001 22.3409 26.3807 21.2507 25.0002 21.2507C23.6195 21.2507 22.5002 22.3409 22.5002 23.6879V34.3762C22.5002 35.1385 22.2152 35.8252 21.7628 36.369C21.5144 36.745 21.0902 36.9928 20.6062 36.9928C19.8396 36.9928 19.2188 36.372 19.2188 35.6054C19.2188 35.2001 19.3952 34.8388 19.6741 34.5849C19.8762 34.3621 20.0007 34.0734 20.0007 33.7511V23.5713C20.0007 20.9089 22.2388 18.75 25.0001 18.75C27.7612 18.75 30.0006 20.9089 30.0006 23.5713V31.964C30.0006 32.0537 29.9921 32.1313 29.9866 32.2136C29.9909 32.2123 29.9963 32.2123 30.0006 32.2105V33.7511C30.0006 34.4409 30.5597 34.9999 31.2506 34.9999H36.25C36.9409 34.9999 37.5 34.4409 37.5 33.7511V22.5008C37.5 22.4068 37.489 22.317 37.4695 22.2291C37.1484 16.8005 32.8138 12.4992 27.5001 12.4992C25.2943 12.4992 23.2631 13.2475 21.6127 14.5037C21.6066 14.5006 21.5999 14.5019 21.5871 14.5116C21.4143 14.651 21.1988 14.7269 20.9768 14.7265C20.4366 14.7265 20.0009 14.2888 20.0009 13.7493C20.0009 13.6822 19.9969 13.6473 19.9898 13.6376C19.9322 13.0009 19.4023 12.4992 18.7509 12.4992H15.0003C13.62 12.4992 12.5001 13.6192 12.5001 14.9999V33.7511C12.5001 33.8634 12.5199 33.9715 12.5477 34.0747C12.5158 34.172 12.4998 34.2738 12.5001 34.3762C12.5001 36.1016 11.1015 37.5 9.37477 37.5H3.12523C1.40016 37.5 0 36.1016 0 34.3762V13.1242C0 11.3988 1.40016 10.0004 3.12523 10.0004H6.25055C8.32055 10.0004 9.99961 8.32125 9.99961 6.24961C9.99961 4.17805 8.32055 2.49891 6.25055 2.49891C4.1793 2.49891 2.50031 4.17805 2.50031 6.24961C2.50031 6.94055 1.94125 7.49961 1.25 7.49961C0.560625 7.49961 0 6.94055 0 6.24961C0 2.79734 2.79875 0 6.25055 0C9.70266 0 12.4999 2.79734 12.4999 6.24961C12.4999 6.56641 12.4691 6.87461 12.423 7.17922C12.413 7.23781 12.4075 7.2982 12.3962 7.3568C12.3416 7.66078 12.2674 7.95984 12.1691 8.24672C12.1652 8.26078 12.1581 8.27359 12.1539 8.28758C11.9411 8.90195 11.6337 9.47938 11.243 9.99906C10.1034 11.514 8.29406 12.4991 6.25063 12.4991H3.75023C3.0593 12.4991 2.50023 13.0601 2.50023 13.7491V33.7509C2.50023 34.4407 3.0593 34.9998 3.75023 34.9998H10.0627C10.021 34.7945 9.99983 34.5855 9.99953 34.376V14.9999C9.99953 12.2386 12.2392 10.0004 15.0001 10.0004H19.3756C20.1477 10.0004 20.8496 10.2848 21.3941 10.7517C21.4008 10.756 21.4075 10.7487 21.4148 10.7541C21.6405 10.9486 21.9287 11.0552 22.2266 11.0545C22.3976 11.0545 22.5599 11.0209 22.707 10.9586C22.7515 10.9391 22.7784 10.9421 22.804 10.9452C24.2554 10.3507 25.8337 10.0003 27.4999 10.0003C33.9795 10.0003 39.3065 14.9309 39.937 21.2434C39.9793 21.4515 40.0004 21.6633 39.9998 21.8757V34.3762C40 36.1016 38.6017 37.5 36.875 37.5ZM16.2505 34.9999C16.9398 34.9999 17.5005 35.5602 17.5005 36.2499C17.5005 36.9409 16.9399 37.5 16.2505 37.5C15.5595 37.5 15.0002 36.9409 15.0002 36.2499C15.0002 35.5602 15.5596 34.9999 16.2505 34.9999Z" fill="#E7FFFB" />
          </svg>
        </a>
      </Typography>
    </ul>
  );

  return (

    <div className="relative ">
      <Nav />

      <svg className="absolute -z-10" viewBox="0 0 1727 619" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M516.338 215C303.06 215 97.9844 326.5 0 433V0H1727V396C1727 430.5 1655.41 619 1386.08 619C1116.74 619 847.161 215 516.338 215Z" fill="url(#paint0_linear_3_29)" />
        <defs>
          <linearGradient id="paint0_linear_3_29" x1="856" y1="-145" x2="856" y2="619" gradientUnits="userSpaceOnUse">
            <stop stop-color="#59C6A4" />
            <stop offset="1" stop-color="#3C98AC" />
          </linearGradient>
        </defs>
      </svg>
      <div className="  -z-50 flex flex-col-reverse md:grid md:grid-cols-2 gap-4 bg-transparent px-12">
        <div className=" md:visible sm:pt-16 md:pt-52">
          <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
            <div
              className="w-auto"
              style={{

                justifyContent: 'center',
              }}
            >
              <Carousel height={260} width={680} yOrigin={42} yRadius={48} autoPlay={true}>
                <div key={1} style={style}>
                  <img alt="" src={react} width="125" className=" " />
                </div>
                <div key={2} style={style}>
                  <img alt="" src={css} width="125" className=" " />
                </div>
                <div key={4} style={style}>
                  <img alt="" src={aws} width="125" className=" " />
                </div>
                <div key={4} style={style}>
                  <img alt="" src={reactjs} width="125" className=" " />
                </div>
                <div key={5} style={style}>
                  <img alt="" src={typescript} width="125" className=" " />
                </div>
                <div key={6} style={style}>
                  <img alt="" src={nodejs} width="125" className=" " />
                </div>
                <div key={7} style={style}>
                  <img alt="" src={svelte} width="125" className=" " />
                </div>

              </Carousel>
            </div>

          </Card>
        </div>
        <div className=" shake-vertical pt-16 md:pt-44 text-green-100 text-center sm:text-right">
          <Typography variant="h1" className="text-[#FFFFFF] md:text-5xl" >Ben-Jamin MK</Typography>
          <Typography variant="h5" className="text-[#F5F5F5] font-extralight mb-2 md:text-2xl	">FullStack Developper & Cloud Lover</Typography>
          <Button onClick={handleOpen} className="bg-[#D7FFF2] text-[#3CAC89] font-semibold	text-sm px-4 py-1.5">Download my CV</Button>
        </div>
      </div>

      <Goto twAnimation="animate-bounce" />
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Currio to know more ? </DialogHeader>
        <DialogBody divider>
          <Typography variant="h3" className="text-[#3CAC89] font-extr">
            Do not panic, I am preparing you something so amazing that you will enjoy it.

          </Typography>

        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

    </div>
  );
}
