import './App.css';
import { ChangeEvent, FormEvent, useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };
    setTodos([newTodo, ...todos]);
    setInputValue("");
  }

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.inputValue = inputValue;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const handlechecked = (id: number, checked:boolean,) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div>
        <h2>Todoリスト</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => handleChange(e)} className='inputText'/>
          <input type="submit" value="作成" className='submitButton'/>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input type="text" onChange={(e) => handleEdit(todo.id, e.target.value)} className='inputText' value={todo.inputValue} disabled={todo.checked}/>

              <input type="checkbox" onChange={() => handlechecked(todo.id, todo.checked)}/>

              <button onClick={() => handleDelete(todo.id)}>削除</button>
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
