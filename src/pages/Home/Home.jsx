import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handlResetCatalog } from '../../redux/autosReduser';
import { selectIsLoading } from '../../redux/cars.selectors';
import { Loader } from 'components/Loader/Loader';
import {
  AboutUs,
  HomeImg,
  HomeSection,
  HomeTitle,
  HomeWrapper,
  OfferItem,
  OfferItemText,
  OfferItemTitle,
  OfferList,
  OfferTitle,
} from './Home.styled';

import homeImg from '../../img/HomePage/home.png';

const Home = () => {
  const disputch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    disputch(handlResetCatalog());
  }, [disputch]);
  return (
    <HomeSection>
      <HomeTitle>
        Welcome to Car<span className="acsent">Rent</span>
      </HomeTitle>
      <AboutUs>
        We specialize in providing high-quality car rental services in Ukraine.
        We strive to offer our clients the most convenient and reliable means of
        transportation for all their needs.
      </AboutUs>
      <HomeWrapper>
        <HomeImg src={homeImg} alt="" />
      </HomeWrapper>
      <OfferTitle>Our services include:</OfferTitle>
      <OfferList>
        <OfferItem>
          <OfferItemTitle>A wide selection of cars</OfferItemTitle>
          <OfferItemText>
            We offer a diverse fleet of cars to meet various customer demands,
            ranging from economical models to executive cars and SUVs
          </OfferItemText>
        </OfferItem>
        <OfferItem>
          <OfferItemTitle>Flexible Rates</OfferItemTitle>
          <OfferItemText>
            We have developed a flexible pricing plan to accommodate various
            budgets and needs of our clients. Discounts for long-term rentals
            and special conditions for corporate clients are available.
          </OfferItemText>
        </OfferItem>
        <OfferItem>
          <OfferItemTitle>Convenient Booking and Service</OfferItemTitle>
          <OfferItemText>
            We offer an online booking system to ensure the ease and efficiency
            of the process. Our specialists are ready to advise you and help
            choose the optimal car.
          </OfferItemText>
        </OfferItem>
        <OfferItem>
          <OfferItemTitle>Customer Support System</OfferItemTitle>
          <OfferItemText>
            Our customer support service is available 24/7 to address any
            questions or issues that may arise during the car rental.
          </OfferItemText>
        </OfferItem>
      </OfferList>
      {isLoading && <Loader />}
    </HomeSection>
  );
};

export default Home;
