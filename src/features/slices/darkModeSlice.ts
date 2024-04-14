import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IInitial {
    isDark:boolean
}

const initialState:IInitial = {
    isDark:JSON.parse(localStorage.getItem("dark") || 'false') 
}

export const darkModeSlice = createSlice({
    name:'darkmode',
    initialState,
    reducers:{
        setDarkMode:(state,action:PayloadAction<boolean>) => {
            localStorage.setItem("dark", JSON.stringify(action.payload))
            state.isDark = action.payload
        }
    }
})

export const {setDarkMode} = darkModeSlice.actions
export default darkModeSlice.reducer
