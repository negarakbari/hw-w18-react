// import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import AddTodo from './components/Add-todo/AddTodo';
import { Worklist } from './components/Work-list/work-list';
import { useState } from 'react';
import './index.css';
import TaskStats from './components/TaskStats/Task-stats';
import FilterStatus from './components/Filter-status/Filter-status';


function App() {

  // Filter-status
  const [filterStatus, setFilterStatus] = useState("all");


  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className="App">

      <Header />
      <main>
        <div className='main__right'>
          <FilterStatus
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />          <TaskStats/>
        </div>
        <div className='main__left'>
          <AddTodo isSubmitting={isSubmitting} setIsSubmitting={setIsSubmitting}  />
          <Worklist isSubmitting={isSubmitting}  filterStatus={filterStatus} />
        </div>


      </main>

    </div>
  );
}

export default App;
