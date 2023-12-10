import { useState, useMemo, ChangeEvent } from 'react';

export const MemoExample = () => {

	console.log("Rendering component...")

	const [numberInput, setNumberInput] = useState({ value: "" });
	const [submittedInput, setSubmittedInput] = useState({ value: "" });

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNumberInput({value: event.target.value});
	};
	
	const doubleNumber = useMemo(() => 
			slowFunction(submittedInput.value),
		[submittedInput.value]);

	return (
		<>
			<h2>useMemo</h2>
			<form>
			<label>Define a number to double:</label>
				<input type = "text"
				name = "input"
				onChange={handleChange}
				value={numberInput.value}>
				</input>
			</form>
			<button onClick={() => setSubmittedInput({ value: numberInput.value })}>Double {numberInput.value}</button>
			<p className='use-memo__text'>{doubleNumber}</p>
		</>
	);
};

function slowFunction(num: string): string {
	if (num === "") return "";
	const number = parseInt(num);
	if (isNaN(number)) return "Not a number";
	console.log('calling slow function... 🐌');
	for (let i = 0; i <= 1000000000; i++) {
		// ⏰
	}
	const result = number * 2;
	console.log(`result: ${result}`);
	return result.toString();
}
