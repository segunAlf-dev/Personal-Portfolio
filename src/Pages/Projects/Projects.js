import React from 'react'
import project1 from "../../Assets/images/Phonie-Hackth.png";
import project2 from "../../Assets/images/Readact.png";
import project3 from "../../Assets/images/nft-preview-card.png";
import project4 from "../../Assets/images/LandingPage.png";
import project5 from "../../Assets/images/Calculator.png";
import project6 from "../../Assets/images/FourcardComp.png";


const Project = () => {
  return (
    <div  name="project" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-2 mt-16'>
                <div className='sm:text-center text-left mt-5 mb-5 '>
                  <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600 pt-2' >
                  Projects
                  </p>
                </div>
                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                  <div 
                    style={{backgroundImage: `url(${project1})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white flex justify-center items-center'>
                        Phonie 
                      </span>
                      <div className='flex space-x-4 pt-8 text-center'>
                        <a href="https://phonie-hackathon-challenge.netlify.app/" target={`_blank`}>
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>
                            Demo
                          </button>
                        </a>
                         <a href="https://github.com/Banzyworld/Holiday-Challenge" target={`_blank`}>
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>
                              Code
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>

                    <div 
                    style={{backgroundImage: `url(${project2})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white flex justify-center items-center'>
                        Readact
                      </span>
                      <div className='flex space-x-4 pt-8 text-center'>
                        <a href="https://readact-hackathon-challenge.netlify.app/" target={`_blank`} >
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>
                            Demo 
                          </button>
                        </a>
                         <a href="https://github.com/Banzyworld/redact-project-grp6" target={`_blank`}>
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>
                              Code
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>

                    <div 
                    style={{backgroundImage: `url(${project3})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider'>
                        Nft Preview Card
                      </span>
                      <div className='flex space-x-4 pt-8 text-center'>
                        <a href="https://nft-preview-card-component-chalnge.netlify.app/">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>
                            Demo
                          </button>
                        </a>
                         <a href="https://github.com/Banzyworld/nft-preview-card-component">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>
                              Code
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>

                    <div 
                      style={{backgroundImage: `url(${project4})`}}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                      <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                          First Landing Page
                        </span>
                        <div className='flex space-x-4 pt-8 text-center'>
                          <a href="https://htm-and-css-mini-project.netlify.app/index.html#" target={`_blank`}>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>
                              Demo
                            </button>
                          </a>
                          <a href="https://github.com/Banzyworld/Mini-project-html-and-css" target={`_blank`}>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>
                                Code
                            </button>
                          </a>
                        </div>
                    </div>
                  </div>

                       <div 
                    style={{backgroundImage: `url(${project5})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white  flex justify-center items-center '>
                        Calculator
                      </span>
                      <div className='flex space-x-4 pt-8 text-center'>
                        <a href="https://bespoke-platypus-918985.netlify.app/" target={`_blank`} >
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>
                            Demo
                          </button>
                        </a>
                         <a href="https://github.com/YhinkaDevOps/MovieApiFetch.git" target={`_blank`} >
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>
                              Code
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>

                       <div 
                    style={{backgroundImage: `url(${project6})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold text-white tracking-wider'>
                        Four Card Component
                      </span>
                      <div className='flex space-x-4 pt-8 text-center'>
                        <a href="https://four-card-picture-section.netlify.app/">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>
                            Demo
                          </button>
                        </a>
                         <a href="https://github.com/Banzyworld/Four-card-picture-section-">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>
                              Code
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project;