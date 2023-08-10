import React from 'react';

import styles from './Accordion.module.scss'

const AccordionBody: React.FC<AccordionBodyProps> = (props) => {

    const { activeIndex, step, index } = props;

    const getClassNames = () => {

        const classes: string[] = [styles.accordionBody]

        if (activeIndex === index) classes.push(styles.active)

        return classes.join(' ')
    }

    return (
        <div
            className={getClassNames()}
        >
            {step.render && step.render(step)}
        </div>
    )
}

interface AccordionBodyProps extends UseAccordionType {
    step: StepsType,
    index: number,
}

export default AccordionBody;