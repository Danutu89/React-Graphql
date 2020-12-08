/**
 *
 * PostMinCard
 *
 */
import React, { memo } from 'react';

import { PanelHeader } from '../PanelHeader';
import { PanelTitle } from '../PanelTitle';
import { PanelBody } from '../PanelBody';
import { PostMinCardActions } from '../PostMinCardActions';
import { Panel } from './styles';
import { PostNode } from 'gql-types';

interface Props {
  post: PostNode;
}

export const PostMinCard = memo((props: Props) => {
  const { post } = props;

  return (
    <Panel
      shaded
      bordered
      bodyFill
      style={{ display: 'inline-block', width: '100%', margin: '0.3rem 0' }}
    >
      <PanelHeader author={post?.author} timestamp={post?.createdOn} />
      <img
        src="https://www.gqrgm.com/wp-content/uploads/2019/09/2.-Blog-Banner-Template.jpg"
        alt="idk"
        width="100%"
      />
      <PanelTitle title={post?.title} />
      <PanelBody body={post?.body} />
      <PostMinCardActions post={post} />
    </Panel>
  );
});
