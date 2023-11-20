import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Layouts
import Default from './layout/default'

// Pages
import App from './pages/App'

export default function routes() {
  const publicRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Default />,
      children: [{ path: '/', element: <App /> }],
    },
  ])

  return <RouterProvider router={publicRoutes} />
}
