import { Route, Routes } from 'react-router-dom';
import { StyledContainer } from 'Styles/Container.styled';
import { Suspense, lazy } from 'react';
import { Header } from './Header/Header';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Saved = lazy(() => import('pages/Saved/Saved'));

export const App = () => {
  return (
    <StyledContainer>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </Suspense>
    </StyledContainer>
  );
};
