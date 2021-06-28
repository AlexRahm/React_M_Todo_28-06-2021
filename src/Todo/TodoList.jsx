import React from 'react';
import TodoItem from './TodoItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
};
function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map((elem, index) => {
                return (
                    <TodoItem
                        elem={elem}
                        key={elem.id}
                        index={index}
                        onToggle={props.onToggle}
                    />
                );
            })}
        </ul>
    );
}

export default TodoList;
