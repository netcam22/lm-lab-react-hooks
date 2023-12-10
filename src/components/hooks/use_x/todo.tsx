import {useFetch} from "./use_todo";

interface APICallProps {
    endPoint: string;
}

export const Todo:React.FC<APICallProps> = ({endPoint}) => {
	const todoData = useFetch(endPoint);
	console.log("this data", todoData);
	console.log("fetching", todoData.isFetching);
	console.log("userid", todoData.data?.title);
	return (<>
		<h2>Custom Hook</h2>
		{todoData.isFetching ? 
		<p>Fetching...</p> 
		: <p>{todoData.data?.id}. {todoData.data?.title}; Completed: {String(todoData.data?.completed)}</p>}
	</>)
};
