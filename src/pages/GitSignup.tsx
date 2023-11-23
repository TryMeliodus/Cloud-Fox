import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/login.module.css'
import gitLogo from '../assets/git.png'

function GitSignup() {
  useEffect(() => {
    console.log(import.meta)
  })

  return (
    <>
      <div className={style.container}>
        <div className="flex justify-center items-center flex-col min-h-screen">
          <p className="text-default font-semibold text-3xl">Let set up your GitHub with Cloud Fox</p>
          <div className={style.subcontainer}>
            <Link to={`/`} className={style.btngithub}>
              <img className="w-auto h-6" src={gitLogo} alt="" />
              <p>Continue with Github</p>
            </Link>
          </div>
          <div className="text-sm text-default my-5 no-data-desc">
            Note: It is globally aware so that no matter where a request comes from, all requests are routed to the
            nearest nodes.
          </div>
        </div>
      </div>
    </>
  )
}

export default GitSignup
