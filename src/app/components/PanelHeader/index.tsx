/**
 *
 * PanelHeader
 *
 */
import React, { memo } from 'react';
import { Avatar } from 'rsuite';
import styled from 'styled-components/macro';
import moment from 'moment';
import { UserNode } from 'gql-types';

interface Props {
  author: UserNode;
  timestamp: string;
}

export const PanelHeader = memo((props: Props) => {
  const { author, timestamp } = props;

  return (
    <Header style={{ display: 'flex', padding: '1rem' }}>
      <Avatar
        circle
        src="https://stackoverflow.com/users/6182233/mitch-kroska"
      />
      <div style={{ display: 'grid' }}>
        <span style={{ margin: '0rem 0.6rem' }}>{author?.fullName}</span>
        <span style={{ margin: '0rem 0.6rem', fontSize: '12px' }}>
          {moment(timestamp).fromNow()}
        </span>
      </div>
    </Header>
  );
});

const Header = styled.div`
  display: flex;
  padding: 1rem;
`;
