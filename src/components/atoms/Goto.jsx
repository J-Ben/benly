import React from 'react'

const Goto = ({ twContainer, twSVG, twAnimation }) => {
    return (
        <div className={` z-50 grid justify-items-center scale-50 ${twContainer}`}>
            <svg className={` cursor-pointer  ${twSVG}  ${twAnimation}`} width="154" height="76" viewBox="0 0 154 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14.3394" y="6.10352e-05" width="95.2369" height="25" rx="12.5" transform="rotate(35 14.3394 6.10352e-05)" fill="#3CAC89" />
                <rect x="61" y="54.6257" width="95.2369" height="25" rx="12.5" transform="rotate(-35 61 54.6257)" fill="#3CAC89" />
            </svg>
        </div>
    )
}

export default Goto