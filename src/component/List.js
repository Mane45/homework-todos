function List(props) {
    //console.log(props.todos);
    const removeBtn = (id) => {
        //console.log(id);
        props.removeTask(id)
    }
    return (
        <ol>
            {props.todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={e => removeBtn(todo.id)}>Remove</button>
                    </li>
                )
            })}
        </ol>
    )
}

export default List