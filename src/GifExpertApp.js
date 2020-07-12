import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState([
		"One Punch",
		"Samurai X",
		"Dragon Ball",
	]);
	//Esto lo que hace cuando termina setCargories es setearlo a undefined porque setea el estado a lo que devuelve la funcion
	// const handleAdd = () => {
	// setCategories((categories) => {
	// console.log(categories);
	// categories.push("One Piece");
	// });
	// };
	// console.log(categories);
	// const handleAdd = () => {
	// 	setCategories(["One Piece", ...categories]);
	// };
	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			{/* <button onClick={handleAdd}>Agregar One Piece</button> */}
			<ol>
				{categories.map((category) => (
					<li key={category}>{category}</li>
				))}
			</ol>
		</>
	);
};
