export type elementsArrayPosts = {
    id: number,
    message: string, likeCount: number
}
let initialState = {
    posts: [] as Array<elementsArrayPosts>,
    valueTextArea: '' as string
}
export type stateType = typeof initialState;

const profileReducer = (state: stateType = initialState, action: actionType): stateType => {
    switch (action.type) {
        case 'ADD_POST': {
            let newPost: elementsArrayPosts = {id: 2, message: state.valueTextArea, likeCount: 10}
            return {
                ...state, posts: [...state.posts, newPost], valueTextArea: ''
            }
        }
        case 'CHANGE_VALUE': {
            return {
                ...state, valueTextArea: action.value
            }
        }
        default: {
            return state;
        }
    }
}


type actionType = inferType<typeof action>
type inferType<T> = T extends { [key: string]: (...arg: any[]) => infer U } ? U : never


export let action = {
    changeValueAC: (value: string) => ({type: 'CHANGE_VALUE', value: value} as const),
    addPostAC: () => ({type: 'ADD_POST'} as const)
}

export default profileReducer;