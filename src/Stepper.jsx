import React, { useState } from "react";
import Step from "./Step";
import styles from './styles.module.css'

const Stepper = ({ steps, currentStep }) => {
    const defualtStep = 1;

    return (
        <div className={styles.Stepper}>
            {steps?.map((step, i) => (
                <Step
                    key={i}
                    label={step.label}
                    showLine={i > 0}
                    showVIcon={
                        currentStep === steps?.length ||
                        currentStep > i + defualtStep
                    }
                    isCompleted={currentStep >= i + defualtStep}
                />
            ))}
        </div>
    );
};

export default Stepper;
