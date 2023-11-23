import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/login.module.css'
import emailLogo from '../assets/email2.png'
import back from '../assets/back.png'

function EmailSignup() {
  useEffect(() => {
    console.log(import.meta)
  })

  return (
    <>
      <div className={style.container}>
        <div className="flex justify-center items-center flex-col min-h-screen">
          <p className="text-default font-semibold text-3xl custom-title-mobile">Sign up to deploy your project</p>
          <div className={style.subcontainer}>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />

            <input
              type="email"
              id="email"
              className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2 rounded-md h-[45px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
            <Link to={`/`} className={style.btngithub}>
              <img className="w-auto h-6" src={emailLogo} alt="" />
              <p>Continue with Email</p>
            </Link>
          </div>
          <div className="my-2">
            <Link className="text-btnPrimary font-medium flex items-center space-x-2 text-sm" to={`/signup`}>
              <img className="w-auto h-5" src={back} alt="" />
              <p>Other signup options</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmailSignup
