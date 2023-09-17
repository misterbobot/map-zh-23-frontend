import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Tag, User } from '../../models'

export interface usersListState {
    list?: User[];
    currentUserUid: string;
    tags: Tag[];
}

const initialState: usersListState = {
    list: [
        
    ],
    currentUserUid: '',
    tags: []
}

export const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<User[]>) => {
      state.list = action.payload
    },
    setCurrentUserUid: (state, action: PayloadAction<string>) => {
      state.currentUserUid = action.payload
    },
    setTags: (state, action: PayloadAction<Tag[]>) => {
      state.tags = action.payload
    }
  },
})

export const { set, setCurrentUserUid, setTags } = usersListSlice.actions

export const usersListReducer = usersListSlice.reducer