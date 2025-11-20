// src/pages/Home.jsx
import About from '../about';
import Visual from '../visual';
import Skills from '../skills';
import Project from '../project';
import ThemeToggle from '../../components/ui/ThemeToggle';

const Home = ({ isDark, toggleTheme }) => {
    return (
        <div>
            <div>
                <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            </div>

            <div id="home-visual">
                <Visual />
            </div>

            <div id="skills">
                <Skills />
            </div>

            <div id="project">
                <Project />
            </div>

            <div id="about">
                <About />
            </div>
        </div>
    );
};

export default Home;
