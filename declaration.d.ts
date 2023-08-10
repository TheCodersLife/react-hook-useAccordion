type StepsType = {
    name: string,
    title: string,
    render: (props: any) => JSX.Element
}

type UseAccordionType = {
    steps: StepsType[],
    activeIndex: number,
    currentStep: StepsType,
    goNext: () => void,
    goPrev: () => void,
    handleHeaderClick: (index: number) => void,
    isActive: (index: number) => boolean
}