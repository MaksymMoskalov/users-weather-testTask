import { CarItem } from 'components/CarsItem/CarItem';
import { StyledCarList } from './CarList.styled';
import { useDispatch } from 'react-redux';
import { exactCarThunk } from '../../redux/autosOperations';

export const CarList = ({ openModal, cars }) => {
  const disputch = useDispatch();

  const vievModal = id => {
    disputch(exactCarThunk(id));
    openModal();
  };

  return (
    <StyledCarList>
      {cars !== null &&
        cars.map(car => {
          return (
            <CarItem
              carItemData={car}
              key={car.id}
              openModal={() => vievModal(car.id)}
            />
          );
        })}
    </StyledCarList>
  );
};
