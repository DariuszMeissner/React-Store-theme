import React, { FC } from 'react'
import TwoColumnsProducts from '../features/home/TwoColumnsProducts'
import Section from '../layout/Section'

const Hero = React.lazy(() => import('../layout/Hero'))

const Home: FC = () => {
  return (
    <div>
      <Hero productId="6" />
      <Section>
        <TwoColumnsProducts productIdOne="1" productIdTwo="2" />
      </Section>
    </div>
  )
}

export default Home
