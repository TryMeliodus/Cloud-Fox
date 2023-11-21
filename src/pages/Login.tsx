import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/login.module.css'
import gitLogo from '../assets/git.png'
import emailLogo from '../assets/email.png'

function Login() {
  useEffect(() => {
    console.log(import.meta)
  })

  return (
    <>
      <div className={style.container}>
        <div className="flex justify-center items-center flex-col min-h-screen">
          <p className="text-default font-semibold text-3xl">Log in to deploy your project</p>
          <div className={style.subcontainer}>
            <Link to={`/app`} className={style.btngithub}>
              <img className="w-auto h-6" src={gitLogo} alt="" />
              <p>Continue with Github</p>
            </Link>
            <Link to={`/email`} className={style.btnemail}>
              <img className="w-auto h-6" src={emailLogo} alt="" />
              <p>Continue with Email</p>
            </Link>
          </div>
          <div className="text-sm text-default my-2">
            Not account yet?
            <Link className="text-btnPrimary font-medium underline ml-1" to={`/signup`}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
