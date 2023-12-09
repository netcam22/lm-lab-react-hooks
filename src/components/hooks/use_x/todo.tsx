import { useEffect, useState } from 'react';
import { isError } from '../../../helpers/is_error';

/** This is the response that TypiCode gives for the /todos/ endpoint */
export interface TodoResponse {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export const Todo = () => {
	const [data, setData] = useState<TodoResponse>();
	const [isFetching, setIsFetching] = useState(true);

	const url = 'https://jsonplaceholder.typicode.com/todos/1';

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				setIsFetching(false);
				if (response.status === 200) {
					const json = await response.json();
					setData(json);
				}
			} catch (e: unknown) {
				setIsFetching(false);

				console.log(isError(e) ? e.message : 'Unknown error!');
			}
		};
		fetchData();
	}, [url]);

	return (
		<>
			<h2>Custom Hook</h2>

			{isFetching ? <p>Fetching...</p> : <p>{data?.title}</p>}
		</>
	);
};
