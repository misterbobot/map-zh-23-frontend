import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { usersListReducer } from '../features/usersList/usersListSlice'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { api } from './api'
import { filtersReducer } from '../features/filters/filtersSlice'

export const store = createStore(combineReducers(
  {
    usersList: usersListReducer,
    filters: filtersReducer
  }
), applyMiddleware(thunk))



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch