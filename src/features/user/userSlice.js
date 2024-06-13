import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: JSON.parse(localStorage.getItem('username')) || '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName(state, action) {
            state.username = action.payload
            localStorage.setItem('username', JSON.stringify(action.payload))
        },
        logOut(state, action) {
            state.username = ''
            localStorage.removeItem('username')
            // localStorage.removeItem('cart')
        },
    },
})
export const { updateName, logOut } = userSlice.actions
export default userSlice.reducer
