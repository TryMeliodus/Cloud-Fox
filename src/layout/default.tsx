import { Outlet } from 'react-router-dom'

// import Logo from '../assets/logo.png'
// import Node from '../assets/node.png'
// import Python from '../assets/python.png'
// import Html from '../assets/html.png'
// import Angular from '../assets/angular.png'
// import Vue from '../assets/vue.png'
// import React from '../assets/react.png'
// import Gatsby from '../assets/Gatsby.png'
// import Astro from '../assets/astro.png'
// import Svelte from '../assets/svelte.png'

export default function theme() {
  return (
    <div className={`main`}>
      {/* <div className="header-area ">
        <a href="#" target="_blank" rel="noreferrer">
          <img src={Logo} className="w-auto h-6" alt="Vite logo" />
        </a>
      </div> */}
      <Outlet />
      {/*Primary Footer Area */}
      {/* <div className="footer">
        <div className="grid grid-cols-5">
          <div className="col-span-3">
            <div className="container">
              <div>
                <p className="text-default text-lg font-semibold">Cloud Fox</p>
                <div className="my-2">
                  <p className="text-[#7A8DA2] font-normal text-[15px]">
                    Subscribe to our newsletter and get useful resources.
                  </p>
                  <div className="flex my-3 space-x-3 items-center">
                    <input
                      type="email"
                      id="email"
                      className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-6/12 p-2 rounded-md h-[45px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="john.doe@company.com"
                      required
                    />
                    <button className="subscribe">Subscribe</button>
                  </div>
                </div>
              </div>
              <div className="">
                <img className="w-auto h-10" src={Logo} alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex items-start justify-between">
              <div className="footer-links">
                <p className="text-base font-semibold text-default">About</p>
                <ul className="my-3">
                  <li>Login</li>
                  <li>Sign up</li>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Contact us</li>
                </ul>
              </div>
              <div className="footer-links">
                <p className="text-base font-semibold text-default">Info</p>
                <ul className="my-3">
                  <li>Terms and Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Return and Refund Policy</li>
                </ul>
              </div>
              <div className="footer-links">
                <p className="text-base font-semibold text-default">Social Media</p>
                <ul className="my-3">
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </div>

            <div className="copyright-area">
              <div className="flex items-center space-x-3">
                <img src={Node} alt="" />
                <img src={Python} alt="" />
                <img src={Html} alt="" />
                <img src={Angular} alt="" />
                <img src={Vue} alt="" />
                <img src={React} alt="" />
                <img src={Gatsby} alt="" />
                <img src={Astro} alt="" />
                <img src={Svelte} alt="" />
              </div>
              <p>© 2017-2023. All Rights Reserved. Meliodus Software Solutions (OPC) Private Limited</p>
            </div>
          </div>
        </div>
      </div> */}
      {/*Primary Footer Area */}
    </div>
  )
}
