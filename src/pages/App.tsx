import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import style from '../styles/app.module.css'

// import Deploy from '../assets/deploy.png'
// import Add from '../assets/add.png'
import Rightarrow from '../assets/rightarrow.png'
import Downarrow from '../assets/downarrow.png'

import Sidebar from './Sidebar'

function App() {
  const [popup, setpopup] = useState(false)
  useEffect(() => {
    console.log(import.meta)
  })

  return (
    <>
      <div className="flex min-h-screen" data-dev-hint="container">
        <Sidebar />
        {/* while no data import */}
        {/* <div className={style.container}>
          <div className="flex justify-center items-center flex-col">
            <img className="w-auto h-14 mb-3" src={Deploy} alt="" />
            <p className="text-default font-medium text-lg">Deploy your first project</p>
            <p className="text-sm text-default my-2 no-data-desc">
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
            </div>
          </div>

          <div className="bottom-5 fixed text-center text-footerText text-xs">
            © 2017-2023. All Rights Reserved. Meliodus Software Solutions (OPC) Private Limited
          </div>
        </div> */}
        {/* while no data import */}

        {/* While data is already exist */}
        <div className={style.tablecontainer}>
          <div className={style.tablesubcontainer}>
            <div className="border-b pb-3 flex items-center justify-between">
              <div>
                <p className="text-default font-medium text-lg">List of instances</p>
                <p className="text-sm text-default my-1">
                  Cloud Fox will automatically provision DNS records and wildcard certificates for all subdomains.
                </p>
              </div>
              <button
                onClick={() => {
                  setpopup(true)
                }}
                className={style.appaddbtn}
              >
                <p className="text-sm">Add new website</p>
                <img className="h-auto w-5" src={Downarrow} alt="" />
              </button>
            </div>
            <div className="px-4 pt-8 sm:px-0 table-rc-sec">
              <div className="rdb-mobile-table border-x border-t rounded table-rc ">
                <table className="table-auto rdb-mobile  w-full text-center ">
                  <thead className="">
                    <tr className=" text-gray-500  text-xs text-opacity-75 border-b text-center">
                      <th className="pl-2 py-3.5">Website name</th>
                      <th>Published on</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="text-left">
                    <tr className=" text-table_data border-b  text-sm capitalize text-opacity-75">
                      <td data-colname="website" className="pl-2 py-2 font-semibold text-sm leading-6">
                        resplendent-shortbread-9405a8 <br />
                        <span className="text-[13px] font-normal text-btnPrimary">
                          https://resplendent-shortbread-9405a8.netlify.app
                        </span>
                      </td>
                      <td data-colname="Date" className="font-medium">
                        Jun 23, 2023
                      </td>
                      <td data-colname="" className="font-medium">
                        <img className="w-auto h-4 mx-auto cursor-pointer" src={Rightarrow} alt="" />
                      </td>
                    </tr>
                    <tr className=" text-table_data border-b  text-sm capitalize text-opacity-75">
                      <td data-colname="website" className="pl-2 py-2 font-semibold text-sm leading-6">
                        resplendent-shortbread-9405a8 <br />
                        <span className="text-[13px] font-normal text-btnPrimary">
                          https://resplendent-shortbread-9405a8.netlify.app
                        </span>
                      </td>
                      <td data-colname="Date" className="font-medium">
                        Jun 23, 2023
                      </td>
                      <td data-colname="" className="font-medium">
                        <img className="w-auto h-4 mx-auto cursor-pointer" src={Rightarrow} alt="" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bottom-5 fixed text-center text-footerText text-xs">
              © 2017-2023. All Rights Reserved. Meliodus Software Solutions (OPC) Private Limited
            </div>
          </div>
        </div>
        {/* While data is already exist */}
      </div>

      {popup && (
        <div className="bg-white p-4 shadow-lg rounded-md absolute z-[99999] top-[110px] right-12">
          <div className="text-[15px] flex flex-col space-y-2.5">
            <Link className="text-default" to={`/`}>
              Import an existing project
            </Link>
            <Link className="text-btnPrimary" to={`/`}>
              Deploy manually
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default App
