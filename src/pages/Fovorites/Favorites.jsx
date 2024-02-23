import { CarList } from 'components/CarsList/CarList';
import {
  selectFavouriteCars,
  selectIsLoading,
} from '../../redux/cars.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { handlModalClose, handlResetCatalog } from '../../redux/autosReduser';
import { useEffect, useState } from 'react';
import { CarModal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';

const Favorites = () => {
  const disputch = useDispatch();
  const favouriteCars = useSelector(selectFavouriteCars);
  const isLoading = useSelector(selectIsLoading);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    disputch(handlResetCatalog());
  }, [disputch]);

  const toglModal = () => {
    setOpenModal(!openModal);
    disputch(handlModalClose(null));
  };

  return (
    <>
      <section>
        <CarList openModal={toglModal} cars={favouriteCars} />
      </section>
      {openModal && <CarModal closeModal={toglModal} />}
      {isLoading && <Loader />}
    </>
  );
};

export default Favorites;
