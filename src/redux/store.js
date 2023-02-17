import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import greetingsReducer from './greetingsRedux/greetings';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
