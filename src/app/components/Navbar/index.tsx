/**
 *
 * Navbar
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar as RNavbar, Header, Body, CustomLink } from './styles';
import { SearchBar } from '../SearchBar/Loadable';
import { LoginModal } from '../LoginModal/Loadable';
import { Nav, Icon } from 'rsuite';
import { messages } from './messages';

interface Props {}

export const Navbar = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <RNavbar>
      <Header>
        <CustomLink to="#">NewApp</CustomLink>
      </Header>
      <Body>
        <Nav>
          <Nav.Item style={{ paddingTop: '0.2rem' }}>
            <SearchBar
              style={{ color: 'white' }}
              placeholder="Search"
              size="sm"
            />
          </Nav.Item>
        </Nav>
        <Nav style={{ paddingTop: '0.5rem', marginInlineStart: 'auto' }}>
          <Nav.Item>
            <Icon icon="bell" />
          </Nav.Item>
          <Nav.Item icon={<Icon icon="sign-out" />}>Logout</Nav.Item>

          <LoginModal
            trigger={<Nav.Item icon={<Icon icon="sign-in" />}>Login</Nav.Item>}
          />
        </Nav>
      </Body>
    </RNavbar>
  );
});
