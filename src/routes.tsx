import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Layouts
import Default from './layout/default'

// Pages
import Login from './pages/Login'
import Email from './pages/Email'
import Signup from './pages/Signup'
import EmailSignup from './pages/EmailSignup'
import GitSignup from './pages/GitSignup'

export default function routes() {
  const publicRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Default />,
      children: [
        { path: '/', element: <Login /> },
        { path: '/email', element: <Email /> },
        { path: '/signup', element: <Signup /> },
        { path: '/emailsignup', element: <EmailSignup /> },
        { path: '/gitsignup', element: <GitSignup /> },
      ],
    },
  ])

  return <RouterProvider router={publicRoutes} />
}
