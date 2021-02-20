import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import TasksCounter from "./tasksleft.js";
import PropTypes from "prop-types";

export default function InputTask() {
	const [tasksList, setTasksList] = React.useState([]);
	const [task, setTask] = React.useState("");
	//const [liNewTask, setLiNewTask] = React.useState(null);

	function addTask() {
		//	let newList = tasksList.push(task);
		let newList = [...tasksList, task];

		setTasksList(newList);
		console.log(tasksList.indexOf(task));
		setTask("");
	}

	/*function deleteTask(index) {
		const newList = tasksList.splice(index, 1);
		console.log(newList, tasksList);

		setTasksList(tasksList);
    }*/

	function deleteTask(tasksListIndex) {
		const newList = tasksList.filter(
			(_, index) => index !== tasksListIndex
		);

		setTasksList(newList);
	}

	//useEffect(() => {
	const liNewTask = tasksList.map((eachTask, index) => {
		return (
			<div className="task" key={index}>
				<div className="">
					{eachTask}
					<button onClick={() => deleteTask(index)}>x</button>
				</div>
			</div>
		);
	});
	//setLiNewTask(newTask);
	//});
	return (
		<div>
			<div>
				<input
					value={task}
					type="text"
					onChange={event => {
						setTask(event.target.value);
					}}
				/>
				<button type="button" onClick={addTask}>
					Add
				</button>
			</div>

			<div className="container2">{liNewTask}</div>
			<TasksCounter tasksLength={tasksList.length} />
		</div>
	);
}
