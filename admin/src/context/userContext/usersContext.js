import { createContext, useReducer } from 'react'
import UsersReducer from './usersReducer'

const INITIAL_STATE = {
    users: [],
    isFetching: false,
    error: false
}

export const UsersContext = createContext(INITIAL_STATE)

export const UsersContextProvider = ({ children })=>{
    const [state, dispatch] = useReducer(UsersReducer, INITIAL_STATE)

    return(
        <UsersContext.Provider value={{
            users: state.users,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </UsersContext.Provider>
    )
}
