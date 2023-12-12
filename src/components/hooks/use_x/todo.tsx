import {useFetch} from "./use_fetch";

interface APICallProps {
    endPoint: string;
}

export interface TodoResponse {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export const Todo:React.FC<APICallProps> = ({endPoint}) => {

	const todoData = useFetch<TodoResponse>(endPoint);
	
	return (<>
		<h2>Custom Hook</h2>
		{todoData.isFetching ? 
		<p>Fetching...</p> 
		: <p>{todoData.data?.id}. {todoData.data?.title}; Completed: {String(todoData.data?.completed)}</p>}
	</>)
};
