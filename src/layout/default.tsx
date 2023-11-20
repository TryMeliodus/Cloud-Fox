import { Outlet } from 'react-router-dom'

export default function theme() {
  return (
    <div className={`main`}>
      <Outlet />
    </div>
  )
}
