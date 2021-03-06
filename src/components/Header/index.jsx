import React, { useState } from 'react';

import './Header.scss';
export default function Header(props) {
  const [theme, setTheme] = useState(localStorage?.getItem('theme') || 'dark');
  const { setLightTheme, setDarkTheme } = props.func;
  function onCheck(e) {
    if (e.target.checked) {
      setTheme('dark');
      setDarkTheme();
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      setLightTheme();
      localStorage.setItem('theme', 'light');
    }
  }
  return (
    <header>
      <div className='container row'>
        <span className='logo'>React Switch Theme</span>
        <div className='block-theme'>
          <input id='theme' checked={theme === 'dark'} onChange={onCheck} type='checkbox' />
          <label
            className={theme === 'dark' ? 'theme-switch icon-moon' : 'theme-switch icon-sun'}
            htmlFor='theme'></label>
        </div>
      </div>
    </header>
  );
}
