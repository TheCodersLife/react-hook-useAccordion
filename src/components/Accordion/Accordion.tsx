import React from 'react';

import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';

import styles from './Accordion.module.scss'

const Accordion: React.FC<AccordionProps> = (props) => {

    const { steps } = props

    const renderContent = (step: StepsType, index: number) => {

        return (
            <React.Fragment key={`accordion-${index.toString()}-${step.name}`}>
                <div className={styles.accordionItem}>

                    <AccordionHeader {...props} step={step} index={index} />

                    <AccordionBody {...props} step={step} index={index} />

                </div>
            </React.Fragment>
        )
    }

    return (
        <div className={styles.accordion}>
            {steps && steps.map((step, index) => renderContent(step, index))}
        </div>
    )
}

interface AccordionProps extends UseAccordionType {
}

export default Accordion;