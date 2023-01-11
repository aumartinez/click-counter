import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import Button from './components/Button';

function App() {
  const clickHandler = () => {
    console.log('click');
  }

  const resetCounter = () => {
    console.log('reset')
  }

  return (
    <div className='App d-flex'>
      <div className='freecodecamp-logo-container d-flex'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt="FreeCodeCamp Logo"
        />
      </div>
      <div className='main-container'>
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
