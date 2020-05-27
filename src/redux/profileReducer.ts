const ADD_POST: string = 'ADD_POST'
const CHANGE_VALUE: string = 'CHANGE_VALUE'

type typeAction =  {
    type: string,
    value: string | number
}
interface initState   {
    posts: Array<{id: number, message: string, likeCount: number}>,
    valueTextArea: string
}
interface SendMessageAction {
    type: typeof ADD_POST
}
interface changeValueAction {
    type: typeof CHANGE_VALUE,
    value: string
}


let initialState : initState = {
    posts: [
        {id: 1, message: 'string', likeCount: 9}
        ],
    valueTextArea: ''
}

const profileReducer = (state = initialState, action : typeAction) => {
    debugger;
    switch (action.type) {
        case ADD_POST: {
            let newPost : object = {id: 2, message: state.valueTextArea, likeCount: 10}
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

export function addPost() : SendMessageAction {
return {type: ADD_POST}
}
export function changeValue(value: string) : changeValueAction {
return {type: CHANGE_VALUE, value: value}
}

export default profileReducer;