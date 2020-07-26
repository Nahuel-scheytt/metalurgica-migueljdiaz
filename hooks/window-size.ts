import { useReducer, useEffect } from 'react'

interface WindowSizeState {
  isMobile: boolean
  isTabletPortrait: boolean
  isTabletLandscape: boolean
  isDesktop: boolean
}
const initialWindowSizeState: WindowSizeState = {
  isMobile: true,
  isTabletPortrait: false,
  isTabletLandscape: false,
  isDesktop: false,
}
interface SetMobileAction {
  type: 'mobile'
  state: boolean
}
interface SetTabletPortraitAction {
  type: 'tabletPortrait'
  state: boolean
}
interface SetTabletLandscapeAction {
  type: 'tabletLandscape'
  state: boolean
}
interface SetDesktopAction {
  type: 'desktop'
  state: boolean
}

type WindowSizeAction = SetMobileAction | SetTabletPortraitAction | SetTabletLandscapeAction | SetDesktopAction

const WindowSizeReducer = (state: WindowSizeState, action: WindowSizeAction): WindowSizeState => {
  switch (action.type) {
    case 'mobile':
      return {
        ...state,
        isMobile: action.state,
      }
    case 'tabletPortrait':
      return {
        ...state,
        isTabletPortrait: action.state,
      }
    case 'tabletLandscape':
      return {
        ...state,
        isTabletLandscape: action.state,
      }
    case 'desktop':
      return {
        ...state,
        isDesktop: action.state,
      }
    default:
      return state
  }
}

export const useWindowSize = (): {
  isMobile: boolean
  isTabletPortrait: boolean
  isTabletLandscape: boolean
  isDesktop: boolean
} => {
  const [state, dispatch] = useReducer(WindowSizeReducer, initialWindowSizeState)

  const setResize = () => {
    const isMobileSize = window.innerWidth < 768
    dispatch({ type: 'mobile', state: isMobileSize })
    const isTabletPortraitSize = window.innerWidth < 1024 && window.innerWidth >= 768
    dispatch({ type: 'tabletPortrait', state: isTabletPortraitSize })
    const isTabletLandscapeSize = window.innerWidth < 1200 && window.innerWidth >= 1024
    dispatch({ type: 'tabletLandscape', state: isTabletLandscapeSize })
    const isDesktopSize = window.innerWidth >= 1200
    dispatch({ type: 'desktop', state: isDesktopSize })
  }

  useEffect(() => {
    setResize()
    window.addEventListener('resize', setResize)
    return () => {
      window.removeEventListener('resize', setResize)
    }
  }, [])

  return { ...state }
}
