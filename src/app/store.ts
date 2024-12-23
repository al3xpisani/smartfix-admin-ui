import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice";
import apiSlice from "../api/apiSlice";

const rootReducer = combineReducers({
  categories: categoryReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }).prepend(apiSlice.middleware),
});
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
