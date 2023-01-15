import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  let [clickCount, setClickCount] = useState(0);

  const clickHandler = () => {
    setClickCount(clickCount + 1);
  };

  const resetCounter = () => {
    setClickCount(0);
  };

  return (
    <div className='App d-flex'>
      <div className='freecodecamp-logo-container d-flex'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt="FreeCodeCamp Logo"
        />
      </div>
      <div className='main-container d-flex'>
        <Counter 
        clickCount={clickCount}
        />
        <Button 
        text='Click'
        isClickBtn={true}
        clickHandler={clickHandler}
        />
        <Button 
        text='Reset'
        isClickBtn={false}
        clickHandler={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
