import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}

// import React, { useState, useContext } from "react"

// const TokenContext = React.createContext()
// const TokenUpdateContext = React.createContext()

// export function useToken() {
//   return useContext(TokenContext)
// }

// export function useTokenUpdate() {
//   return useContext(TokenUpdateContext)
// }

// export function TokenProvider({ children }) {

//   const getToken = () => {
//     const tokenString = localStorage.getItem('token');
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
//   };

//   const [token, setToken] = useState(getToken())

//   const saveToken = userToken => {
//     localStorage.setItem('token', JSON.stringify(userToken));
//     setToken(userToken.token);
//   };

//   return (
//     <TokenContext.Provider value={token} >
//       <TokenUpdateContext.Provider value={saveToken} >
//         {children}
//       </TokenUpdateContext.Provider>
//     </TokenContext.Provider>
//   )
// }