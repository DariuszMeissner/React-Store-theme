import React, { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import routes, { routesOrder } from './routes.config'
import OrderPage from './pages/OrderPage'
import App from './App'

const AppRoutes: FC = () => {
  const location = useLocation()

  const isShop = !location.pathname.match(/checkout/)
  const isCheckoutpage = !isShop

  return (
    <>
      {isShop && (
        <App>
          <Routes location={location}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </App>
      )}

      {isCheckoutpage && (
        <OrderPage>
          <Routes location={location}>
            {routesOrder.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </OrderPage>
      )}
    </>
  )
}

export default AppRoutes
