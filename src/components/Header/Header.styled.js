import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #3470ff;
  margin-bottom: 32px;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  gap: 14px;

  .header-link {
    padding: 14px 20px;
    text-decoration: none;
    font-weight: 500;
    color: #3470ff;
    background-color: #fff;
    border-radius: 12px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      color: #fff;
      background-color: #3470ff;
      border-color: transparent;
    }
    &.active {
      color: #fff;
      background-color: #0b44cd;
      border-color: transparent;
    }
  }
`;
