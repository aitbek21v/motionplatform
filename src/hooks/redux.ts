import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, rootState } from "../app/store";
import { useDispatch } from "react-redux";

export const useAppSelector:TypedUseSelectorHook<rootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()