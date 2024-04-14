import { combineReducers, configureStore } from "@reduxjs/toolkit";
import darkModeReducer from '../features/slices/darkModeSlice'
import isPasswordReducer from '../features/slices/isPasswordSlice'

const rootReducer = combineReducers({
    dark:darkModeReducer,
    password:isPasswordReducer
})


export const setupStore = () => {
    return configureStore({
        reducer:rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']