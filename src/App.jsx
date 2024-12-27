import React from 'react'
import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router';

export default function App() {
  return (
    <div className='h-screen w-full'>
      <Outlet />
    </div>
  );
}