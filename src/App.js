import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProjectBoard from "./components/projectBoard/ProjectBoard";
import TasksBoard from "./components/tasksBoard/TasksBoard";
import MainBoard from './components/mainBoard/MainBoard';

function App() {
  return (
    <div className='app'>
      <MainBoard />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainBoard />} />
          <Route path='projectBoard' element={<ProjectBoard />} />
          <Route path='tasksBoard' element={<TasksBoard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
