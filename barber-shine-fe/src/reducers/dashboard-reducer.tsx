export type dashboardStates = {
  is_show_sidebar: boolean
  toggleSideBar: () => void
  is_show_mini_sidebar: boolean
  toggleMiniSideBar: () => void
}

export enum DashboardActions {
  TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR',
  TOGGLE_MINI_SIDEBR = 'TOGGLE_MINI_SIDEBAR',
}

export interface IDashboardActions {
  type: DashboardActions
  payload?: any
}

export const dashboardInitStates: dashboardStates = {
  is_show_sidebar: false,
  toggleSideBar: () => null,
  is_show_mini_sidebar: false,
  toggleMiniSideBar: () => null,
}

export const dashboardReducer = (
  state: dashboardStates,
  action: IDashboardActions
) => {
  switch (action.type) {
    case DashboardActions.TOGGLE_SIDEBAR: {
      const newState = {
        ...state,
        is_show_sidebar: !state.is_show_sidebar,
      }
      return newState
    }

    case DashboardActions.TOGGLE_MINI_SIDEBR: {
      const newState = {
        ...state,
        is_show_mini_sidebar: !state.is_show_mini_sidebar,
      }
      return newState
    }

    default:
      return state
  }
}
