import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Cursor from './extraComponents/Cursor';
import Footer from './components/Footer';
import closeContext from './extraComponents/closeContext';
import { useContext } from 'react';

export default function Home() {
    const {doClose} = useContext(closeContext)
    return (
        <div className={`w-full h-full ${doClose ? "overflow-y-hidden" : ""}`}>
            <div className="md:block hidden">
                <Cursor />
            </div>
            <Header />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}