import React, { useState } from "react";

export const GifExpertApp = () => {
	// const categories = ["One Punch", "Samurai X", "Dragon Ball"];
	const [categories, setCategories] = useState([
		"One Punch",
		"Samurai X",
		"Dragon Ball",
	]);
	//Esto lo que hace cuando termina setCargories es setearlo a undefined porque setea el estado a lo que devuelve la funcion
	/* const handleAdd = () => {
		setCategories((categories) => {
			console.log(categories);
			categories.push("One Piece");
		});
	};
    console.log(categories); */
	const handleAdd = () => {
		setCategories(["One Piece", ...categories]);
	};
	return (
		<>
			<h2>GifExpertApp</h2>
			<hr />
			<button onClick={handleAdd}>Agregar One Piece</button>
			<ol>
				{categories.map((category) => (
					<li key={category}>{category}</li>
				))}
			</ol>
		</>
	);
};
