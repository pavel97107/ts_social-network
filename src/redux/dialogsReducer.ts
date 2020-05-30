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
export type actionType = inferActionsType<typeof action>;

const dialogsReducer = (state: stateType = initialState, action: actionType): stateType => {
    switch (action.type) {
        case "SEND_MESSAGE": {
            let newMessage: postInPosts = {id: 1, message: state.valueTextArea}
            return {
                ...state, messagesData: [...state.messagesData, newMessage], valueTextArea: ''
            }
        }
        case "CHANGE_VALUE_MESSAGE": {
            return {
                ...state, valueTextArea: action.value
            }
        }
        default: {
            return state;
        }
    }
}

export let action = {
    sendMessageAC: () => ({type: 'SEND_MESSAGE'} as const ),
    changeValueMessageAC:  (value: string) => ({
        type: 'CHANGE_VALUE_MESSAGE',
        value: value
    } as const)
}

type inferActionsType<T> = T extends {[key: string] : (...arg : any[]) => infer U} ? U : never

export default dialogsReducer;