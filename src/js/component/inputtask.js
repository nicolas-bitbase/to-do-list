import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

/*export default function InputTask() {
	const [input, setInput] = useState("");
	console.log(input);
	return (
		<div>
			<input value={input} onInput={e => setInput(e.target.value)} />
		</div>
	);
}*/
const initialList = [];

export default function InputTask() {
	const [list, setList] = React.useState(initialList);
	const [name, setName] = React.useState("");

	function handleChange(event) {
		setName(event.target.value);
	}

	function handleAdd() {
		const newList = list.concat({ name });

		setList(newList);
	}

	return (
		<div>
			<div>
				<input type="text" value={name} onChange={handleChange} />
				<button type="button" onClick={handleAdd}>
					Add
				</button>
			</div>

			<ul>
				{list.map(i => (
					<li key={i.index}>{i.name}</li>
				))}
			</ul>
		</div>
	);
}
