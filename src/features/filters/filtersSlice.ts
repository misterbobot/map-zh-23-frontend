import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Tag, User } from '../../models'

export interface filtersState {
    tags: Tag[]
}

const initialState: filtersState = {
    tags: []
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    resetFilters: (state) => {
        state.tags = [];
    },
    setFilters: (state, action: PayloadAction<filtersState>) => {
        state.tags = action.payload.tags
    },
  },
})

export const { setFilters, resetFilters } = filtersSlice.actions

export const filtersReducer = filtersSlice.reducer