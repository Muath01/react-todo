import react from "react"


// Import components

import Todo from "./Todo";

const TodoList = ({todos, setTodos, filterTodos}) => {
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
               {

                filterTodos.map(todo => (
                    <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo}/>
                    
                    )
                )
               }
            </ul>
        </div>
    )
}

export default TodoList;

