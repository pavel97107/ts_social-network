const SEND_MESSAGE: string = 'SEND_MESSAGE'
const CHANGE_VALUE_MESSAGE: string = 'CHANGE_VALUE_MESSAGE'

type typeAction = {
    type: string,
    value: string | number
}
type postInPosts = {
    id: number,
    message: string
}
type initState = {
    dialogsData: Array<postInPosts>,
    messagesData: Array<postInPosts>,
    valueTextArea: string
}
type SendMessageAction  ={
    type: typeof SEND_MESSAGE
}
type changeValueAction ={
    type: typeof CHANGE_VALUE_MESSAGE,
    value: string
}

let initialState: initState = {
    dialogsData: [],
    messagesData: [],
    valueTextArea: ''
}

const dialogsReducer = (state = initialState, action: typeAction) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let newMessage = {id: 1, message: state.valueTextArea}
            return {
                ...state, messagesData: [...state.messagesData, newMessage], valueTextArea: ''
            }
        }
        case CHANGE_VALUE_MESSAGE: {
            return {
                ...state, valueTextArea: action.value
            }
        }
        default: {
            return state;
        }
    }
}

export function sendMessageAC(): SendMessageAction {
    return {type: SEND_MESSAGE}
}

export function changeValueMessageAC(value: string): changeValueAction {
    return {type: CHANGE_VALUE_MESSAGE, value: value}
}

export default dialogsReducer;