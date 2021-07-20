import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import React from 'react'
import { RootState } from '..'
import { Feed } from '../types'


const initialState: Array<Feed> = []

export const feedSlice = createSlice({
    name: 'feeds',
    initialState :initialState,
    reducers: {
        addFeed:(state, action: PayloadAction<Feed>)=>{

        },
    }
})

export const { addFeed } = feedSlice.actions
export const selectFeed=(state: RootState)=>state.feeds
export default feedSlice.reducer