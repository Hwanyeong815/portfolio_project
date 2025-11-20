import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = ({ isDark, toggleTheme }) => {
    return (
        <div className="wrap">
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
