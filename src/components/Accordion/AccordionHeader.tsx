import React, { useMemo } from 'react';
import { IoChevronForwardSharp } from 'react-icons/io5'

import styles from './Accordion.module.scss'

const AccordionHeader: React.FC<AccordionHeaderProps> = (props) => {

    const { activeIndex, step, handleHeaderClick, index, isActive } = props

    const getClassNames = () => {

        const classes: string[] = [styles.accordionHeader]

        if (activeIndex === index) classes.push(styles.active)

        return classes.join(' ')
    }

    return useMemo(() => (
        <div
            className={getClassNames()}
            onClick={handleHeaderClick.bind(null, index)}
        >
            <span>{step.title}</span>

            <IoChevronForwardSharp
                className={[
                    styles.chevron,
                    isActive(index)
                        ? styles.chevronActive
                        : styles.chevronInactive
                ].join(' ')}
            />

        </div>
    ), [activeIndex])
}

interface AccordionHeaderProps extends UseAccordionType {
    step: StepsType,
    index: number
}

export default AccordionHeader;