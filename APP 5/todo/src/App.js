import './App.css';

// import Header from './components/Header';
import HeaderFunction from './components/Header';
import Todoitem from './components/TodoItem';
import Button from './components/Button';



// importing a file
import './styles.css';

function App() {
  // return <p>Todo App</p>
  return(
    <div className='todo-container'>

      
      <HeaderFunction title="My Todo" />
      {/* <Todoitem /> */}

      <Todoitem text="Eat" />
      <Todoitem text="play"/>
      <Todoitem completed={true} text="code"/>
      <Todoitem text="debug"/>
      <Todoitem text="sleep"/>
      <Button />
    </div>
  )
}

export default App;

