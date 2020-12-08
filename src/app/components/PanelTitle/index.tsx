/**
 *
 * PanelTitle
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {
  title: string;
}

export const PanelTitle = memo((props: Props) => {
  const { title } = props;

  return (
    <Title>
      <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{title}</span>
    </Title>
  );
});

const Title = styled.div`
  padding: 1rem;
`;
