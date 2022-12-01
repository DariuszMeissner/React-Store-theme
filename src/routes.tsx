import React, { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import App from './App'
import OrderPage from './pages/OrderPage'
import routes, { routesOrder } from './routes.config'

const AppRoutes: FC = () => {
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/checkout' && (
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

      {location.pathname === '/checkout' && (
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
