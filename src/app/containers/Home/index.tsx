/**
 *
 * Home
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, homeActions } from './slice';
import { selectHome } from './selectors';
import { homeSaga } from './saga';

import { PostMinList } from '../../components/PostMinList';

import { MainLayout } from '../../components/MainLayout/Loadable';

interface Props {}

export const Home = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homeSaga });

  const { useEffect } = React;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const home = useSelector(selectHome);

  console.log(home);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    dispatch(homeActions.getPosts());
  });

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <MainLayout>
        <PostMinList posts={home.posts} />
      </MainLayout>
    </>
  );
});
