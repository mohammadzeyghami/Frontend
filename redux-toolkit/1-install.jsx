// npm i @reduxjs/toolkit react-redux

// in src create app folder
//         in app folder create store.js

// in store.js

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// in index.js

import { store } from "./app/store";
import Provider from "react-redux";

<Provider store={store}>
  <App />
</Provider>;

// in src folder create features
// in features create counter
// in counter create  counterSlice
// in counter slice

import { createSlice } from "reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducer: {
    increment: () => {
      state.count += 1;
    },
    decrement: () => {
      state.count -= 1;
    },
    reset: () => {
      state.count = 0;
    },
    incrementByAmount: () => {
      state.count += action.payload;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

// in store js
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counterslice ";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// your component you want use this

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
};
