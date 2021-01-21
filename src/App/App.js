import React from "react";
import Projects from './Projects'
import TaskLists from './Tasklists'
import Tasks from './Tasks'

class App extends React.Component {
    headers = {
        headers: {
            "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
        }
    };

    constructor(props) {
        super(props)

        this.state = {
            projects: [],
            taskLists: [],
            tasks: []
        }
    }

    async componentDidMount() {
        const projectsResponse = await fetch('https://app.paymoapp.com/api/projects', this.headers)
        const projects = (await projectsResponse.json()).projects
        this.setState({projects})

        const taskListsResponse = await fetch('https://app.paymoapp.com/api/tasklists', this.headers)
        const taskLists = (await taskListsResponse.json()).tasklists
        this.setState({taskLists})

        const tasksResponse = await fetch('https://app.paymoapp.com/api/tasks', this.headers)
        const tasks = (await tasksResponse.json()).tasks
        this.setState({tasks})
    }

    render() {
        return ([
            <Projects projects={this.state.projects}/>,
            <TaskLists tasklists={this.state.taskLists}/>,
            <Tasks tasks={this.state.tasks}/>
        ]);
    }
}

export default App;
