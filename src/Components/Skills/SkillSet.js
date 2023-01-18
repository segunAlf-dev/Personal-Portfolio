import React from "react";
import HTML from "../../Assets//images/html.png";
import CSS from "../../Assets/images/css.png";
import JavaScript from "../../Assets/images/javascript.png";
import REACT from "../../Assets/images/react.png";
import Tailwind from "../../Assets/images/tailwind.png";
import Github from "../../Assets/images/github.png";
import MaterialUi from "../../Assets/images/MUI.png";
import GitBash from "../../Assets/images/gitbash.png";
import MySQL from "../../Assets/images/Mysql.jpg";

const SkillSet = () => {

  return (
    <div name="skills" className="bg-[#0a192f] w-full h-screen text-gray-300">
      {/* Container */}

      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-center text-left pb-4 mt-[90px]">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={HTML} alt="HTML-ICON" />
            <p className="p-5">HTML5</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={CSS} alt="CSS-ICON" />
            <p className="p-5">CSS3</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={JavaScript} alt="JS-ICON" />
            <p className="p-5">JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={REACT} alt="REACT-ICON" />
            <p className="p-5">REACT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={Tailwind} alt="TAILWIND-CSS" />
            <p className="p-5 bold">TAILWIND</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={Github} alt="GITHUB-ICON" />
            <p className="p-5">GITHUB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={MaterialUi} alt="MUI-ICON" />
            <p className="p-5">MATERIAL-UI</p>
          </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
              <img className="w-10 mx-auto" src={GitBash} alt="GITBASH-ICON" />
              <p className="p-5">GITBASH</p>
            </div>

              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
                <img className="w-10 mx-auto" src={MySQL} alt="MYSQL-ICON" />
                <p className="p-5">MYSQL</p>
              </div>

            </div>
          </div>
        </div>
      );
};

export default SkillSet;
