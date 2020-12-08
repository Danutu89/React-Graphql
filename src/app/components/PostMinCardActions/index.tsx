/**
 *
 * PostMinCardActions
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Button, Icon } from 'rsuite';
import { Bar } from './styles';
import { PostNode } from 'gql-types';

interface Props {
  post: PostNode;
}

export const PostMinCardActions = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { post } = props;

  return (
    <Bar>
      <Button>
        <Icon icon="thumbs-o-up" style={{ marginRight: '0.3rem' }} />
        Like
      </Button>
      <Button>
        <Icon icon="comment" style={{ marginRight: '0.3rem' }} />
        Comment
      </Button>
      <Button>
        <Icon icon="share-alt" style={{ marginRight: '0.3rem' }} />
        Share
      </Button>
    </Bar>
  );
});
