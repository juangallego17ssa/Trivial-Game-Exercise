import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import trivialAPI from "../axios/trivialAPI"
import { setQuestions } from "../redux/Slices/questionsSlice"
import { StyledButton } from "../styles/StyledComponents/Button.style"
import { useDispatch } from "react-redux"


const Home = () => {
    
    const dispatch = useDispatch()
    
    const fetchQuestions = async () => {
        const response = await trivialAPI()
        const questions = response.data.results
        dispatch(setQuestions(questions))
    }
    
    useEffect( () => {fetchQuestions()} , [] )
    
    
    const navigate = useNavigate()
    
    const handleStart = () => {
        navigate("/question/1")
    }

    return(
        <StyledButton onClick={handleStart}>Start the Game!</StyledButton>
    )
}

export default Home