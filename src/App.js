import react, {useState} from "react";
import './App.css';
import Form from "./components/Form"
import TodoList from './components/TodoList';
import Todo from "./components/Todo";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilteredTodos] = useState([]);

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed))
        break;
      case 'uncompleted':
        filterTodos(todos.filter(todo => !todo.completed))
        break;
      default:
        setFilteredTodos(todos);
        break;
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

      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
