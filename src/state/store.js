import { configureStore } from '@reduxjs/toolkit'
import { sideBarReducer } from './features/sideBarSlice'

const store = configureStore({
  reducer: {
    sideBar: sideBarReducer
  },
})

export default store