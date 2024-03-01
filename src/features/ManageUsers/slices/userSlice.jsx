// usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [{
      "email": "mohamed@gmail.com",
      "firstName": "mohamed",
      "lastName": "kahleed",
      "level": "junior",
      "position": "frontenddeveloper",
      "role": "admin",
      "team": "developmentteam",
      "username": "mo7amed"
    }
    ],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.username !== action.payload);
    },
    editUsersData: (state, action) => {
      state.users = state.users.map(user => {
        if (user.username === action.payload.username) {
          return action.payload;
        }
        return user;
      });
    },
  },
});

export const { addUser ,  deleteUser , editUsersData } = usersSlice.actions;

export default usersSlice.reducer;
