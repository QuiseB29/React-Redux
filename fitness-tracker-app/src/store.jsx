import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from './features/exercisesSlices';

export const store = configureStore({
    reducer: {
        exercises: exercisesReducer,
    },
});