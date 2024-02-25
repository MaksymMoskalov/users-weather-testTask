import { UserWeatherList } from 'components/UserWeatherList/UserWeatherList';
import {
  selectFavouriteUsers,
  selectIsLoading,
} from '../../redux/usersWeather.selectors';
import { useSelector } from 'react-redux';

import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import { SavedSection } from './Saved.styled';

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
      <SavedSection>
        <UserWeatherList
          openModal={toglModal}
          users={favouriteUsers}
          favouritePage={favouritePage}
        />
        {favouriteUsers === null && (
          <p className="no-user">There are no saved users</p>
        )}
      </SavedSection>
      {openModal && <Modal closeModal={toglModal} />}
      {isLoading && <Loader />}
    </>
  );
};

export default Saved;
