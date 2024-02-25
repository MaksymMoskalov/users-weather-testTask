import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

export const CusromScroll = styled(SimpleBar)`
  .simplebar-scrollbar::before {
    height: 8px;
  }

  margin-bottom: 10px;
`;

export const UwList = styled.ul`
  width: 350px;
  display: flex;
  gap: 10px;
  /* overflow: auto; */
  margin-bottom: 15px;
`;
