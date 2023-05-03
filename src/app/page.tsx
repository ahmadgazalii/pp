import Image from 'next/image'
import styles from './page.module.css'
import Nav from './components/nav';

export default function Home() {
  return (
    <body>
      
    <nav className="relative container mx-auto p-6">
        
        <div className="flex items-center justify-between">

            <div className="pt-2">
            <img src="logo.svg" alt="" />
          </div>

          <div className="hidden space-x-6 md:flex">
            <a href="#" className="hover:text-gray-500">Pricing</a>
            <a href="#" className="hover:text-gray-500">Product</a>
            <a href="#" className="hover:text-gray-500">About Us</a>
            <a href="#" className="hover:text-gray-500">Careers</a>
            <a href="#" className="hover:text-gray-500">Community</a>
          </div>
          {/* <!-- Button --> */}
          <a
            href="#"
            className="hidden p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-red-400 md:block"
            >Get Started</a>
  
          
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
  
        {/* <!-- Mobile Menu --> */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>
  
      
      <section id="hero">
        
        <div
          className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
        >
          
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1
              className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
            >
              Bring everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-red-600"
                >Get Started </a>
            </div>
          </div>
    
          <div className="md:w-1/2">
            <img src="illustration-intro.svg" alt="" />
          </div>
        </div>
      </section>

    
    
    
</body>

    
  )
}
