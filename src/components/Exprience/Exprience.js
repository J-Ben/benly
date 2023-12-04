import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../images/work/1.png";
import logo2 from "../../images/work/2.png";
import logo3 from "../../images/work/3.png";
import logo4 from "../../images/work/4.png";

const Expriences = [
  {
    date: "2022 - 2023",
    logo: "https://blog.42consulting.fr/wp-content/uploads/2021/01/42c_blanc_transparent.png",
    position: "Developpeur Full stack",
    companyName: "42c, Paris.",
    workFrom: "Alternance",
    mission:
      "Projets clients : PixT, Switch to Twitch; et internes Glue-Glue, déployés dans le cloud AWS.",
    techs: "React, TypeScript, Node JS, AWS",
  },
  {
    date: " mars - 2023",
    logo: logo1,
    position: "Developpeur Full stack",
    companyName: "ESTIAM, Paris.",
    workFrom: "Alternance",
    mission:
      "Prise en main de Java et Spring Boot pour développement des applications d’entreprises",
    techs: "Java, Spring Boot, Postman",
  },
  {
    date: "2021 - 2022",
    logo: logo2,
    position: "Developpeur Full stack",
    companyName: "Coop-Ere, Massy-Palaiseau -",
    workFrom: "Alternance",
    mission:
      "Refonte du portail web et la plateforme web d’entraide des habitants.",
    techs: "JavaScript, PHP, Node JS, CodeIgniter",
  },
  {
    date: "2018 - 2020",
    logo: logo3,
    position: "Developpeur Full stack",
    companyName: "GAM, Canada",
    workFrom: "CDI",
    mission:
      "En collaboration avec le directeur technique, j’ai supervisé le développement de GamPay",
    techs: "JavaScript, Java, PHP, Talend Open Studio",
  },
];

const Exprience = (props) => {
  return (
    <section
      className="section-wrap bg-[#191919] overflow-hidden z-50"
      id="experience"
    >
      <div className="wraper">
        <div className="max-w-[640px] mx-auto text-center text-white mb-[60px] md:mb-[40px]">
          <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">
            Expérience professionnelle
          </h2>
          <p className="base-font text-lg font-normal"></p>
        </div>
        <div className="grid grid-rows-1">
          
            {Expriences.map((exprience, exp) => (
              <ul
                key={exp}
                className="flex flex-row-reverse items-center justify-between sm:flex-wrap col:block mb-8
             bg-[#282828] gap-20 px-[70px] md:px-[30px] py-[20px] rounded-lg border transition border-transparent hover:border hover:border-[#494949]"
              >
                <li className="base-font text-white font-bold text-xl sm:w-1/2 sm:text-[16px] col:w-full col:text-center col:mb-[10px]">
                  {exprience.date}
                </li>
                {/* <li>
                <img
                  src={exprience.logo}
                  alt="logo"
                  className="sm:w-1/2 col:w-full col:text-center max-w-[100px] col:mx-auto"
                />
              </li> */}
                <li className=" max-w-2xl sm:w-1/2 col:w-full col:text-center col:mt-[20px]">
                  <h2 className="base-font text-white font-bold text-2xl sm:text-[16px] ">
                    {exprience.position}
                  </h2>
                  <p className="base-font py-3 text-[#4fdd5d] font-normal text-[15px] sm:text-[14px]">
                    {exprience.companyName},{exprience.workFrom}.
                    <hr />
                  </p>
                  <p className="base-font text-[#c0c0c0] font-normal text-[15px] sm:text-[14px]">
                    {exprience.mission}
                  </p>
                  <p className="base-font py-1 text-[#FFE600] font-normal text-[15px] sm:text-[14px]">
                    {exprience.techs}
                  </p>
                </li>
                {/* <li className="col:text-center col:mt-[10px]">
                <Link
                  to="/"
                  className="text-white text-[16px] font-bold transition hover:text-[#FFE600] sm:w-1/2 sm:text-[14px] col:w-full col:text-center"
                >
                  <i className="ti-arrow-right transition mr-7 text-[16px] col:mr-[5px]"></i>
                  {exprience.techs}
                </Link>
              </li> */}
              </ul>
            ))}
         </div>
      </div>
      <div className="absolute top-1/2 col:top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
        <svg className="fill-[#E34E44] " width="1500" height="1500" fill="none">
          <g filter="url(#a)" opacity=".45">
            <circle cx="750" cy="750" r="200" />
          </g>
          <defs>
            <filter
              id="a"
              width="1500"
              height="1500"
              x="0"
              y="0"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_39_4212"
                stdDeviation="275"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Exprience;
