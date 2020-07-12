import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';
describe('Pruebas en <AddCategory/>', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
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
  test('No debe de postear la informacion con submit', () => {
    const preventDefault = () => {};
    wrapper.find('form').simulate('submit', { preventDefault });
    expect(setCategories).not.toHaveBeenCalled();
  });
  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    //1. Simular el input Change
    let input = wrapper.find('input');
    const value = 'Hola mundo';
    const eventOnChangeMock = { target: { value } };
    input.simulate('change', eventOnChangeMock);
    //2. Simular el submit
    const preventDefaultMock = () => {};
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: preventDefaultMock });
    //3. setCategories se debe haber llamado
    expect(setCategories).toBeCalled();
    input = wrapper.find('input');
    //4. el valor del input debe de ser un ''
    expect(input.props().value).toBe('');
  });
});
