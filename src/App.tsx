import { useEffect} from 'react'

import Routing from '@/Routing.tsx'
import Loader from '@/components/lib/Loader'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { appState, setLoadApp } from '@/store/appReducer'


function App() {
  const {loadApp} = useAppSelector(appState)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setLoadApp(true))
    setTimeout(() => {
      dispatch(setLoadApp(false))
    }, 1000)
  }, [])

  return (
    <>
      {loadApp ? <Loader /> : <Routing />}
    </>
  )
}

export default App
