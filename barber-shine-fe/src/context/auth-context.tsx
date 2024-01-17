import React, { useEffect, useState } from 'react'
export interface authContext {
  is_login: boolean
  first_name?: string
  last_name?: string
  roles: string[]
  balance: number
  number_id: number
}

export const initialState: authContext = {
  is_login: false,
  first_name: '',
  last_name: '',
  roles: [],
  balance: 0,
  number_id: 0,
}

export const AuthStateContext = React.createContext<{
  authState: authContext
  setAuthState: React.Dispatch<React.SetStateAction<authContext>>
}>({
  authState: initialState,
  setAuthState: () => {},
})

type AuthProviderProps = {
  children: React.ReactNode
  pathLoginPage?: string
  pathRedirectIfLoggedIn?: string
  pathRoles?: {}
  requiredLoggedInPaths?: string[]
}

function AuthProvider({
  children,
  pathLoginPage,
  pathRedirectIfLoggedIn,
  pathRoles,
  requiredLoggedInPaths,
}: AuthProviderProps) {
  const [authState, setAuthState] = useState<authContext>(initialState)

  useEffect(() => {
    const refreshTokenListener = (e: any) => {
      setAuthState((prev) => ({
        ...prev,
        roles: e.detail.roles,
      }))
    }
    document.addEventListener('refresh_token', refreshTokenListener)
    return () =>
      document.removeEventListener('refresh_token', refreshTokenListener)
  }, [])
  return (
    <AuthStateContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthStateContext.Provider>
  )
}

export { AuthProvider }
