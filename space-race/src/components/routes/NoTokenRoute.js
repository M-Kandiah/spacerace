import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuthContext } from '../contexts/auth'

export default function NoTokenRoute({children}) {
    const {currentUser} = useAuthContext();
    console.log(!!currentUser)
    return (
        <Route>
            {!currentUser ? children : <Redirect to='/home'/>}
        </Route>
    )
}