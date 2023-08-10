import { useState, useEffect, useCallback, useMemo } from "react"

const useAccordion = (steps: StepsType[], activeName: string): UseAccordionType => {

    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [currentStep, setCurrentStep] = useState<StepsType>(steps[0])

    useEffect(() => {
        if (!activeName) return;

        steps.map((step, index) => {
            if (step.name === activeName) {
                setActiveIndex(index)
                setCurrentStep(step)
            }
        })

    }, [])

    const goNext = () => setActiveIndex((next) => next < steps.length ? next + 1 : steps.length)
    const goPrev = () => setActiveIndex((prev) => prev > 0 ? prev - 1 : 0)

    const handleHeaderClick = (index: number) => {
        setActiveIndex(index)
        setCurrentStep(steps[index])
    }

    const isActive = useCallback((index: number) => {
        return index === activeIndex
    }, [activeIndex])

    return useMemo(() => ({
        steps,
        activeIndex,
        currentStep,
        goNext,
        goPrev,
        handleHeaderClick,
        isActive
    }), [activeIndex, currentStep])
}

export default useAccordion;