import { useEffect } from 'react'
import style from '../styles/setup.module.css'

// import Pencil from '../assets/pencil.png'
import Success from '../assets/success.png'

import Sidebar from './Sidebar'

function Setup() {
  useEffect(() => {
    console.log(import.meta)
  })

  return (
    <>
      <div className="flex min-h-screen" data-dev-hint="container">
        <input type="checkbox" id="menu-open" className="hidden" />
        <Sidebar />
        <div className={style.container}>
          <div className={style.subcontainer}>
            <div className="border-b pb-3">
              <p className="text-default font-medium text-lg">Set up your domain</p>
              <p className="text-sm text-default my-1">
                Cloud Fox will automatically provision DNS records and wildcard certificates for all subdomains.
              </p>
            </div>
            {/* Loader Area */}
            <div className="mt-8">
              <div className="grid grid-cols-3 gap-7 setup-mobile-container ">
                <div className="col-span-1">
                  <hr className={style.enable} />
                  <p className="text-default font-medium text-sm my-1">1. Add </p>
                </div>
                <div className="col-span-1">
                  <hr className={style.disable} />
                  <p className="text-default font-medium text-sm my-1">2. Verify </p>
                </div>
                <div className="col-span-1">
                  <hr className={style.disable} />
                  <p className="text-default font-medium text-sm my-1">3. Status</p>
                </div>
              </div>

              {/* Content area */}
              <div className={style.contentArea}>
                {/* Add domain area */}
                {/* <div className="my-10">
                  <p className="text-default font-medium text-lg">What domain would you like to use?</p>
                  <p className="text-sm text-default my-1">
                    Add a domain or subdomain you own, or add a new domain and we will register it for you.
                  </p>
                </div>
                <div className="space-y-1.5 mb-4">
                  <label className="text-default font-normal text-sm" htmlFor="">
                    Domain or subdomain
                  </label>
                  <input
                    type="url"
                    id="url"
                    className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 rounded-md h-[45px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="yourdomain.com"
                    required
                  />
                </div>
                <button className={style.addbtn}>Add</button> */}
                {/* Add domain area */}

                {/* Verify area */}
                {/* <div className='my-10'>
                  <p className="text-default font-medium text-lg">Verify your domain with Cloud fox</p>
                  <p className="text-sm text-default my-1">
                    Add a domain or subdomain you own, or add a new domain and we will register it for you.</p>
                </div>
                <div className='space-y-1.5 mb-4'>
                  <label className='text-default font-normal text-sm' htmlFor="">Domain or subdomain</label>
                  <div className='relative  '>
                    <input
                      type="url"
                      id="url"
                      className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 rounded-md h-[45px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="yourdomain.com"
                      required
                    />
                    <img src={Pencil} alt="" className="h-6 absolute top-[10px] right-2" />
                  </div>
                </div>
                <button className={style.addbtn}>Verify</button> */}
                {/* Verify area */}

                {/* Status area */}
                <div className="my-10 flex items-center space-x-3">
                  <img className="w-auto h-6 mobile-success-img" src={Success} alt="" />
                  <p className="text-default font-medium text-lg mobile-success-msg">
                    Your domain is successfully verified.
                  </p>
                </div>

                {/* Status area */}
              </div>
              {/* Content area */}
            </div>
            {/* Loader Area */}
          </div>
          <div className="flex justify-center">
            <div className="bottom-5 fixed text-center text-footerText text-xs mobile-footer">
              © 2017-2023. All Rights Reserved. Meliodus Software Solutions (OPC) Private Limited
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Setup
