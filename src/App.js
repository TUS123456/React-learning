import './App.css';
import './style.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';

function App() {
  return (
    <div className='todo-container'>
      <Header />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <Button />
    </div>
  );
}

export default App;
