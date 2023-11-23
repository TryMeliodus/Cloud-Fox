import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/login.module.css'
import gitLogo from '../assets/git.png'
import emailLogo from '../assets/email.png'

function Signup() {
  useEffect(() => {
    console.log(import.meta)
  })

  return (
    <>
      <div className={style.container}>
        <div className="flex justify-center items-center flex-col min-h-screen">
          <p className="text-default font-semibold text-3xl custom-title-mobile">Sign up to deploy your project</p>
          <div className={style.subcontainer}>
            <Link to={`/gitsignup`} className={style.btngithub}>
              <img className="w-auto h-6" src={gitLogo} alt="" />
              <p>Continue with Github</p>
            </Link>
            <Link to={`/emailsignup`} className={style.btnemail}>
              <img className="w-auto h-6" src={emailLogo} alt="" />
              <p>Continue with Email</p>
            </Link>
          </div>
          <div className="text-sm text-default my-2">
            Already have an account?
            <Link className="text-btnPrimary font-medium underline ml-1" to={`/`}>
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
