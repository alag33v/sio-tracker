import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trackers: [],
  counter: 0
};

const changeCounter = state => {
  state.counter = state.trackers.reduce((acc, curValue) => {
    return acc + curValue.savedTime;
  }, 0);
};

export const usersSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    addTimeTracker: (state, action) => {
      state.trackers = [...state.trackers, action.payload];
    },
    resumeTimer: (state, action) => {
      state.trackers = state.trackers.map(tracker => {
        return tracker.id === action.payload.id ? action.payload : tracker;
      });
      changeCounter(state);
    },
    deleteTimer: (state, action) => {
      state.trackers = state.trackers.filter(
        tracker => tracker.id !== action.payload
      );
      changeCounter(state);
    }
  }
});

export const { addTimeTracker, resumeTimer, deleteTimer } = usersSlice.actions;
export default usersSlice.reducer;
