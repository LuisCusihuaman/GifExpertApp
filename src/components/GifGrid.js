import React from "react";
import { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
	const [images, setImages] = useState([]);
	useEffect(() => {
		getGifs();
	}, []);
	const getGifs = async () => {
		const url =
			"https://api.giphy.com/v1/gifs/search?q=Kingdom Hearts&limit=10&api_key=tXkp4W62FFIUCtsFfBnTOqG09L87Sd4Y";
		const resp = await fetch(url);
		const { data } = await resp.json();
		const gifs = data.map((img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url,
			};
		});
		setImages(gifs);
	};
	// getGifs();
	return (
		<>
			<h3>{category}</h3>

			{images.map((img) => (
				<GifGridItem key={img.id} {...img} />
			))}
		</>
	);
};
