import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [authData, setAuthData] = useState({
    user: null,
    isLoggedIn: false,
    role: null
  })

  const login = (user) => {
    setAuthData({
      user,
      isLoggedIn: true,
      role: user.role
    })
  }

  const logout = () => {
    setAuthData({
      user: null,
      isLoggedIn: false,
      role: null
    })
  }

  return (
    <AuthContext.Provider
      value={{
        authData,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}