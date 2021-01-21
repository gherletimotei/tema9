import React from "react";

export default class TaskLists extends React.Component {
	render() {
	  const taskLists = this.props.tasklists.map( taskList => {
		return <div key={taskList.id}>{taskList.name}</div>
	  })
	  return <div>{taskLists}</div>
	}
}
