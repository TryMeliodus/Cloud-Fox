import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Layouts
import Default from './layout/default'

// Pages
import Login from './pages/Login'
import Email from './pages/Email'
import Signup from './pages/Signup'
import EmailSignup from './pages/EmailSignup'
import GitSignup from './pages/GitSignup'
import App from './pages/App'
import Domain from './pages/Domain'
import Setup from './pages/Setup'

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
        { path: '/app', element: <App /> },
        { path: '/domain', element: <Domain /> },
        { path: '/domain/setup', element: <Setup /> },
      ],
    },
  ])

  return <RouterProvider router={publicRoutes} />
}
