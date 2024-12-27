import React from 'react'
import './App.css'
import Header from './Header';
import Snowfall from './Snowfall';

export default function App() {
  return (
    <div className='h-screen w-full bg-slate-900'>
      <Snowfall />
      {/* <Header /> */}
    </div>
  );
}