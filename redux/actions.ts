import { ActionData } from "./reducer"

function setToken(token:string):ActionData {
    return {
        type: "SET_TOKEN",
        payload: token
    }
}

function setEmail(email:string):ActionData {
    return {
        type: "SET_EMAIL",
        payload: email
    }
}

function setVerifcationCode(code:string):ActionData {
    return {
        type: "SET_V_C",
        payload: code
    }
}

export { setToken, setEmail, setVerifcationCode }