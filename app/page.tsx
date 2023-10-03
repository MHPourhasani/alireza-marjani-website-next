'use client';
import useTheme from '@/hooks/useTheme';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import GeneralIntroduction from '../components/GeneralIntroduction/GeneralIntroduction';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Footer from '@/components/Footer/Footer';

export default function Home() {
    const { theme } = useTheme();

    return (
        <main
            className={`flex w-full flex-col items-center justify-center ${
                theme === 'dark' ? 'dark bg-darkBgColor' : 'bg-bgColor'
            }`}
        >
            <GeneralIntroduction />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
