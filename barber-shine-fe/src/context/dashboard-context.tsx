import React, { Dispatch, useContext, useReducer } from 'react'
import {
  DashboardActions,
  IDashboardActions,
  dashboardInitStates,
  dashboardReducer,
  dashboardStates,
} from '@/reducers/dashboard-reducer'

const DashboardContext = React.createContext({
  dashboardState: {} as dashboardStates,
  dashboardDispatch: (() => {}) as Dispatch<IDashboardActions>,
})

export default function DashboardProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [dashboardState, dashboardDispatch] = useReducer(
    dashboardReducer,
    dashboardInitStates
  )

  const toggleSideBar = () => {
    dashboardDispatch({
      type: DashboardActions.TOGGLE_SIDEBAR,
    })
  }
  const toggleMiniSideBar = () => {
    dashboardDispatch({
      type: DashboardActions.TOGGLE_MINI_SIDEBR,
    })
  }

  return (
    <DashboardContext.Provider
      value={{
        dashboardState: {
          ...dashboardState,
          toggleSideBar,
          toggleMiniSideBar,
        },
        dashboardDispatch,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => {
  return useContext(DashboardContext)
}
