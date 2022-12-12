import React, { createRef, Suspense } from 'react'
import {
  SkeletonCategoryPage,
  SkeletonHome,
  SkeletonProductPage
} from './features'

const Home = React.lazy(() => import('./pages/Home'))
const ProductPage = React.lazy(() => import('./pages/ProductPage'))
const Checkout = React.lazy(() => import('./pages/Checkout'))
const CategoryPage = React.lazy(() => import('./pages/CategoryPage'))
const ThankYouPage = React.lazy(() => import('./pages/ThankYouPage'))

const routes = [
  {
    path: '/',
    name: 'Home',
    element: (
      <Suspense fallback={<SkeletonHome />}>
        <Home />
      </Suspense>
    ),
    nodeRef: createRef()
  },
  {
    path: '/products/:category',
    name: 'category',
    element: (
      <Suspense fallback={<SkeletonCategoryPage />}>
        <CategoryPage />
      </Suspense>
    ),
    nodeRef: createRef()
  },
  {
    path: '/product/:id',
    name: 'product',
    element: (
      <Suspense fallback={<SkeletonProductPage />}>
        <ProductPage />
      </Suspense>
    ),
    nodeRef: createRef()
  },
  {
    path: '/thank-you',
    name: 'thankyoupage',
    element: (
      <Suspense fallback={<div />}>
        <ThankYouPage />
      </Suspense>
    ),
    nodeRef: createRef()
  }
]

const routesOrder = [
  {
    path: '/checkout/:step',
    name: 'Checkout',
    element: (
      <Suspense fallback={<div />}>
        <Checkout />
      </Suspense>
    ),
    nodeRef: createRef()
  }
]

export { routesOrder }
export default routes
