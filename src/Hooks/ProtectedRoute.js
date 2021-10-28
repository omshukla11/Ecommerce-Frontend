import React from "react";
import { Route, Redirect } from "react-router-dom";
import useToken from "./useToken";

export function Protected({component: Component, token: Token ,...rest}) {

    const {token , setToken} = useToken()

    return (
        <Route {...rest} render={
            (props) => {
                if(!token){
                    return <Redirect to={
                        {
                            pathname: '/login/',
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
                else {
                    return <Component token={Token} {...props} />
                }
            }
        } />
    )
}

export function ReverseProtected({component: Component, ...rest}) {

    const {token , setToken} = useToken()

    return (
        <Route {...rest} render={
            (props) => {
                if(!token){
                    return <Component {...props} />   
                }
                else {
                    return <Redirect to={
                        {
                            pathname: '/home/',
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }
        } />
    )
}