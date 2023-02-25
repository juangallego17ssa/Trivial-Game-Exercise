import { useNavigate } from "react-router-dom"
import { v4 as uuid } from 'uuid';


export const AlternativesMultiple = (props) => {

    const id = props.id
    const question = props.question
    const correct = question.correct_answer
    const incorrect = question.incorrect_answers
    const alternatives = [...incorrect, correct]
    const randomAlternatives = []
    for (let i = 0; i<4; i++){
        let randomIndex = Math.ceil(Math.random()*alternatives.length)-1
        randomAlternatives.push(alternatives[randomIndex])
        alternatives.splice(randomIndex,1)
    }

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
        {randomAlternatives.map( (e) => <button key={uuid()} onClick={ () =>handleClick(e) }>{e}</button>)}

        </>
    )
}       
