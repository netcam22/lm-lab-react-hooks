import { useReducer } from 'react';
import { AddTask } from './add_task.js';
import { TaskList } from './task_list.js';

export interface Task {
	id: number;
	text: string;
	done: boolean;
}

const initialTasks = [
	{ id: 0, text: 'Visit Kafka Museum', done: true },
	{ id: 1, text: 'Watch a puppet show', done: false },
	{ id: 2, text: 'Lennon Wall pic', done: false },
];

type Add = {
	type: "add-task";
	id: number;
	text: string;
}

type Change = {
	type: "change-task";
	task: Task;
}

type Delete = {
	type: "delete-task";
	id: number;
}

type Action = Add | Change | Delete;

function reducer(tasks: Array<Task>, action: Action): Array<Task> {

	switch (action.type) {
		case 'add-task': {
			return [...tasks, {id: action.id, text: action.text, done: false}];
		}
		case 'change-task': {
			return tasks.map((task: Task) => action.task.id === task.id? action.task: task);
		}
		case 'delete-task': {
			return tasks.filter((task: Task) => task.id !== action.id);
		}
		default: {
			throw Error('Action not valid');
		}
	}
}	

export function TaskApp() {

	const [tasks, dispatch] = useReducer(reducer, initialTasks);

	function handleAdd(text: string) {
		dispatch({type: 'add-task', id: tasks.length+1, text: text});
	}

	function handleChange(task: Task) {
		dispatch({type: 'change-task', task: task});
	}

	function handleDelete(taskId: number) {
		dispatch({type: 'delete-task', id: taskId});
	}
	
	return (
	<>
		<h2>Use Reducer</h2>
		<h3>Prague itinerary</h3>
		<AddTask onAddTask={handleAdd} />
		<TaskList tasks={tasks} onChangeTask={handleChange} onDeleteTask={handleDelete}/>
	</>
	);
}
