import { CarList } from 'components/CarsList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { allCarsThunk, loadMoreCarsThunk } from '../../redux/autosOperations';
import {
  selectIsLoading,
  selectFact,
  selectTotal,
  selectPage,
  selectCars,
  selectBrandFilter,
} from '../../redux/cars.selectors';
import { Filter } from 'components/Filter/Filter';
import { CarModal } from 'components/Modal/Modal';
import { handlModalClose } from '../../redux/autosReduser';
import { Loader } from 'components/Loader/Loader';
import { CatalogSection, LoadMore } from './Catalog.styled';

const Catalog = () => {
  const disputch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const fact = useSelector(selectFact);
  const total = useSelector(selectTotal);
  const page = useSelector(selectPage);
  const cars = useSelector(selectCars);
  const brandFilter = useSelector(selectBrandFilter);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    disputch(allCarsThunk());
  }, [disputch]);

  const onLoadMore = () => {
    disputch(loadMoreCarsThunk(page));
  };

  const toglModal = () => {
    setOpenModal(!openModal);
    disputch(handlModalClose(null));
  };

  const filteredCars = () => {
    const filteredCars = cars.filter(car => {
      return car.make.includes(brandFilter.value);
    });
    return filteredCars;
  };
  const carsByBrand = filteredCars();
  return (
    <>
      <CatalogSection>
        <Filter />
        <CarList openModal={toglModal} cars={carsByBrand} />
        {fact >= total || fact === 0 ? (
          <></>
        ) : (
          <LoadMore type="button" onClick={onLoadMore}>
            Load more
          </LoadMore>
        )}
        {isLoading && <Loader />}
      </CatalogSection>
      {openModal && <CarModal closeModal={toglModal} />}
    </>
  );
};

export default Catalog;
