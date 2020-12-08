import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { PostNodeConnection } from 'gql-types';
import { GraphQLFormattedError } from 'graphql';

// The initial state of the Home container
export const initialState: ContainerState = {
  posts: {
    results: {} as PostNodeConnection,
    loading: true,
    error: '',
  },
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getPosts(state) {
      state.posts.loading = true;
    },
    gotPosts(state, action: PayloadAction<PostNodeConnection>) {
      state.posts.loading = false;
      state.posts.results = action.payload;
    },
    getPostsFailed(state, action: PayloadAction<GraphQLFormattedError>) {
      state.posts.loading = false;
      state.posts.error = action.payload.message;
    },
  },
});

export const { actions: homeActions, reducer, name: sliceKey } = homeSlice;
