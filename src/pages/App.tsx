import { useEffect } from 'react'
import style from '../styles/app.module.css'

// import Deploy from '../assets/deploy.png'
// import Add from '../assets/add.png'
import Rightarrow from '../assets/rightarrow.png'

import Sidebar from './Sidebar'

function App() {
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
            <div className="border-b pb-3">
              <div>
                <p className="text-default font-medium text-lg">List of instances</p>
                <p className="text-sm text-default my-1">
                  Cloud Fox will automatically provision DNS records and wildcard certificates for all subdomains.
                </p>
              </div>
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
                        <img className="w-auto h-4 mx-auto" src={Rightarrow} alt="" />
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
                        <img className="w-auto h-4 mx-auto" src={Rightarrow} alt="" />
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
    </>
  )
}

export default App
