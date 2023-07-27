import { useState } from "react";

export const CounterApp = () => {
	const [counter, setCounter] = useState({
		counter1: 0,
		counter2: 10,
	});

	const count = () => {
		setCounter({ ...counter, counter1: counter.counter1 + 1 });
	};
	return (
		<>
			<h1>Counter: {counter.counter1} </h1>
			<h1>Counter2: {counter.counter2} </h1>

			<hr></hr>

			<button className="btn" onClick={count}>
				+1
			</button>
		</>
	);
};
