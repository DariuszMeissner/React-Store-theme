import React from 'react'
import useSizeScreen from '../hooks/useSizeScreen'

const Newsletter = () => {
  const screen = useSizeScreen()

  const style = {
    newsletterContainer: {
      background: '#f6f6f6',
      padding: screen.isS ? '48px 16px' : '48px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    title: {
      fontSize: '20px',
      paddingBottom: '10px'
    },
    subtitle: {
      fontSize: '14px',
      fontWeight: 300
    }
  } as const

  return (
    <div style={style.newsletterContainer}>
      <h2 style={style.title}>Subscribe by Email</h2>
      <h3 style={style.subtitle}>
        Register to receive email updates on the latest collections, items,
        services and events
      </h3>
    </div>
  )
}

export default Newsletter
