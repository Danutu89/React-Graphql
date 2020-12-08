import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { homeActions } from './slice';
import { GET_POSTS } from '../gql';
import request from 'utils/request';

export function* getPosts() {
  console.log(2);

  const { posts, errors } = yield call(request, GET_POSTS, {});

  if (errors) yield put(homeActions.getPostsFailed(errors));
  else yield put(homeActions.gotPosts(posts));
}

export function* homeSaga() {
  yield takeLatest(homeActions.getPosts.type, getPosts);
}
