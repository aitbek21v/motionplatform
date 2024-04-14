import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface IInitial {
    isPassword:boolean
}
const initialState:IInitial = {
    isPassword:JSON.parse(localStorage.getItem('password') || 'false')
}

export const isPasswordSlice = createSlice({
    name:'password',
    initialState,
    reducers:{
        setTypePassword:(state,action:PayloadAction<boolean>) => {
            localStorage.setItem('password',JSON.stringify(action.payload))
            state.isPassword = action.payload
        }
    }
})

export const {setTypePassword} = isPasswordSlice.actions
export default isPasswordSlice.reducer