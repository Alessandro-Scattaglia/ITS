import ShopContextProvider from './providers/ShopContextProvider'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import Product from './pages/Product'


import Homepage from './pages/Homepage'
import About from './pages/About'
import Account from './pages/Account'
import Layout from './layouts/Layout'
import NotFound from './pages/NotFound'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      children: [
        { index: true, Component: Homepage },
        { path: 'about', Component: About },
        { path: 'account', Component: Account },
        { path: '/products/:id', Component: Product },
        {path: '*', Component: NotFound }

      ],





    },
  ])
  return (
    <ShopContextProvider>
      <RouterProvider router={routes} />
    </ShopContextProvider>
  )
}

export default App
