import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
	return (
		<Provider store={store}>
			<div className="App">
				<AddTodo />
				<Filter />
				<TodoList />
			</div>
		</Provider>
	);
}

export default App;
