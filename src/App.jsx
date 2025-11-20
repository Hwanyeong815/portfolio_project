// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/theme';
import { About, Project, Skills } from './pages';
import Home from './pages/Home';
import Layout from './common/Layout';

const App = () => {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme-dark');
        if (saved !== null) return JSON.parse(saved);

        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const toggleTheme = () => setIsDark((prev) => !prev);

    // 저장
    useEffect(() => {
        localStorage.setItem('theme-dark', JSON.stringify(isDark));
    }, [isDark]);

    // 시스템 테마 변경 감지
    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = () => {
            const saved = localStorage.getItem('theme-dark');
            if (saved === null) setIsDark(media.matches);
        };

        media.addEventListener('change', onChange);
        return () => media.removeEventListener('change', onChange);
    }, []);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyle />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout isDark={isDark} toggleTheme={toggleTheme} />}>
                        <Route index element={<Home isDark={isDark} toggleTheme={toggleTheme} />} />
                        <Route path="about" element={<About />} />
                        <Route path="skills" element={<Skills />} />
                        <Route path="project" element={<Project />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
