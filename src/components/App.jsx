import { Route, Routes } from 'react-router-dom';
import { StyledContainer } from 'Styles/Container.styled';
import { Suspense, lazy } from 'react';
import { Header } from './Header/Header';
import { Loader } from './Loader/Loader';

const Catalog = lazy(() => import('pages/Catalog/Catalog'));
const Favorites = lazy(() => import('pages/Fovorites/Favorites'));

export const App = () => {
  return (
    <StyledContainer>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Suspense>
    </StyledContainer>
  );
};
