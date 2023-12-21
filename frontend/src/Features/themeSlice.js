import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: true,
  reducers: {
    toogleTheme:(state)=>
        state=!state
  }
})

export const { toogleTheme } = themeSlice.actions
export default themeSlice.reducer