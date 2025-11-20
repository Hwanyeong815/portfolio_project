import React, { useEffect, useState } from 'react';
import { HeaderStyle } from './style';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScrollY = () => {
            if (window.scrollY === 0) {
                setIsScrolled(false); 
                return;
            }

            setIsScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScrollY);
        return () => window.removeEventListener('scroll', handleScrollY);
    }, []);

    const handleScroll = (sectionId) => {
        if (sectionId === 'top') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            return;
        }

        const el = document.getElementById(sectionId);
        if (!el) return;

        el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <HeaderStyle isScrolled={isScrolled}>
            <nav>
                <ul>
                    <li onClick={() => handleScroll('top')}>&lt;Home/&gt;</li>
                    <li onClick={() => handleScroll('skills')}>&lt;Skills/&gt;</li>
                    <li onClick={() => handleScroll('project')}>&lt;Project/&gt;</li>
                    <li onClick={() => handleScroll('about')}>&lt;About/&gt;</li>
                </ul>
            </nav>
            <img src="/icons/moon.svg" alt="" />
        </HeaderStyle>
    );
};

export default Header;
