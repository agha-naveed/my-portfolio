import './App.css'
import { Outlet } from 'react-router';
import contextJS from './extraComponents/context';
import closeContext from './extraComponents/closeContext'
import { useState } from 'react';

export default function App() {
  const [project, setProject] = useState('')
  const [doClose, setDoClose] = useState(false)
  return (
    <div className='h-full w-full cursor-none'>
      <closeContext.Provider value={{doClose, setDoClose}}>
        <contextJS.Provider value={{project, setProject}}>
          <Outlet />
        </contextJS.Provider>
      </closeContext.Provider>
    </div>
  );
}