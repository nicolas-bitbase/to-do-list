import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function TasksCounter() {
	const [tasksleft, setTasksleft] = useState(1);

	useEffect(() => {
		setTasksleft(document.getElementsByTagName("li").length);
	}, [tasksleft]);
	return <div>{tasksleft + " item left"}</div>;
}

//{
//			let tasksleft = document.querySelectorAll("#ul_o li").length;
//			return tasksleft;
//		}
