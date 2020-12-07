import React from 'react'

import Stepper from 'react-stepper-js'
import 'react-stepper-js/dist/index.css'

const App = () => {
  return (
    <Stepper
      color='#18aed6'
      fontSize='20px'
      fontColor="#18aed6"
      steps={[
        { label: 'step 1' },
        { label: 'step 2' },
        { label: 'step 3' },
        { label: 'step 4' }
      ]}
      currentStep={3}
    />
  )
}

export default App
