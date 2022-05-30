import React, {useState} from 'react'
import {Data} from './Data'
import ListAccordion from './ListAccordion';
// import '../components/Accordian.css'


const Accordion = () => {
    const [data, setData] = useState(Data);

    return (
        <>
            <h1>React Question and Answers</h1>
            <div className="container">
                <div className="accordionBlock">
                    {
                        data.map((item) => (
                            <ListAccordion key={data.id} {...item}/>
                        ))
                    }
                </div>
                 
            </div>
        </>
    )
}

export default Accordion
