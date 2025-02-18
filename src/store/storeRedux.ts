import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { player } from '../slices/player'

export const store = configureStore({
    reducer: {
        player
    }
})

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch