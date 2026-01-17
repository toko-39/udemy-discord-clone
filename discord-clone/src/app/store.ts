import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../futures/userSlice";
import channelReducer from "../futures/channelSlice";

export const store = configureStore({
  reducer: { user: userReducer, channel: channelReducer },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
