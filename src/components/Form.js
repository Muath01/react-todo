import React from 'react';



const Form = ({setInputText,inputText, todos, setTodos, setStatus}) =>{

    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    }

    
    const submitTodohandler = (e) =>{
        console.log("here")
        e.preventDefault();
        setTodos([
            ...todos, 
            {text:inputText,
                completed:false,
                id:Math.random()*1000
            }
        ]);
        
        setInputText("");
        e.target.value = "";
        
    }
    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }
    
    return(
    <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodohandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={(statusHandler)} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="todo">ToDo</option>
            </select>
        </div>
    </form> 
);
};

export default Form
