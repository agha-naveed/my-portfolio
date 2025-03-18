import './App.css'
import { Outlet } from 'react-router';
import contextJS from './extraComponents/context';
import { useState } from 'react';

export default function App() {
  const [project, setProject] = useState('')
  return (
    <div className='h-screen w-full cursor-none'>
      <contextJS.Provider value={{project, setProject}}>
        <Outlet />
      </contextJS.Provider>
    </div>
  );
}