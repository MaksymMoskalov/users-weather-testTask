import {
  StyledCarItem,
  StyledImgWrapper,
  StyledCarImg,
  StyledTitleWrapper,
  StyledShortInfo,
  StyledMoreButton,
  FavoutiteBtn,
} from './UserWeatherItem.styled';
import { ReactComponent as HeartChec } from '../../svg/heart.svg';
import { ReactComponent as Heart } from '../../svg/heartUncheckd.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  handlFavouriteAdd,
  handlFavouriteDell,
} from '../../redux/usersWeatherReduser';
import { selectFavouriteCars } from '../../redux/usersWeather.selectors';

export const UserWeatherItem = ({ userItemData, openModal }) => {
  const dispatch = useDispatch();

  const { gender, name, email, picture, location, current_weather, hourly } =
    userItemData;

  // const cars = useSelector(selectFavouriteCars);

  // const addToFavourite = car => {
  //   if (cars) {
  //     if (cars.some(car => car.id === carItemData.id)) {
  //       dispatch(handlFavouriteDell(car));
  //       return;
  //     }
  //   }
  //   dispatch(handlFavouriteAdd(car));
  // };

  return (
    <li>
      <button type="button">favourite</button>
      <div>
        <img src={picture.medium} alt={(name.first, ' ', name.last)} />
        <p>
          {name.first} {name.last}
        </p>
        <p>{email}</p>
        <p>{gender}</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>{current_weather.temperature}</p>
        <p>
          {location.city},{location.country}
        </p>

        <p>{Math.min(...hourly.temperature_2m)}</p>
        <p>{Math.max(...hourly.temperature_2m)}</p>
      </div>
    </li>
    // <StyledCarItem>
    //   <FavoutiteBtn onClick={() => addToFavourite(carItemData)} type="button">
    //     {favourite ? (
    //       <HeartChec className="icon" />
    //     ) : (
    //       <Heart className="icon" />
    //     )}
    //   </FavoutiteBtn>
    //   <StyledImgWrapper>
    //     <StyledCarImg src={img} alt={model} />
    //   </StyledImgWrapper>
    //   <StyledTitleWrapper>
    //     <h2 className="car-title">
    //       {make} <span className="acsent-color">{model}</span>, {year}
    //     </h2>
    //     <p className="car-title"> {rentalPrice}</p>
    //   </StyledTitleWrapper>
    //   <StyledShortInfo>{`${addressPart[1].trim()} | ${addressPart[2].trim()} | ${rentalCompany} | ${type} | ${make} | ${mileage.toLocaleString(
    //     'en-US'
    //   )} | ${functionalities[0]}`}</StyledShortInfo>
    //   <StyledMoreButton type="button" onClick={openModal}>
    //     Learn more
    //   </StyledMoreButton>
    // </StyledCarItem>
  );
};
