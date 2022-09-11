import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    loginUser: (state, action) => {
      //console.log({module: 'slice', state, action})
      return {...state, ...action.payload};
    },
  },
});

export const {loginUser} = authSlice.actions;
export default authSlice.reducer;
