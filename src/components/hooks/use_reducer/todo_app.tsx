import { useReducer } from 'react';
import { AddTask } from './add_task.js';
import { TaskList } from './task_list.js';

export interface Task {
	id: number;
	text: string;
	done: boolean;
}

const initialTasks: Task[] = [
	{ id: 0, text: 'Visit Kafka Museum', done: true },
	{ id: 1, text: 'Watch a puppet show', done: false },
	{ id: 2, text: 'Lennon Wall pic', done: false },
];

function reducer(tasks: Array<Task>, action: {type: string; id?: number; text?: string; task?:any}) {

	switch (action.type) {
		case 'add-task': {
			return [...tasks, {id: action.id, text: action.text, done: false}];
		}
		case 'change-task': {
			return tasks.map((task: Task) => {
				return action.task.id === task.id? action.task: task;
			});
		}
		case 'delete-task': {
			return tasks.filter((task: Task) => task.id !== action.id);
		}
		default: {
			throw Error('Action not valid: ' + action.type);
		}
	}
}

export function TaskApp() {

	const [tasks, dispatch] = useReducer(reducer, initialTasks);
	let currentId = initialTasks.length+1;

	function handleAdd(text: string) {
		dispatch({type: 'add-task', id: currentId+=1, text: text});
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
