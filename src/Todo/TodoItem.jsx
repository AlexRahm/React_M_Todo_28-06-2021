import React from 'react';
import Context from '../Todo/context';
import { useContext } from 'react';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
    input: {
        marginRight: '1rem',
    },
};
function TodoItem(props) {
    console.log('todo', props.elem);
    const { removeTodo } = useContext(Context);
    const classes = [];
    if (props.elem.completed) {
        classes.push('done');
    }
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={props.elem.completed}
                    style={styles.input}
                    onChange={() => props.onToggle(props.elem.id)}
                />
                <strong>{props.index + 1}</strong>
                &nbsp;
                {props.elem.title}
            </span>
            <button onClick={removeTodo.bind(null, props.elem.id)}>
                &times;
            </button>
        </li>
    );
}

export default TodoItem;
