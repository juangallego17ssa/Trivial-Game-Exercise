import axios from "axios"

const configAPI = {
    baseURL: "https://opentdb.com/api.php?amount=5"
}

const trivialAPI = axios.create(
    configAPI
)

export default trivialAPI