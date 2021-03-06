import React, { useEffect } from 'react';
import './App.scss';
import { Footer, Header, Main } from './components';

function App() {
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      console.log(localStorage.getItem('theme'));
      if (localStorage.getItem('theme') == 'dark') {
        setDarkTheme();
      } else {
        setLightTheme();
      }
    }
  });

  function setDarkTheme() {
    let el = document.documentElement.style;

    el.setProperty('--header', 'var(--dark-header)');
    el.setProperty('--main', 'var(--dark-main)');
    el.setProperty('--footer', 'var(--dark-footer)');
    el.setProperty('--text', 'var(--dark-text)');
  }
  function setLightTheme() {
    let el = document.documentElement.style;

    el.setProperty('--header', 'var(--light-header)');
    el.setProperty('--main', 'var(--light-main)');
    el.setProperty('--footer', 'var(--light-footer)');
    el.setProperty('--text', 'var(--light-text)');
  }

  return (
    <div className='wrapper'>
      <Header func={{ setDarkTheme, setLightTheme }} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
