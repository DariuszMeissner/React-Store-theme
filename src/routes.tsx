import React, { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { IStep } from './api/feature/checkout/checkoutSlice'
import App from './App'
import OrderPage from './pages/OrderPage'
import routes, { routesOrder } from './routes.config'

const AppRoutes: FC = () => {
  const location = useLocation()

  const stepCart: IStep = { step: 'cart' }
  const stepConfirmation: IStep = { step: 'confirmation' }

  const isShop =
    location.pathname !== `/checkout/${stepCart.step}` &&
    location.pathname !== `/checkout/${stepConfirmation.step}`

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
