/**
 *
 * PanelBody
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {
  body: string;
}

export const PanelBody = memo((props: Props) => {
  const { body } = props;

  return (
    <Body style={{ padding: '1rem' }}>
      <p>{body}</p>
    </Body>
  );
});

const Body = styled.div`
  padding: 1rem;
`;
