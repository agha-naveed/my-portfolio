import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Cursor from './extraComponents/Cursor';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div className='w-full md:h-full'>
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