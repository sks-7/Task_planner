import './App.css';

import { Route, Routes } from 'react-router-dom';

import TaskPage from './pages/TaskPage';
import UserSection from './pages/UserSection';

import SprintPage from './pages/SprintPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/user" element={<UserSection />} />
        <Route path="/sprint" element={<SprintPage />} />
      </Routes>
    </div>
  );
}

export default App;
