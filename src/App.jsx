import { useState } from 'react'
import './index.css'
import DarkModeToggle from './components/DarkModeToggle';

// When the project is done:


// <img src='/face.png' className='flex absolute opacity-5 w-screen h-screen object-cover' />

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [isUp, setIsUp] = useState(false);

  const toggleMode = () => {
    setDarkMode(prev => !prev)
  }

  const handleGoDown = () => {
    setIsUp(false);
  }

  const handleGoUp = () => {
    setIsUp(true);
  }

  return (
    <>

      <div className={` ${darkMode ? 'dark:bg-dark dark:text-taupe' : 'bg-taupe text-rust'} relative h-fit w-screen transition-all duration-700`}>

        <section className={`bg-transparent justify-center items-center z-10
          ${isUp ? 'scale-0 opacity-40 rotate-y-90' : 'scale-100 opacity-100'} 
          transition-all duration-1000 absolute w-full h-fit top-1/5 flex`}>

          <div className='flex h-fit m-auto flex-col w-9/12'>
            <h1 className='flex flex-row diffont'>
              <p className={` ${isUp ? 'scale-x-50 scale-y-0 -rotate-45 opacity-0 ease-[cubic-bezier(1,.2,.49,.76)]' : 'scale-100 opacity-100'} 
                text-9xl transition-all duration-1000 ease-in-out`}>
                Suryaprakash <br /> Khatri
                <span className={` ${isUp ? 'scale-0 opacity-100' : 'scale-100 opacity-100'}
                  text-6xl transition-all duration-1000 mx-8`}>
                  Designer, Programmer & Freelancer.
                </span>
              </p>

            </h1>

            <button
              onClick={handleGoUp}
              className={`${isUp ? 'scale-0 opacity-40 -rotate-12' : 'mt-32 scale-100 opacity-100'} drop-shadow-2xl group text-red w-fit p-4 text-6xl ease-[cubic-bezier(.17,.67,.83,.67)] btn1 transition-all duration-[1000ms] flex mx-auto mt-16 items-center justify-center`}>

              Info
              <img className='relative duration-500 transition-all opacity-100 mx-2 ease-out flex drop-shadow-2xl'
                src='/icons/fast-forward.svg' />
            </button>

          </div>
        </section>

        <section className={`bg-transparent justify-center items-center z-10
          ${isUp ? 'scale-100 opacity-100' : 'scale-0 opacity-0 -rotate-12'} 
          transition-all duration-[1400ms] absolute h-screen w-full flex`}>

          <div className='flex h-fit mx-auto flex-col items-start'>

            <h1 className={`bg-transparent text-6xl justify-center items-center
          ${isUp ? 'scale-100 opacity-100' : 'scale-0 opacity-0 -rotate-45'} 
          transition-all duration-[600ms] my-4`}>
              Info ~
            </h1>

            <ul className='flex flex-row gap-8 md:flex-col sm:flex-col lg:flex-row'>

              <li>
                <h1 className={`bg-transparent text-9xl justify-center items-center
          ${isUp ? 'scale-100 opacity-100' : 'scale-0 opacity-0 -rotate-45'} 
          transition-all duration-[800ms]`}>

                  <div className='group flex flex-col'>
                    <div className='transition-all duration-700 mr-8'>
                      Work
                    </div>
                    <div className='flex flex-col pt-8 justify-evenly items-start px-4'>
                      <span className='text-4xl'>
                        Projects
                        <p className='text-wrap flex flex-col text-xl my-4'>
                          <span>
                            <a href="https://hayday-thing-qg758dwh2-suryaprakash-khatris-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 text-2xl transition-all duration-500 diffont font-bold">
                              HayDay Manager
                            </a>
                            <span className="diffont scale-110"> ⌝</span>
                          </span>
                          <span className="text-xl">Resource management tool using Neo4j</span>
                        </p>
                        <p className='text-wrap flex flex-col text-xl mt-4'>
                          <span>
                            <a href="https://rektagun.github.io/gol/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 text-2xl transition-all duration-500 diffont font-bold">
                              Conway's Game of Life simulator
                            </a>
                            <span className="diffont scale-110"> ⌝</span>
                          </span>
                          <span className="">Web simulator for Conway's game of life</span>
                        </p>
                      </span>
                    </div>

                    <div className='flex flex-col pt-8 justify-evenly items-start px-4'>
                      <span className='text-4xl'>
                        Internship
                        <div className='text-wrap flex flex-col text-xl mt-4'>
                          <span>
                            <a href="https://www.chaitanyaai.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-all duration-500 diffont text-2xl font-bold">ChaitanyaAI LLP</a>
                            <span className="diffont"> ⌝</span>
                          </span>
                          <span className=''>Frontend Development Intern (04/2024 - 06/2024)</span>
                          <span>Designed company website with React.js & Node.js</span>
                        </div>
                      </span>
                    </div>

                  </div>
                </h1>
              </li>

              <li>
                <h1 className={`bg-transparent text-9xl justify-center items-center
          ${isUp ? 'scale-100 opacity-100' : 'scale-0 opacity-0 -rotate-45'} 
          transition-all duration-[1000ms]`}>

                  <div className='group flex flex-col'>
                    <div className='transition-all duration-700 mr-8'>
                      Skills
                    </div>
                    <div className='flex flex-col pt-8 justify-evenly items-start px-4'>

                      <span className='text-4xl'>
                        Programming
                        <p className='text-wrap flex flex-col text-xl gap-2 my-4 font-bold'>
                          <span>Languages: C++, JavaScript</span>
                          <span>Web: React.js, Tailwind CSS, Node.js, Express.js</span>
                          <span>Databases: Neo4j, SQL, MongoDB</span>
                          <span>Tools: Git, GitHub, Vim, CLIs</span>
                        </p>
                      </span>

                      <span className='text-4xl mt-6'>
                        Education
                        <p className='text-wrap flex flex-col text-xl mt-4'>
                          <span>Jaypee University of Engineering and Technology</span>
                          <span>B.Tech. in Computer Science Engineering</span>
                          <span>2021 - present</span>
                        </p>
                      </span>

                    </div>
                  </div>

                </h1>
              </li>

              <li>
                <h1 className={`bg-transparent text-9xl justify-center items-center
          ${isUp ? 'scale-100 opacity-100' : 'scale-0 opacity-0 -rotate-45'} 
          transition-all duration-[1200ms]`}>

                  <div className='group flex flex-col'>
                    <div className='transition-all duration-700 mr-8'>
                      Links
                    </div>
                    <div className='flex flex-col pt-8 justify-evenly items-start px-4'>
                      <span className='text-4xl'>
                        Social
                        <p className='text-wrap flex flex-col text-xl font-bold'>
                          <span className='my-1 mt-4'>
                            <a href="https://www.linkedin.com/in/suryaprakash-khatri-b96268305/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-all duration-500 diffont">LinkedIn</a>
                            <span className="diffont"> ⌝</span>
                          </span>
                          <span className='my-1'>
                            <a href="https://github.com/Rektagun" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-all duration-500 diffont">GitHub</a>
                            <span className="diffont"> ⌝</span>
                          </span>
                          <span className='my-1'>
                            <a href="mailto:khatrisurya.101202@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-all duration-500 diffont">Email</a>
                            <span className="diffont"> ⌝</span>
                          </span>
                        </p>
                      </span>
                      <span className='text-4xl mt-6'>
                        Downloads
                        <p className='text-wrap flex flex-col text-xl'>
                          <span className='mt-4'>
                            <a href="https://drive.google.com/file/d/1WgYJIrbUU9jhH6ISr0Wwn5aKpc_zftBA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-all duration-500 diffont">View Resume PDF</a>
                            <span className="diffont"> ⌝</span>
                          </span>
                        </p>
                      </span>
                    </div>
                  </div>

                </h1>
              </li>

            </ul>
            <button
              onClick={handleGoDown}
              className={`${isUp ? 'scale-100 opacity-100' : 'scale-0 opacity-40 -rotate-12'} drop-shadow-2xl group text-red w-fit p-4 text-5xl ease-in diffont transition-all duration-1000 flex mx-auto my-4 items-center justify-center btn1`}>
              <img className='relative duration-500 transition-all opacity-100 mx-2 ease-out flex drop-shadow-2xl'
                src='/icons/rewind.svg' />
              Back
            </button>
          </div>

        </section>

        <DarkModeToggle toggleMode={toggleMode} darkMode={darkMode} />

      </div>
    </>
  )
}
export default App;
