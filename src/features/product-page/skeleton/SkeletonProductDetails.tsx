import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonProductDetails = () => {
  return (
    <div>
      <Skeleton style={{ marginTop: 15 }} />
      <Skeleton style={{ marginTop: 15 }} />
      <Skeleton style={{ marginTop: 15 }} />
      <Skeleton style={{ width: '100%', margin: 0, marginTop: 25 }} />
      <Skeleton style={{ marginTop: 40 }} />
      <Skeleton style={{ marginTop: 40 }} />
    </div>
  )
}

export default SkeletonProductDetails
