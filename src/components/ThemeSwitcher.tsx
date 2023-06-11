import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import styled from "styled-components";

/**
 * ALLOWS USER TO SWITCH BETWEEN LIGHT AND DARK THEME
 */

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme);
    }, [theme]);

    return (
        <Wrapper>
            <button onClick={() => setTheme('light')} className={theme === 'light' ? 'active' : ''}
                aria-label="change theme to light" role="switch">
                <MdOutlineLightMode />
            </button>
            <button onClick={() => setTheme('dark')} className={theme === 'dark' ? 'active' : ''}
                aria-label="change theme to dark" role="switch">
                <MdDarkMode />
            </button>
        </Wrapper>
    );
}

const Wrapper = styled.aside`
position: absolute;
bottom: 5px;
display: flex;
justify-content: center;
align-items: center;
gap: 0.3rem;
width: 100%;
button{
    width: 3rem;
    height: 2rem;
    background: transparent;
    border: transparent;
    border: 1px solid var(--btn-dark);
    padding: 0.5rem 1rem;
    color: var(--clr-grey-4);
    cursor: pointer;
    transition: var(--transition);
    border-radius: 2px;
}
button:hover{
    color: var(--clr-grey-3);
    border: 1px solid var(--btn-light);
}
button.active{
    background-color: var(--clr-grey-1);
    color: var(--clr-primary-3);
}
`;

export default ThemeSwitcher;