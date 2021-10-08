import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AuthContextProvider } from './context/authContext/AuthContext';
import { MovieContextProvider } from './context/movieContext/movieContext';
import { ListContextProvider } from './context/listContext/listContext';
import { UsersContextProvider } from './context/userContext/usersContext'
ReactDOM.render(
        <AuthContextProvider>
            <MovieContextProvider>
                <ListContextProvider>
                    <UsersContextProvider>
                        <App/>
                    </UsersContextProvider>
                </ListContextProvider>
            </MovieContextProvider>
        </AuthContextProvider>,
    document.getElementById('root')
);