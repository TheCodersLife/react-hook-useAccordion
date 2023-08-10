import Accordion from "./components/Accordion/Accordion"
import useAccordion from "./hooks/useAccordion"

function App() {

    const steps: StepsType[] = [
        {
            name: "accordion1",
            title: "Accordion 1 Title",
            render: (props: any) => (
                <p>
                    {/*content*/}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sit quod vero corrupti ducimus iste suscipit, culpa maiores minima sunt nobis adipisci expedita aliquid voluptatibus ab facere. Earum, distinctio quidem.
                </p>
            )
        },
        {
            name: "accordion2",
            title: "Accordion 2 Title",
            render: (props: any) => (
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, soluta quia odio dicta aspernatur vel, nesciunt repudiandae perspiciatis adipisci ipsum quae laborum minima praesentium iste modi doloremque officia saepe vitae!
                </p>
            )
        }
    ]

    const accordion = useAccordion(steps, 'accordion1')

    return (
        <div className="App">
            <Accordion {...accordion} />
        </div>
    )
}


export default App
