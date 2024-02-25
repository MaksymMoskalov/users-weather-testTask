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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  position: relative;

  display: block;
  width: 350px;
  max-height: 400px;
  padding: 40px;
  border-radius: 24px;
  background-color: white;
  outline: 2px solid #3470ff;

  .modal-loader {
    display: block;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    width: 270px;
  }
`;

export const ExitBtn = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 16px;
  left: 390px;

  padding: 0;
  margin: 0;
  border: none;
  background-color: inherit;

  cursor: pointer;

  .cross {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    top: 12px;
    left: 265px;
  }
`;

export const CoditionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 30px;

  .cond-icon {
    width: 22px;
    height: 22px;
  }
`;

export const Codition = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .cond-icon {
    width: 30px;
    height: 30px;
  }
`;

export const CoditionData = styled.div``;

export const CoditionValue = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const CoditionTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
`;
