import { UserWeatherList } from 'components/UserWeatherList/UserWeatherList';
import {
  selectFavouriteUsers,
  selectIsLoading,
} from '../../redux/usersWeather.selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  handlModalClose,
  handlResetCatalog,
} from '../../redux/usersWeatherReduser';
import { useEffect, useState } from 'react';
import { CarModal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';

const Favorites = () => {
  const disputch = useDispatch();
  const favouriteUsers = useSelector(selectFavouriteUsers);
  const isLoading = useSelector(selectIsLoading);
  const [openModal, setOpenModal] = useState(false);

  // useEffect(() => {
  //   disputch(handlResetCatalog());
  // }, [disputch]);

  const toglModal = () => {
    setOpenModal(!openModal);
    // disputch(handlModalClose(null));
  };

  return (
    <>
      <section>
        <UserWeatherList openModal={toglModal} users={favouriteUsers} />
      </section>
      {openModal && <CarModal closeModal={toglModal} />}
      {isLoading && <Loader />}
    </>
  );
};

export default Favorites;
