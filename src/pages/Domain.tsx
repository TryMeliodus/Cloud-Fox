import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../styles/app.module.css'

import Nofile from '../assets/nofile.png'
import Add from '../assets/add.png'

// import Sidebar from './Sidebar'

function Domain() {
  const navigate = useNavigate()

  useEffect(() => {
    console.log(import.meta)
  })

  return (
    <>
      <div className="flex min-h-screen" data-dev-hint="container">
        {/* <Sidebar /> */}
        <div className={style.container}>
          <div className="flex justify-center items-center flex-col">
            <img className="w-auto h-20 mb-3" src={Nofile} alt="" />
            <p className="text-default font-medium text-lg">No domains to show</p>
            <p className="text-sm text-default my-2 no-data-desc">
              Configure your existing domain to use Cloud Fox DNS or purchase one right here and we will set it up for
              you.
            </p>
            <div className={style.subcontainer}>
              <div className="flex items-center space-x-3">
                <img className="w-auto h-6" src={Add} alt="" />
                <div className="text-default">
                  <p className="font-medium text-[15px] title">Add or register domain</p>
                  <p className="text-[13px] subtitle">Add a domain right here.</p>
                </div>
              </div>
              <button
                onClick={() => {
                  navigate('/domain/setup')
                }}
                className={style.importbtn}
              >
                Add
              </button>
            </div>
          </div>
          <div className="bottom-5 fixed text-center text-footerText text-xs mobile-footer">
            © 2017-2023. All Rights Reserved. Meliodus Software Solutions (OPC) Private Limited
          </div>
        </div>
      </div>
    </>
  )
}

export default Domain
