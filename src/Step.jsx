import React from 'react'
import styles from './styles.module.css'

const Step = ({ isCompleted, label, shape, showLine, showVIcon }) => {
  return (
    <div className={styles.Step}>
      {showLine && (
        <div
          className={`${styles.StepLineThrough} ${
            isCompleted ? styles.StepLineThroughDone : ''
          }`}
        ></div>
      )}
      <div className={styles.StepName}>{label}</div>
      <div
        className={`${styles.StepShape} ${isCompleted ? styles.stepDone : ''}`}
      >
        {showVIcon && (
          <svg
            width='15px'
            height='15px'
            viewBox='0 0 20 20'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g
              id='icons/20/v'
              stroke='none'
              stroke-width='1'
              fill='none'
              fill-rule='evenodd'
            >
              <polygon
                id='Shape'
                fill='#ffffff'
                points='7 14.17 2.83 10 1.41 11.41 7 17 19 5 17.59 3.59'
              ></polygon>
            </g>
          </svg>
        )}
      </div>
    </div>
  )
}

export default Step
