import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { handlBrandFilter } from '../../redux/autosReduser';
import { FilterForm, FilterLable, FilterSubmitBtn } from './Filter.styled';

const carBrands = [
  { value: '', label: 'All' },
  { value: 'Buick', label: 'Buick' },
  { value: 'Volvo', label: 'Volvo' },
  { value: 'Subaru', label: 'Subaru' },
  { value: 'Mitsubishi', label: 'Mitsubishi' },
  { value: 'Nissan', label: 'Nissan' },
  { value: 'Lincoln', label: 'Lincoln' },
  { value: 'GMC', label: 'GMC' },
  { value: 'Hyundai', label: 'Hyundai' },
  { value: 'MINI', label: 'MINI' },
  { value: 'Bentley', label: 'Bentley' },
  { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
  { value: 'Aston Martin', label: 'Aston Martin' },
  { value: 'Pontiac', label: 'Pontiac' },
  { value: 'Lamborghini', label: 'Lamborghini' },
  { value: 'Audi', label: 'Audi' },
  { value: 'BMW', label: 'BMW' },
  { value: 'Chevrolet', label: 'Chevrolet' },
  { value: 'Chrysler', label: 'Chrysler' },
  { value: 'Kia', label: 'Kia' },
  { value: 'Land', label: 'Land Rover' },
];

export const Filter = () => {
  const dispatch = useDispatch();
  const [brand, setBand] = useState({ value: '', label: 'All' });

  const handleBrandFilterChange = selected => {
    setBand(selected);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(handlBrandFilter(brand));
  };

  return (
    <FilterForm onSubmit={onSubmit}>
      <FilterLable>
        <span className="input-desc">Car brand</span>
        <Select
          value={brand}
          onChange={handleBrandFilterChange}
          options={carBrands}
          className="form-input"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,

              borderRadius: 14,
              backgroundColor: '#F7F7FB',
              borderColor: 'transparent',
              '&:hover': {
                borderColor: '#3470FF',
              },
            }),
          }}
        />
      </FilterLable>
      <FilterSubmitBtn type="submit">Search</FilterSubmitBtn>
    </FilterForm>
  );
};
