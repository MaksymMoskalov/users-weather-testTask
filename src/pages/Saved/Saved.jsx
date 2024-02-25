import { UserWeatherList } from 'components/UserWeatherList/UserWeatherList';
import {
  selectFavouriteUsers,
  selectIsLoading,
} from '../../redux/usersWeather.selectors';
import { useSelector } from 'react-redux';

import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';

const Saved = () => {
  const favouriteUsers = useSelector(selectFavouriteUsers);
  const isLoading = useSelector(selectIsLoading);
  const [openModal, setOpenModal] = useState(false);
  const favouritePage = true;

  const toglModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <section>
        <UserWeatherList
          openModal={toglModal}
          users={favouriteUsers}
          favouritePage={favouritePage}
        />
      </section>
      {openModal && <Modal closeModal={toglModal} />}
      {isLoading && <Loader />}
    </>
  );
};

export default Saved;
