/**
 *
 * PostMinList
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { PostMinCard } from '../PostMinCard';
import { Posts } from './types';
import { Loader } from 'rsuite';

interface Props {
  posts: Posts;
}

export const PostMinList = memo((props: Props) => {
  const { posts } = props;

  return (
    <List>
      {!posts.loading ? (
        posts.results.edges.map(edge => {
          if (edge?.node)
            return <PostMinCard key={edge.node.id} post={edge.node} />;
          else return <></>;
        })
      ) : (
        <Loader center size="md" content="" vertical />
      )}
    </List>
  );
});

const List = styled.div`
  min-height: 40vh;
`;
