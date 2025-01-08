import React from 'react'
import './App.css'
import { Outlet } from 'react-router';

export default function App() {
  return (
    <div className='h-screen w-full'>
      <Outlet />
    </div>
  );
}