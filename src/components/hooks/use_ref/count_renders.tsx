import { useState, useRef, ChangeEvent } from 'react';

export const CountRenders = () => {
	const [value, setValue] = useState("");
	const count = useRef(0);

	const handleChange = (event: ChangeEvent<HTMLInputElement>)=> {
		setValue(event.target.value);
		count.current = count.current + 1;
	}

	const resetCount = ()=> {
		setValue("");
		count.current = 0;
	}

	const renderCount = count.current;
	return (
		<>
			<h2>useRef</h2>

			<input
				value={value}
				type='text'
				onChange={handleChange}
			/>

			<p>{value}</p>
			<p>I have rendered {renderCount} times</p>
			<button onClick={resetCount}>Reset count</button>
		</>
	);
};
