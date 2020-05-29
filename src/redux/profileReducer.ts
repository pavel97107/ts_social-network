const ADD_POST: string = 'ADD_POST'
const CHANGE_VALUE: string = 'CHANGE_VALUE'

type typeAction = SendMessageAction & changeValueAction;
export type elementsArrayPosts = {
    id: number,
    message: string, likeCount: number
}

interface SendMessageAction {
    type: typeof ADD_POST
}

interface changeValueAction {
    type: typeof CHANGE_VALUE,
    value: string
}

let initialState = {
    posts: [] as Array<elementsArrayPosts | object>,
    valueTextArea: '' as string
}
export type stateType = typeof initialState;

const profileReducer = (state: stateType = initialState, action: typeAction): stateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: object = {id: 2, message: state.valueTextArea, likeCount: 10}
            return {
                ...state, posts: [...state.posts, newPost], valueTextArea: ''
            }
        }
        case CHANGE_VALUE: {
            return {
                ...state, valueTextArea: action.value
            }
        }
        default: {
            return state;
        }
    }
}

export function addPostAC(): SendMessageAction {
    return {type: ADD_POST}
}

export function changeValueAC(value: string): changeValueAction {
    return {type: CHANGE_VALUE, value: value}
}

export default profileReducer;