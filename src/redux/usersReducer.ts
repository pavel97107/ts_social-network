type photosType = { small: string, large: string | null  }
export type itemsType = { name: string, id: number, photos: photosType, status: null | string, followed: boolean }
let initialState = {
    users: [{
        name: "Shubert",
        id: 1,
        photos: {small: 'https://sun1.beltelecom-by-minsk.userapi.com/EwH4fyD1J_VJ_BpG7bUunbW_DDQcxvSgqsPbLA/Bdg1d4ZjjVk.jpg', large: null},
        status: null,
        followed: false
    }] as Array<itemsType>,
    totalCount: 30 as number,
    error: null as never
}
type stateType = typeof initialState;
type actionType = inferType<typeof action>;
const usersReducer = (state: stateType = initialState, action: actionType): stateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }
        case 'SET_USERS': {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default: {
            return state;
        }
    }
}


export let action = {
    follow: (userId: number) => ({type: 'FOLLOW', userId: userId} as const),
    unFollow: (userId: number) => ({type: 'UNFOLLOW', userId: userId} as const),
    setUsers: (users: Array<itemsType>) => ({type: 'SET_USERS', users: users} as const)
}

type inferType<T> = T extends { [key: string]: (...arg: any[]) => infer U } ? U : never


export default usersReducer;