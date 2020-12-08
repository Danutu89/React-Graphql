import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background-color: #0f131a;
`;

export const Header = styled.div`
  font-size: 19px;
  padding: 15px;
  margin: 0 1rem;
  width: 115px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: #a4a9b3;

  &:hover {
    text-decoration: none;
    color: #e9ebf0;
  }

  &:focus {
    text-decoration: none;
    color: #a4a9b3;
  }
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  padding: 0.2rem 0.5rem;
`;
