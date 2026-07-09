import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import AddTodo from './components/Add-todo/AddTodo';

function App() {
  return (
    <div className="App">

      <Header />
      <main>
        <div className='main__right'>

        </div>
        <div className='main__left'>
          <AddTodo />
        </div>



      </main>

    </div>
  );
}

export default App;
