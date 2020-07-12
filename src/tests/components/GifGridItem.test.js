import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/dom';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {
  const title = 'Un titulo';
  const url = 'https://localhost/algo,jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test('debe mostrar <GifGridItem /> correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });
  test('debe tener la imagen igual a la url y alt  de los props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });
});
