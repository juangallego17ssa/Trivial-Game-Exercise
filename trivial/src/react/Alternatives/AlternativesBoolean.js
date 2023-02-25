import { useNavigate } from "react-router-dom"

export const AlternativesBoolean = (props) => {
    
    const id = props.id
    const question = props.question
    const correct = question.correct_answer
    
    const navigate = useNavigate()
    
    const handleClick = (answer) => {
        console.log(answer)
        if (answer === correct) {
            
        }
        if (+id < 5 ) {
        navigate(`/question/${+id+1}`)
        } else {navigate(`/result`)}
    }

    return(
        <>
        <button onClick={ () =>handleClick("True")}>true</button>
        <button onClick={ () =>handleClick("False")}>false</button>
        </>
    )
}