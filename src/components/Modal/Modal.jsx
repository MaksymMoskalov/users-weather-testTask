import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  ModalContent,
  Overlay,
  ExitBtn,
  CoditionsWrapper,
  Codition,
  CoditionData,
  CoditionValue,
  CoditionTitle,
} from './Modal.styled';
import { RxCross2 } from 'react-icons/rx';
import { selectModalData } from '../../redux/usersWeather.selectors';
import { weatherIconSelector } from 'service/weatherIcon';
import { HourlyWeatherList } from 'components/HourlyWeatherList/HourlyWeatherList';
import {
  CurrentTemperature,
  TempRate,
  TemperatureWrapper,
  UserLocation,
  WeatherInfo,
  WeatherSvgWrapper,
} from 'components/UserWeatherItem/UserWeatherItem.styled';
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from 'react-icons/fa6';
import { RiWindyLine } from 'react-icons/ri';
import { WiHumidity } from 'react-icons/wi';

export function Modal({ closeModal }) {
  const userData = useSelector(selectModalData);

  useEffect(() => {
    window.addEventListener('keydown', hendleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
      document.body.style.overflow = 'auto';
    };
  });

  const hendleKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const closeOnBackdrop = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <Overlay onClick={closeOnBackdrop}>
      <ModalContent>
        <ExitBtn onClick={closeModal}>
          <RxCross2 className="cross" />
        </ExitBtn>
        {userData !== null && (
          <>
            <WeatherInfo>
              <UserLocation>
                {userData.location.city},{userData.location.country}
              </UserLocation>

              <WeatherSvgWrapper>
                {weatherIconSelector(userData.current.weather_code)}
              </WeatherSvgWrapper>

              <CurrentTemperature>
                {userData.current.temperature_2m} {'\u2103'}
              </CurrentTemperature>

              <TemperatureWrapper>
                <TempRate>
                  <FaTemperatureArrowDown className="temp-icon" />{' '}
                  {Math.min(...userData.hourly.temperature_2m)} {'\u2103'}
                </TempRate>
                <TempRate>
                  <FaTemperatureArrowUp className="temp-icon" />{' '}
                  {Math.max(...userData.hourly.temperature_2m)} {'\u2103'}
                </TempRate>
              </TemperatureWrapper>
            </WeatherInfo>

            <HourlyWeatherList
              temperatures={userData.hourly.temperature_2m}
              time={userData.hourly.time}
            />
            <CoditionsWrapper>
              <Codition>
                <WiHumidity className="cond-icon" />
                <CoditionData>
                  <CoditionValue>
                    {userData.current.relative_humidity_2m} {'\u0025'}
                  </CoditionValue>
                  <CoditionTitle>Humidity</CoditionTitle>
                </CoditionData>
              </Codition>

              <Codition>
                <RiWindyLine className="cond-icon" />
                <CoditionData>
                  <CoditionValue>
                    {userData.current.wind_speed_10m} km/h
                  </CoditionValue>
                  <CoditionTitle>Wind Speed</CoditionTitle>
                </CoditionData>
              </Codition>
            </CoditionsWrapper>
          </>
        )}
      </ModalContent>
    </Overlay>
  );
}
