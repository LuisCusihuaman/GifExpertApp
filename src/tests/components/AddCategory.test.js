import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/dom';
import { AddCategory } from '../../components/AddCategory';
describe('Pruebas en <AddCategory/>', () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    const eventOnChangeMock = { target: { value } };
    input.simulate('change', eventOnChangeMock);
    expect(wrapper.find('p').text().trim()).toBe(value);
  });
});
