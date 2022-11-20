import React, { createRef, Suspense } from 'react'

const ProductPage = React.lazy(() => import('./pages/ProductPage'))
const Checkout = React.lazy(() => import('./pages/Checkout'))
const All = React.lazy(() => import('./pages/menu/All'))
const Men = React.lazy(() => import('./pages/menu/Men'))
const Shoes = React.lazy(() => import('./pages/menu/Shoes'))
const Watches = React.lazy(() => import('./pages/menu/Watches'))
const Home = React.lazy(() => import('./pages/Home'))
const Women = React.lazy(() => import('./pages/menu/Women'))
const CategoryPage = React.lazy(() => import('./pages/CategoryPage'))

const routes = [
  {
    path: '/',
    name: 'Home',
    element: (
      <Suspense fallback={<div />}>
        <Home />
      </Suspense>
    ),
    nodeRef: createRef()
  },
  {
    path: '/men',
    name: 'Men',
    element: (
      <Suspense fallback={<div />}>
        <Men />
      </Suspense>
    ),
    nodeRef: createRef()
  },
  {
    path: '/women',
    name: 'Women',
    element: (
      <Suspense fallback={<div />}>
        <Women />
      </Suspense>
    ),
    nodeRef: createRef()
  },
  {
    path: '/watches',
    name: 'Watches',
    element: (
      <Suspense fallback={<div />}>
        <Watches />
      </Suspense>
    ),
    nodeRef: createRef()
  },
  {
    path: '/shoes',
    name: 'Shoes',
    element: (
      <Suspense fallback={<div />}>
        <Shoes />
      </Suspense>
    ),
    nodeRef: createRef()
  },
  {
    path: '/all',
    name: 'All',
    element: (
      <Suspense fallback={<div />}>
        <All />
      </Suspense>
    ),
    nodeRef: createRef()
  },
  {
    path: '/products/:category',
    name: 'category',
    element: (
      <Suspense fallback={<div />}>
        <CategoryPage />
      </Suspense>
    ),
    nodeRef: createRef()
  },
  {
    path: '/product/:id',
    name: 'product',
    element: (
      <Suspense fallback={<div />}>
        <ProductPage />
      </Suspense>
    ),
    nodeRef: createRef()
  }
]

const routesOrder = [
  {
    path: '/checkout',
    name: 'Checkout',
    element: <Checkout />,
    nodeRef: createRef()
  }
]

export { routesOrder }
export default routes
