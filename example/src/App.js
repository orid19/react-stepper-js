import React from 'react'

import Steeper from 'react-stepper-js'
import 'react-stepper-js/dist/index.css'

const App = () => {
  return (
    <Steeper
      color='#23b561'
      fontSize='16px'
      steps={[
        { label: 'step 1' },
        { label: 'step 2' },
        { label: 'step 3' },
        { label: 'step 4' },
        { label: 'step 5' }
      ]}
      currentStep={4}
    />
  )
}

export default App
