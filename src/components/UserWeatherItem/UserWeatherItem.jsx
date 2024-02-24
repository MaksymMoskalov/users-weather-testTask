// import {
//   StyledCarItem,
//   StyledImgWrapper,
//   StyledCarImg,
//   StyledTitleWrapper,
//   StyledShortInfo,
//   StyledMoreButton,
//   FavoutiteBtn,
// } from './UserWeatherItem.styled';
import { ReactComponent as HeartChec } from '../../svg/heart.svg';
import { ReactComponent as Heart } from '../../svg/heartUncheckd.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  handlFavouriteAdd,
  handlFavouriteDell,
} from '../../redux/usersWeatherReduser';
import { selectFavouriteUsers } from '../../redux/usersWeather.selectors';
import { weatherIconSelector } from 'service/weatherIcon';

export const UserWeatherItem = ({ userItemData, openModal }) => {
  const dispatch = useDispatch();

  const { gender, name, email, picture, location, current, hourly } =
    userItemData;

  const favorite = useSelector(selectFavouriteUsers);

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
    <li>
      <button type="button" onClick={() => addToFavourite(userItemData)}>
        favourite
      </button>
      <div>
        <img src={picture.medium} alt={(name.first, ' ', name.last)} />
        <p>
          {name.first} {name.last}
        </p>
        <p>{email}</p>
        <p>{gender}</p>
      </div>
      <p>
        {location.city},{location.country}
      </p>
      <div>
        <div className="fffffffffffff">
          {weatherIconSelector(current.weather_code)}
        </div>

        <p>{current.temperature_2m}</p>
        <p>{Math.min(...hourly.temperature_2m)}</p>
        <p>{Math.max(...hourly.temperature_2m)}</p>
      </div>
      <button type="button" onClick={openModal}>
        Weather
      </button>
    </li>
  );
};
