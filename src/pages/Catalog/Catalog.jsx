import { UserWeatherList } from 'components/UserWeatherList/UserWeatherList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  usersThunk,
  loadMoreUsersThunk,
} from '../../redux/usersWeatherOperations';
import {
  selectUsers,
  selectIsLoading,
  selectPage,
  selectFavouriteUsers,
} from '../../redux/usersWeather.selectors';
// import { CarModal } from 'components/Modal/Modal';
// import { handlModalClose } from '../../redux/autosReduser';
import { Loader } from 'components/Loader/Loader';
import { CatalogSection, LoadMore } from './Catalog.styled';

const Catalog = () => {
  const disputch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const users = useSelector(selectUsers);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    disputch(usersThunk());
  }, [disputch]);

  const onLoadMore = () => {
    disputch(loadMoreUsersThunk(page));
  };

  const toglModal = () => {
    setOpenModal(!openModal);
    // disputch(handlModalClose(null));
  };

  // const filteredCars = () => {
  //   const filteredCars = cars.filter(car => {
  //     return car.make.includes(brandFilter.value);
  //   });
  //   return filteredCars;
  // };
  // const carsByBrand = filteredCars();
  return (
    <>
      <CatalogSection>
        <UserWeatherList openModal={toglModal} users={users} />
        <LoadMore type="button" onClick={onLoadMore}>
          Load more
        </LoadMore>
        {isLoading && <Loader />}
      </CatalogSection>
      {/* {openModal && <CarModal closeModal={toglModal} />} */}
    </>
  );
};

export default Catalog;
