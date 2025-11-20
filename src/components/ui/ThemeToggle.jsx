import { ToggleStyle } from './style';

// src/components/ui/ThemeToggle.jsx
const ThemeToggle = ({ isDark, toggleTheme }) => {
    return (
        <ToggleStyle>
            <button type="button" onClick={toggleTheme} className='bg-sB shadow-sB'>
                {isDark ? <img src="icons/sun.svg" alt="" /> : <img src="icons/moon.svg" alt="" />}
                            </button>
        </ToggleStyle>
    );
};

export default ThemeToggle;
