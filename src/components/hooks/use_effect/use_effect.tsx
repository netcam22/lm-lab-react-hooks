import { useState, useEffect } from 'react';
import { TodoResponse } from '../use_x/todo';
interface APICallProps {
    endPoint: string;
}

export const APICall:React.FC<APICallProps> = ({endPoint}) => {

    // Your code here!
    const [todo, setTodo] = useState<TodoResponse | null>(null);
    useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(endPoint);
				if (response.status === 200) {
					const json = await response.json();
					setTodo(json);
				}
			} catch (error) {
                console.log(error);
			}
		};
		fetchData();
	}, [endPoint]);

    return (
        <>
            <h2>useEffect</h2>
            {todo!== null && 
            <p>{todo.id}. {todo.title}, Completed:  {String(todo.completed)}</p>}
        </>
    )
}
