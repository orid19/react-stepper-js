import React from 'react'
import styles from './styles.module.css'
import Step from './Step'

const Stepper = ({ steps, currentStep, fontSize, color }) => {
  const defualtStep = 1

  return (
    <div className={styles.Stepper}>
      {steps?.map((step, i) => (
        <Step
          key={i}
          label={step.label}
          showLine={i > 0}
          showVIcon={
            currentStep === steps?.length || currentStep > i + defualtStep
          }
          isCompleted={currentStep >= i + defualtStep}
          fontSize={fontSize}
          color={color}
        />
      ))}
    </div>
  )
}

export default Stepper
