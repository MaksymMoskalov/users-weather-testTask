import styled from 'styled-components';

export const HomeSection = styled.section`
  padding-bottom: 100px;
`;

export const HomeTitle = styled.h1`
  margin-bottom: 24px;
  text-align: center;

  .acsent {
    color: #3470ff;
  }
`;

export const HomeWrapper = styled.div`
  max-width: 1200px;
  border-radius: 12px;
  overflow: hidden;

  margin-bottom: 24px;
`;

export const HomeImg = styled.img`
  width: 100%;
`;

export const AboutUs = styled.p`
  display: block;
  margin: 0 auto;
  width: 500px;
  text-align: justify;
  margin-bottom: 24px;
  text-align: center;

  font-size: 18px;
`;
export const OfferTitle = styled.p`
  display: block;
  margin-bottom: 18px;
  padding-bottom: 8px;
  text-align: center;
  border-bottom: 1px solid #3470ff;

  font-size: 24px;
  font-weight: 500;
`;

export const OfferList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const OfferItem = styled.li`
  width: 520px;
`;

export const OfferItemTitle = styled.h2`
  margin-bottom: 8px;

  font-size: 18px;
  font-weight: 400;
`;

export const OfferItemText = styled.p`
  height: 70px;
  padding: 10px;
  border-radius: 12px;
  color: #fff;
  background-color: #3470ff;
`;
