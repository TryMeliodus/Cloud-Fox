import { useEffect } from 'react'
import style from '../styles/app.module.css'

import Deploy from '../assets/deploy.png'
import Add from '../assets/add.png'

import Sidebar from './Sidebar'

function App() {
  useEffect(() => {
    console.log(import.meta)
  })

  return (
    <>
      <div className="flex min-h-screen" data-dev-hint="container">
        <Sidebar />
        <div className={style.container}>
          <div className="flex justify-center items-center flex-col">
            <img className="w-auto h-14 mb-3" src={Deploy} alt="" />
            <p className="text-default font-medium text-lg">Deploy your first project</p>
            <p className="text-sm text-default my-2">
              Deploy once, deliver everywhere. When you push code to Cloud Fox, we make it instantly available across
              the planet.
            </p>
            <div className={style.subcontainer}>
              <div className="flex items-center space-x-3">
                <img className="w-auto h-6" src={Add} alt="" />
                <div className="text-default">
                  <p className="font-medium text-[15px]">Import Project</p>
                  <p className="text-[13px]">Add a repo from your git provider</p>
                </div>
              </div>
              <button className={style.importbtn}>Import</button>
              {/* <label className={style.importbtn}>
                <input type="file" />
              </label> */}
            </div>
          </div>
          <div className="bottom-5 fixed text-center text-footerText text-xs">
            © 2017-2023. All Rights Reserved. Meliodus Software Solutions (OPC) Private Limited
          </div>
        </div>
      </div>
    </>
  )
}

export default App
