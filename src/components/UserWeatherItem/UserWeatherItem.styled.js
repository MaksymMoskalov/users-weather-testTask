import styled from 'styled-components';

export const UwItem = styled.li`
  position: relative;
  width: 274px;
  min-height: 305px;
  border-radius: 14px;
  background-color: #fff;
  padding: 12px;
  outline: 1px solid #3470ff;

  font-family: Manrope;
`;

export const UwItemHead = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 14px;
  border-bottom: 1px solid #3470ff;
  padding-bottom: 2px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserImgWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
`;

export const UserImg = styled.img`
  display: block;
  overflow: hidden;
  border-radius: 50%;
`;

export const UsemName = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const Email = styled.p`
  font-size: 12px;
`;

export const Gender = styled.p`
  display: inline-block;
  position: absolute;
  top: 17px;
  right: 12px;

  font-size: 14px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const WeatherInfo = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const UserLocation = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const WeatherSvgWrapper = styled.div`
  width: 90px;
  height: 90px;
`;

export const CurrentTemperature = styled.p`
  font-size: 22px;
  font-weight: 700;
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  gap: 50px;
  height: 30px;

  .temp-icon {
    width: 22px;
    height: 22px;
  }
`;

export const TempRate = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 18px;
  font-weight: 500;
`;

export const ButtonWrapper = styled.div`
  width: 274px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
`;

export const Button = styled.button`
  width: 137px;
  padding: 8px;
  border-color: transparent;
  background-color: #3470ff;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #fff;
    background-color: #0b44cd;
    border-color: transparent;
  }

  &:first-child {
    border-right: 1px solid #fff;
  }
`;

export const SavedButton = styled.button`
  width: 137px;
  padding: 8px;
  border-color: transparent;
  background-color: #3470ff;
  border-radius: 8px;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #fff;
    background-color: #0b44cd;
    border-color: transparent;
  }
`;
