import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sideBarItems: []
}

const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
        addSideBarItem: (state, action) => {
            state.sideBarItems.push(action.payload)
        }
    }
})

const sideBarReducer = sideBarSlice.reducer
const sideBarActions = sideBarSlice.actions

export {sideBarReducer, sideBarActions}