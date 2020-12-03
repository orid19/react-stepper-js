import React from 'react'
import styles from './styles.module.css'
import Stepper from './Stepper'

export const ExampleComponent = ({ text }) => {
  return (
    <Stepper
      steps={[
        { label: 'step1' },
        { label: 'step2' },
        { label: 'step3' }
      ]}
      currentStep={2}
    />
  )
}
