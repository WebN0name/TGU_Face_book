import { useState } from 'react';
import './css/main.css'
// import Logo from './img/tsu_logo.svg'
import Login from './components/Login'

function App() {

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  window.addEventListener("orientationchange", function () {
    if (window.orientation === 0) {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    } else {
      setWidth(window.innerWidth)
      setHeight(window.innerWidth)
    }
  }, false);


  return (
    <div className="root" style={{ height: height, width: width }}>
      <Login/>
    </div>
  );
}

export default App;

