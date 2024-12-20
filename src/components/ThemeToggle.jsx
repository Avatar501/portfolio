import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ theme, toggleTheme }) => {
    useEffect(() => {
        // Apply theme class to the body element
        document.body.className = theme; // Set class directly on body
    }, [theme]);

    return (
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
    );
};

ThemeToggle.propTypes = {
    theme: PropTypes.oneOf(['light', 'dark']).isRequired,
    toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggle;
