import React, { useState } from 'react';
import './styles/index.css';

const App = () => {
	const [count, setCount] = useState(0);
	const [students, setStudents] = useState([
		{ id: 1, name: 'John' },
		{ id: 2, name: 'Mary' },
	]);

	const handleOnClick = () => {
		setCount(count + 1);
	};

	const handleAddUser = () => {
		setStudents([...students, { id: 3, name: 'Doe' }]);
	};
	return (
		<div className='container mx-auto bg-gray-100'>
			<p> You have clicked {count} times </p>
			<button onClick={handleOnClick}>Increment</button>
			<div>
				{students.map(({ id, name }) => (
					<div key={id}>
						<h1>id : {id}</h1>
						<p>name : {name}</p>
					</div>
				))}
			</div>
			<button onClick={handleAddUser}>Add user</button>
		</div>
	);
};

export default App;
