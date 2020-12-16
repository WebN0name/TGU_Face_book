import { useState } from 'react';
import './css/main.css'
import Logo from './img/tsu_logo.svg'

function App() {

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  window.addEventListener("orientationchange", function() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    console.log()
}, false);


  return (
    <div className="root" style={{height: window.innerHeight, width: window.innerWidth}}>
      <p>123456</p>
      <img alt = "logo" src={Logo}></img>
      <p>123456</p>
      <p>123456</p>
      <p>123456</p>
      <p>123456</p>
      <p>123456</p>
      <p>123456</p>
      <p>123456</p>
      <p>123456</p>
      <p>123456</p>
    </div>
  );
}

export default App;

