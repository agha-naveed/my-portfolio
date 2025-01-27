import React from 'react';
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectGallery from './components/ProjectGallery';
import Cursor from './extraComponents/Cursor';

export default function Home() {

    return (
        <div className='w-full md:h-full'>
            <Cursor />
            <Header />
            <Skills />
            <Projects />
            <ProjectGallery />
        </div>
    )
}