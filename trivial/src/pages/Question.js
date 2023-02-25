
import { ContainerQuestion } from "../styles/StyledComponents/ContainerQuestion.style"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AlternativesBoolean } from "../react/Alternatives/AlternativesBoolean"
import { AlternativesMultiple } from "../react/Alternatives/AlternativesMultiple"

const Question = () => {

    const params = useParams()
    const id = params.order
    
    
    const question = useSelector( (state) => state.questions.questionsArray[id-1])
    const statement = question.question
    const type = question.type




    return(
        <ContainerQuestion>
            <div className="Statement">
            <p dangerouslySetInnerHTML={ { __html: statement } } />
            </div>
            <div className="Alternatives">
                {type==="boolean" ? <AlternativesBoolean question={question} id={id}/> : <AlternativesMultiple question={question} id={id}/>}
            </div>
        </ContainerQuestion>
    )
}


export default Question