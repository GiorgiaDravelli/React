import React from "react"
import { Timer } from '../components/Timer/Timer'
import { HelmetProvider } from 'react-helmet-async';

export const TimerPage = () => {
  return (
    <div>
      <HelmetProvider>
        <title>Timer Page</title>
        <meta name='Timer' content='Choose a sound and a time for your meditation.' />
      </HelmetProvider>
      <Timer/>
    </div>
  )
}