import {
  StyledCarItem,
  StyledImgWrapper,
  StyledCarImg,
  StyledTitleWrapper,
  StyledShortInfo,
  StyledMoreButton,
  FavoutiteBtn,
} from './CarItem.styled';
import { ReactComponent as HeartChec } from '../../svg/heart.svg';
import { ReactComponent as Heart } from '../../svg/heartUncheckd.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  handlFavouriteAdd,
  handlFavouriteDell,
} from '../../redux/autosReduser';
import { selectFavouriteCars } from '../../redux/cars.selectors';

export const CarItem = ({ carItemData, openModal }) => {
  const {
    img,
    model,
    make,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
    favourite,
  } = carItemData;

  const dispatch = useDispatch();
  const cars = useSelector(selectFavouriteCars);

  const addToFavourite = car => {
    if (cars) {
      if (cars.some(car => car.id === carItemData.id)) {
        dispatch(handlFavouriteDell(car));
        return;
      }
    }
    dispatch(handlFavouriteAdd(car));
  };

  const addressPart = address.split(',');
  return (
    <StyledCarItem>
      <FavoutiteBtn onClick={() => addToFavourite(carItemData)} type="button">
        {favourite ? (
          <HeartChec className="icon" />
        ) : (
          <Heart className="icon" />
        )}
      </FavoutiteBtn>
      <StyledImgWrapper>
        <StyledCarImg src={img} alt={model} />
      </StyledImgWrapper>
      <StyledTitleWrapper>
        <h2 className="car-title">
          {make} <span className="acsent-color">{model}</span>, {year}
        </h2>
        <p className="car-title"> {rentalPrice}</p>
      </StyledTitleWrapper>
      <StyledShortInfo>{`${addressPart[1].trim()} | ${addressPart[2].trim()} | ${rentalCompany} | ${type} | ${make} | ${mileage.toLocaleString(
        'en-US'
      )} | ${functionalities[0]}`}</StyledShortInfo>
      <StyledMoreButton type="button" onClick={openModal}>
        Learn more
      </StyledMoreButton>
    </StyledCarItem>
  );
};
