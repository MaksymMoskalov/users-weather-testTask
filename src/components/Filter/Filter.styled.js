import styled from 'styled-components';

export const FilterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;

  margin-bottom: 50px;
`;

export const FilterSubmitBtn = styled.button`
  width: 136px;
  height: 38px;
  padding: 9px 39px;
  color: #fff;
  border-color: transparent;
  border-radius: 12px;
  background-color: #3470ff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #0b44cd;
  }
`;

export const FilterLable = styled.label`
  .input-desc {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: rgb(138, 138, 137);
    margin-bottom: 8px;
  }

  .form-input {
    width: 244px;
    height: 38px;
  }
`;
