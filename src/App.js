// import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import AddTodo from './components/Add-todo/AddTodo';
import { Worklist } from './components/Work-list/work-list';
import { useState } from 'react';
import TaskStats from './components/TaskStats/TaskStats';


function App() {

  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className="App">

      <Header />
      <main>
        <div className='main__right'>
          <TaskStats/>
        </div>
        <div className='main__left'>
          <AddTodo isSubmitting={isSubmitting} setIsSubmitting={setIsSubmitting}/>
          <Worklist isSubmitting={isSubmitting} />
        </div>


      </main>

    </div>
  );
}

export default App;
