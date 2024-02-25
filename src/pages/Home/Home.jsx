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
} from '../../redux/usersWeather.selectors';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import { CatalogSection, LoadMore } from './Home.styled';

const Home = () => {
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
  };

  return (
    <>
      <CatalogSection>
        <UserWeatherList openModal={toglModal} users={users} />
        <LoadMore type="button" onClick={onLoadMore}>
          Load more
        </LoadMore>
        {isLoading && <Loader />}
      </CatalogSection>
      {openModal && <Modal closeModal={toglModal} />}
    </>
  );
};

export default Home;
