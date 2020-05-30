const SEND_MESSAGE: string = 'SEND_MESSAGE'
const CHANGE_VALUE_MESSAGE: string = 'CHANGE_VALUE_MESSAGE'

export type postInPosts = {
    id: number,
    message: string
}
let initialState = {
    dialogsData: [] as Array<postInPosts>,
    messagesData: [] as Array<postInPosts>,
    valueTextArea: '' as string
}
export type stateType = typeof initialState;
type actionType = ReturnType<typeof sendMessageAC> & ReturnType<typeof changeValueMessageAC>;


const dialogsReducer = (state: stateType = initialState, action: actionType): stateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage: postInPosts = {id: 1, message: state.valueTextArea}
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


function inferLiteralFromString<T extends string>(arg: T): T {
    return arg
}


export const sendMessageAC = () => ({type: inferLiteralFromString('SEND_MESSAGE')})
export const changeValueMessageAC = (value: string) => ({
    type: inferLiteralFromString('CHANGE_VALUE_MESSAGE'),
    value: value
})


export default dialogsReducer;