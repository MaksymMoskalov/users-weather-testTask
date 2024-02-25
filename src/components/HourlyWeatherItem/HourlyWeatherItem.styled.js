import styled from 'styled-components';

export const HwItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 5px;
  height: 50px;

  .time {
    width: 55px;
  }
`;

export const Temperature = styled.p`
  width: 55px;
`;
