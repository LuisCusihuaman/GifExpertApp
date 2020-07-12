import React from "react";
import { shallow } from "enzyme";
import "@testing-library/dom";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem/>", () => {
	test("debe mostrar <GifGridItem /> correctamente ", () => {
		const title = "Un titulo";
		const url = "https://localhost/algo,jpg";
		const wrapper = shallow(<GifGridItem title={title} url={url} />);
		expect(wrapper).toMatchSnapshot();
	});
});
