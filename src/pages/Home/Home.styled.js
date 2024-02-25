import styled from 'styled-components';

export const CatalogSection = styled.section`
  padding-bottom: 100px;
`;

export const LoadMore = styled.button`
  display: block;

  margin-left: auto;
  margin-right: auto;
  padding: 12px 16px;

  width: 120px;
  border-color: transparent;
  border-radius: 12px;
  background-color: transparent;
  color: #3470ff;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #3470ff;
    color: #fff;
  }
`;
