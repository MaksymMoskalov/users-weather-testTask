import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  CarModalContent,
  Overlay,
  ExitBtn,
  ModalImgWrapper,
  ModalImg,
  ModalTitle,
  Acsent,
  ModalShortDescription,
  ModalDescription,
  AccessoriesAndFunc,
  ModalAccessories,
  AccessoriesAndFuncWrapper,
  Condition,
  RentBtn,
} from './Modal.styled';
import { RxCross2 } from 'react-icons/rx';
import {
  selectModalData,
  selectIsLoading,
} from '../../redux/usersWeather.selectors';
import { Blocks } from 'react-loader-spinner';
import { weatherIconSelector } from 'service/weatherIcon';
import { HourlyWeatherList } from 'components/HourlyWeatherList/HourlyWeatherList';

export function CarModal({ closeModal }) {
  const userData = useSelector(selectModalData);
  const isLoading = useSelector(selectIsLoading);

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
      <CarModalContent>
        <ExitBtn onClick={closeModal}>
          <RxCross2 className="cross" />
        </ExitBtn>
        {userData !== null && (
          <>
            <div>{weatherIconSelector(userData.current.weather_code)}</div>
            <p>
              {userData.location.city},{userData.location.country}
            </p>
            <p>{userData.current.temperature_2m}</p>
            <HourlyWeatherList
              temperatures={userData.hourly.temperature_2m}
              time={userData.hourly.time}
            />
            <div>
              <p>{userData.current.relative_humidity_2m}</p>
              <p>{userData.current.wind_speed_10m}</p>
            </div>
          </>
        )}
        {/* {carData !== null && (
          <>
            <ModalImgWrapper>
              <ModalImg src={carData.img} alt="" />
            </ModalImgWrapper>

            <ModalTitle>
              {carData.make} <Acsent>{carData.model}</Acsent>, {carData.year}
            </ModalTitle>
            <ModalShortDescription>
              {`${carData.address.split(',')[1]} | ${
                carData.address.split(',')[2]
              } | Year: ${carData.year} | Type: ${
                carData.type
              } | Fuel Consumption: ${carData.fuelConsumption} | Engine Size: ${
                carData.engineSize
              }`}
            </ModalShortDescription>
            <ModalDescription>{carData.description}</ModalDescription>
            <AccessoriesAndFuncWrapper>
              <AccessoriesAndFunc>
                Accessories and functionalities:
              </AccessoriesAndFunc>
              <ModalAccessories>
                {carData.accessories.map(accsessori => {
                  return ` ${accsessori} |`;
                })}
              </ModalAccessories>
              <ModalAccessories>
                {carData.functionalities.map(func => {
                  return ` ${func} |`;
                })}
              </ModalAccessories>
            </AccessoriesAndFuncWrapper>
            <AccessoriesAndFunc>Rental Conditions: </AccessoriesAndFunc>
            <Condition>
              {carData.rentalConditions.split(',')[0].split(':')[0]}:{' '}
              <Acsent>
                {carData.rentalConditions.split(',')[0].split(':')[1]}
              </Acsent>
            </Condition>
            <Condition>{carData.rentalConditions.split(',')[1]}</Condition>
            <Condition>{carData.rentalConditions.split(',')[2]}</Condition>
            <Condition>
              Mileage:{' '}
              <Acsent className="condition-acs">
                {carData.mileage.toLocaleString('en-US')}
              </Acsent>
            </Condition>
            <Condition>
              Price:{' '}
              <Acsent className="condition-acs">{carData.rentalPrice}</Acsent>
            </Condition>
            <RentBtn href="tel:+380730000000">Rental car</RentBtn>
          </>
        )} */}
        {isLoading && (
          <div className="modal-loader">
            <Blocks
              visible={true}
              height="100"
              width="100"
              ariaLabel="blocks-loading"
            />
          </div>
        )}
      </CarModalContent>
    </Overlay>
  );
}
