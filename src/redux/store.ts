import { configureStore  } from '@reduxjs/toolkit'
import homeCardReducer from './Slice/homeCardSlice'


const middlewares:any = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: {
    homeCard : homeCardReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch