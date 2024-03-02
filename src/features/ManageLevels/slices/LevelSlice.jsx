import { createSlice } from '@reduxjs/toolkit';


  const LevelsSlice = createSlice({
    name: 'levels',
    initialState: {
      levels: [{
        
      }],
    },
reducers: {
    addLevel: (state, action) => {
      state.levels.push(action.payload);
    },
    deleteLevel: (state, action) => {
      state.levels = state.levels.filter(level => level.levelName !== action.payload);
    },
    editLevels: (state, action) => {
      state.levels = state.levels.map(level => {
        if (level.levelName === action.payload.levelName) {
          return action.payload;
        }
        return level;
      });
    },
  },
});
export const { addLevel ,  deleteLevel , editLevels } = LevelsSlice.actions;

export default LevelsSlice.reducer;
