import React from 'react'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'

export default function Home() {
    return (
        <div className='w-full h-full'>
            <Header />
            <Skills />
            <Projects />

        </div>
    )
}