import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/* icon */
import Logo from '../assets/logo.png'
import WWW from '../assets/app.svg'
import Domain from '../assets/domain.svg'
import Profile from '../assets/profile.jpg'

function Sidebar() {
  const [popup, setpopup] = useState(false)
  useEffect(() => {
    console.log(import.meta)
  })

  return (
    <>
      {/* sidebar start */}
      <label
        htmlFor="menu-open"
        className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"
        data-dev-hint="floating action button"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>

      <header className="bg-gray-600 text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
        <a href="/app" className="block p-4 text-white font-bold whitespace-nowrap truncate">
          Cloud Fox
        </a>

        <label
          htmlFor="menu-open"
          id="mobile-menu-button"
          className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md"
        >
          <svg
            id="menu-open-icon"
            className="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            id="menu-close-icon"
            className="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </header>

      <aside
        id="sidebar"
        className="bg-sidebar text-gray-100 w-20 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transhtmlForm md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between  z-[10000]"
        data-dev-hint="sidebar; px-0 htmlFor frameless; px-2 htmlFor visually inset the navigation "
        style={{ transform: 'translateX(var(--tw-translate-x))' }}
      >
        <div className="flex flex-col space-y-6" data-dev-hint="optional div htmlFor having an extra footer navigation">
          <a href="/app" className="text-white mx-auto mb-4" title="Cloud Fox">
            <img className="w-auto h-10" src={Logo} alt="" />
          </a>

          <nav data-dev-hint="main navigation">
            <Link to="/app" className="py-2">
              <div className="tooltip">
                <div className="tooltip-spacing">
                  <div className="tooltip-text">
                    <img className="w-auto h-6 mx-auto mb-4" src={WWW} alt="" />
                  </div>
                  <div className="bubble">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" height="80" width="100">
                      <path
                        d="M33.196 0h94.61C134.56 0 140 5.44 140 12.195v15.61C140 34.56 134.56 40 127.805 40h-94.61C26.44 40 21 34.56 21 27.805v-1.903S18.196 15.427 0 20c17.185-10.084 21-5.902 21-5.902v-1.903C21 5.44 26.44 0 33.196 0z"
                        fill="#3C5979"
                      />
                    </svg>
                    <div className="bubble-text">Overview</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/domain" className="py-2">
              <div className="tooltip">
                <div className="tooltip-spacing">
                  <div className="tooltip-text">
                    <img className="w-auto h-6 mx-auto" src={Domain} alt="" />
                  </div>
                  <div className="bubble">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40" height="80" width="100">
                      <path
                        d="M33.196 0h94.61C134.56 0 140 5.44 140 12.195v15.61C140 34.56 134.56 40 127.805 40h-94.61C26.44 40 21 34.56 21 27.805v-1.903S18.196 15.427 0 20c17.185-10.084 21-5.902 21-5.902v-1.903C21 5.44 26.44 0 33.196 0z"
                        fill="#3C5979"
                      />
                    </svg>
                    <div className="bubble-text">Domain</div>
                  </div>
                </div>
              </div>
            </Link>
          </nav>
        </div>

        <nav data-dev-hint="second-main-navigation or footer navigation">
          <div
            onClick={() => {
              setpopup(true)
            }}
            className="mx-auto cursor-pointer"
          >
            <img className="w-10 h-10 mx-auto mb-4 rounded-full object-cover" src={Profile} alt="" />
          </div>
        </nav>
      </aside>

      {popup && (
        <div className="bg-white p-3 shadow-lg rounded-md absolute z-[99999] bottom-[65px] left-4">
          <p className="text-default text-[13px] border-b pb-1 border-default border-opacity-30">kiran@meliodus.org</p>
          <div className="text-[15px] flex flex-col mt-4 space-y-1.5">
            <Link className="text-default" to={`/`}>
              Settings
            </Link>
            <Link className="text-[#C3002F]" to={`/`}>
              Signout
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar
