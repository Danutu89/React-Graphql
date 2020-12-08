/**
 *
 * SearchBar
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { InputGroup, Input, Icon } from 'rsuite';
import { messages } from './messages';

interface Props {
  placeholder: string;
  style?: object;
  size?: string;
  color?: string | '#a4a9b3';
}

export const SearchBar = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { placeholder, color, style, size } = props;

  return (
    <InputGroup inside {...props}>
      <Input placeholder={placeholder} style={{ color }} />
      <InputGroup.Button componentClass="button">
        <Icon icon="search" />
      </InputGroup.Button>
    </InputGroup>
  );
});
