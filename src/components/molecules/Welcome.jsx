import { Typography } from '@material-tailwind/react'
import React from 'react'
import Goto from '../atoms/Goto'

const Welcome = () => {
    return (
        <div className='py-32   w-full flex  flex-col item-center justify-center'>
            <div className='flex flex-col items-center justify-center mb-10'>
                <Typography className="text-[#59C6A4] text-5xl font-extralight flex ">I welcome you in

                </Typography>
                <Typography className="text-[#59C6A4] text-5xl font-extralight flex ">
                    <Typography className="text-[#59C6A4] text-5xl font">my Development </Typography>
                    <Typography className="text-[#59C6A4] text-5xl font-extrabold ml-2">Land </Typography>
                    ...
                </Typography>
                <Typography className="text-[#59C6A4] flex text-8xl  font-semibold mt-6">
                    My
                    <Typography className="text-[#FFB2B2] text-8xl mx-4 font-semibold">love</Typography>
                    coding
                </Typography>
                <Typography className="text-[#59C6A4] flex text-8xl font-semibold">
                    story
                </Typography>
            </div>
            <svg className="absolute  scale-10 -z-10 left-0 " width="190" height="505" viewBox="0 0 294 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M160.026 236.222C145.6 255.857 116.244 255.791 101.907 236.091L65.3765 185.897L12.5378 98.9242C-5.7596 68.8063 25.6391 33.0538 57.8675 47.3091L119.237 74.4544C126.768 77.7855 135.214 78.434 143.165 76.2918L203.144 60.1325C234.909 51.5745 260.565 86.594 242.829 114.301L197 185.897L160.026 236.222Z" fill="#F86161" fill-opacity="0.33" />
                <path d="M143.196 228.503C127.862 233.337 106.396 250.003 143.196 278.003C189.196 313.003 206.196 281.003 233.696 342.003C261.196 403.003 200.196 434.503 259.196 504.003" stroke="#FDCBCB" stroke-width="3" />
                <rect width="52.1291" height="16.2847" rx="8.14234" transform="matrix(-0.764195 0.644986 -0.932828 -0.360323 107.486 117.077)" fill="#3CAC89" />
                <rect width="52.1291" height="16.2847" rx="8.14234" transform="matrix(0.781792 0.623539 -0.922474 0.38606 67.4651 137.412)" fill="#3CAC89" />
                <rect width="52.1291" height="16.2847" rx="8.14234" transform="matrix(0.771369 -0.636388 0.928735 0.370745 147.158 170.07)" fill="#3CAC89" />
                <rect width="52.1291" height="16.2847" rx="8.14234" transform="matrix(-0.774761 -0.632254 0.926739 -0.375706 187.404 150.185)" fill="#3CAC89" />
                <rect x="111.095" y="182.813" width="84.5876" height="15" rx="7.5" transform="rotate(-75.2836 111.095 182.813)" fill="#E80101" fill-opacity="0.33" />
            </svg>
            <Goto twAnimation="animate-bounce" />
        </div>
    )
}

export default Welcome