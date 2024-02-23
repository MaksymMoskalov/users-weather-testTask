import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const CarModalContent = styled.div`
  position: relative;

  display: block;
  width: 460px;
  min-height: 600px;
  max-height: 700px;
  padding: 40px;
  border-radius: 24px;
  background-color: white;

  .modal-loader {
    display: block;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
  }
`;

export const ExitBtn = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 16px;
  left: 501px;

  padding: 0;
  margin: 0;
  border: none;
  background-color: inherit;

  cursor: pointer;

  .cross {
    width: 24px;
    height: 24px;
  }
`;

export const ModalImgWrapper = styled.div`
  width: 460px;
  max-height: 248px;
  margin-bottom: 14px;

  border-radius: 14px;
  overflow: hidden;
`;

export const ModalImg = styled.img`
  display: block;
  width: 100%;
  object-position: center;

  border-radius: 14px;
  overflow: hidden;
`;

export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const Acsent = styled.span`
  color: #3470ff;
`;

export const ModalShortDescription = styled.p`
  width: 277px;
  margin-bottom: 14px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

export const ModalDescription = styled.h2`
  margin-bottom: 24px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const AccessoriesAndFunc = styled.h3`
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const ModalAccessories = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);
`;

export const AccessoriesAndFuncWrapper = styled.div`
  margin-bottom: 24px;
`;

export const Condition = styled.p`
  display: inline-block;
  padding: 7px 14px;

  font-size: 12px;
  font-weight: 600;
  line-height: 18px;

  border-radius: 35px;
  background-color: #f9f9f9;

  .condition-acs {
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
  }
`;

export const RentBtn = styled.a`
  display: block;
  width: 68px;
  height: 20px;
  background-color: #3470ff;
  padding: 12px 50px;
  border-radius: 12px;
  border-color: transparent;
  color: #fff;
  margin-top: 15px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  &:hover {
    background-color: #0b44cd;
  }
`;
