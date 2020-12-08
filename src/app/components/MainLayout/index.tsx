/**
 *
 * MainLayout
 *
 */
import React, { memo, ReactElement } from 'react';
import { FlexboxGrid } from 'rsuite';
import { Navbar } from '../Navbar/Loadable';

interface Props {
  children: ReactElement;
}

export const MainLayout = memo((props: Props) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={8}>colspan={6}</FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={8}>{children}</FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={8}>colspan={6}</FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
});
