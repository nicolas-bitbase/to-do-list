import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default function TasksCounter(props) {
	//const [tasksleft, setTasksleft] = useState(1);

	//useEffect(() => {
	//setTasksleft(props.tasksLength);
	//}, [tasksleft]);
	return <div>{props.tasksLength + " item left"}</div>;
}

TasksCounter.propTypes = {
	tasksLength: PropTypes.number
};
//{
//			let tasksleft = document.querySelectorAll("#ul_o li").length;
//			return tasksleft;
//		}
