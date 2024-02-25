import {
  Button,
  ButtonWrapper,
  CurrentTemperature,
  Email,
  Gender,
  SavedButton,
  TempRate,
  TemperatureWrapper,
  UsemName,
  UserImg,
  UserImgWrapper,
  UserInfo,
  UserLocation,
  UwItem,
  UwItemHead,
  WeatherInfo,
  WeatherSvgWrapper,
} from './UserWeatherItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  handlFavouriteAdd,
  handlFavouriteDell,
} from '../../redux/usersWeatherReduser';
import { selectFavouriteUsers } from '../../redux/usersWeather.selectors';
import { weatherIconSelector } from 'service/weatherIcon';
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from 'react-icons/fa6';

export const UserWeatherItem = ({
  userItemData,
  openModal,
  favouritePage = false,
}) => {
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavouriteUsers);
  const { gender, name, email, picture, location, current, hourly } =
    userItemData;

  const addToFavourite = user => {
    if (favorite) {
      if (favorite.some(user => user.login.uuid === userItemData.login.uuid)) {
        dispatch(handlFavouriteDell(user));
        return;
      }
    }
    dispatch(handlFavouriteAdd(user));
  };

  return (
    <UwItem>
      <UwItemHead>
        <UserImgWrapper>
          <UserImg src={picture.thumbnail} alt={(name.first, ' ', name.last)} />
        </UserImgWrapper>

        <UserInfo>
          <UsemName>
            {name.first} {name.last}
          </UsemName>
          <Email>{email}</Email>
          <Gender>{gender}</Gender>
        </UserInfo>
      </UwItemHead>

      <WeatherInfo>
        <UserLocation>
          {location.city},{location.country}
        </UserLocation>

        <WeatherSvgWrapper>
          {weatherIconSelector(current.weather_code)}
        </WeatherSvgWrapper>

        <CurrentTemperature>
          {current.temperature_2m} {'\u2103'}
        </CurrentTemperature>

        <TemperatureWrapper>
          <TempRate>
            <FaTemperatureArrowDown className="temp-icon" />{' '}
            {Math.min(...hourly.temperature_2m)} {'\u2103'}
          </TempRate>
          <TempRate>
            <FaTemperatureArrowUp className="temp-icon" />{' '}
            {Math.max(...hourly.temperature_2m)} {'\u2103'}
          </TempRate>
        </TemperatureWrapper>
      </WeatherInfo>

      <ButtonWrapper>
        {!favouritePage ? (
          <>
            {' '}
            <Button type="button" onClick={openModal}>
              Weather
            </Button>
            <Button type="button" onClick={() => addToFavourite(userItemData)}>
              Save
            </Button>
          </>
        ) : (
          <SavedButton type="button" onClick={openModal}>
            Weather
          </SavedButton>
        )}
      </ButtonWrapper>
    </UwItem>
  );
};
