import { createSlice } from '@reduxjs/toolkit'
import { TabType } from '@/store/types.ts'
import { RootState } from '@/store/index.ts'

interface IInitialState {
  activeTab:TabType
  showMenu:boolean
  loadApp: boolean
}

const initialState:IInitialState = {
  activeTab: 'all',
  showMenu: false,
  loadApp: false
}

export  const appReducer = createSlice({
  name:'app',
  initialState,
  reducers:{
    setActiveTab:(state, action) =>{
      state.activeTab = action.payload
    },
    setShowMenu:(state, action) =>{
      state.showMenu = action.payload
    },
    setLoadApp:(state, action) =>{
      state.loadApp = action.payload
    }
  }
})

export const {setActiveTab, setShowMenu, setLoadApp} = appReducer.actions

export const appState = (state: RootState) => state.app

export default appReducer.reducer