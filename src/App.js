import react, {useEffect, useState} from "react";
import './App.css';
import Form from "./components/Form"
import TodoList from './components/TodoList';
import Todo from "./components/Todo";

function App() {



  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
    getLocalTodos();
    setTodos(JSON.parse(localStorage.getItem("todos")))
  }, [])

  useEffect(() =>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed))
        break;
      case 'todo':
        console.log("herex")

        setFilteredTodos(todos.filter(todo => !todo.completed))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
      console.log("abcdefg")
      setTodos(JSON.parse(localStorage.getItem("todos")))
      console.log("first", JSON.parse(localStorage.getItem("todos")))
    }
  }

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>

      <Form 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText}
        setStatus = {setStatus}
      />

      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
