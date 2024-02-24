// import { CarList } from 'components/UserWeatherList/UserWeatherList';
// import {
//   selectFavouriteCars,
//   selectIsLoading,
// } from '../../redux/cars.selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   handlModalClose,
//   handlResetCatalog,
// } from '../../redux/usersWeatherReduser';
// import { useEffect, useState } from 'react';
// import { CarModal } from 'components/Modal/Modal';
// import { Loader } from 'components/Loader/Loader';

const Favorites = () => {
  // const disputch = useDispatch();
  // const favouriteCars = useSelector(selectFavouriteCars);
  // const isLoading = useSelector(selectIsLoading);
  // const [openModal, setOpenModal] = useState(false);

  // useEffect(() => {
  //   disputch(handlResetCatalog());
  // }, [disputch]);

  // const toglModal = () => {
  //   setOpenModal(!openModal);
  //   disputch(handlModalClose(null));
  // };

  return (
    <>
      <h1>Favourite</h1>
      {/* <section>
        <CarList openModal={toglModal} cars={favouriteCars} />
      </section>
      {openModal && <CarModal closeModal={toglModal} />}
      {isLoading && <Loader />} */}
    </>
  );
};

export default Favorites;
