import React from "react";

//include images into your bundle
import TasksCounter from "./tasksleft.js";
import InputTask from "./inputtask.js";
//create your first component
export function Home() {
	return (
		<body>
			<div className="container1">
				<h1>To do List</h1>
				<InputTask />
			</div>
		</body>
	);
}

/*<ul>
				<li>{input}</li>
				<li>papa</li>
				<li>chcha</li>
				<li>chcha</li>
			</ul>*/
