import react, {useState} from "react";
import './App.css';
import Form from "./components/Form"
import TodoList from './components/TodoList';
import Todo from "./components/Todo";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

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
      />

      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
