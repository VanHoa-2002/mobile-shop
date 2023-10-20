import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlider'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})