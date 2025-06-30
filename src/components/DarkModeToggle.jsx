function DarkModeToggle({ darkMode, toggleMode }) {
  return (
    <div className={` ${darkMode ? 'dark:bg-midnight dark:text-taupe' : 'bg-taupe text-rust'} relative h-screen w-screen transition-colors duration-1000 `}>

      <div
        onClick={toggleMode}
        className={` transition-all duration-[800ms] w-fit h-fit flex justify-center items-center flex-row right-0 top-0 m-6 my-4 px-4 py-4 absolute z-10`}>

        <img
          className={`${darkMode ? 'opacity-0 rotate-180 scale-0' : 'rotate-[360deg] opacity-100 scale-125 p-1'} transition-all duration-500 absolute bg-rust rounded-full`}
          src='/icons/sun.svg' />
        <img
          className={`${darkMode ? 'opacity-100 rotate-[360deg] scale-125 p-1' : 'opacity-0 scale-0 rotate-180'} transition-all duration-500 absolute bg-taupe rounded-full`}
          src='/icons/moon.svg' />

      </div>

    </div>
  )
}
export default DarkModeToggle;
