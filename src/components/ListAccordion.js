import React,{ useState } from 'react'
// import '../components/ListAccordian.css';

const ListAccordion = ({question,answer}) => {
const[showAnswer,setShowAnswer] = useState(false);

const showHideAnswer = ()=>{
    setShowAnswer(!showAnswer);
}

  return (
    <>
    <div className="question">        
        <h2>{question}</h2>
        <button className ="btn" onClick={showHideAnswer}>
          {showAnswer?"➖":"➕"}
        </button>
    </div>
    <div className="answers">
         {showAnswer &&<p>{answer}</p>}

    </div>   
        
  </>
  )
}

export default ListAccordion