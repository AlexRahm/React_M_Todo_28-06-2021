import React, { useEffect } from 'react';
import './App.css';
import TodoList from './Todo/TodoList';
import Context from './Todo/context';
import Loader from './Loader';
import Modal from './Modal/Modal';

const AddTodo = React.lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(import('./Todo/AddTodo'));
            }, 3000);
        })
);

function App() {
    const [todos, setTodos] = React.useState([
        // { id: 1, completed: false, title: 'Купить хлеб' },
        // { id: 2, completed: false, title: 'Купить масло' },
        // { id: 3, completed: false, title: 'Купить молоко' },
    ]);

    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then((response) => response.json())
            .then((todos) => {
                setTimeout(() => {
                    setTodos(todos);
                    setLoading(false);
                }, 2000);
            });
    }, []);

    function tooggleTodo(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    function addTodo(title) {
        setTodos(
            todos.concat({
                id: Date.now(),
                completed: false,
                title,
            })
        );
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className='wrapper'>
                React Component &nbsp;
                <Modal />
                <React.Suspense fallback={<p>Loading...</p>}>
                    <AddTodo onCreate={addTodo} />
                </React.Suspense>
                {loading && <Loader />}
                {todos.length ? (
                    <TodoList todos={todos} onToggle={tooggleTodo} />
                ) : loading ? null : (
                    'No todos!'
                )}
            </div>
        </Context.Provider>
    );
}

export default App;