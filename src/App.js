import { useState } from 'react';
import UserForm from './screens/UserForm'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'


function App() {

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)


  window.addEventListener("orientationchange", function () {
    if (window.orientation === 0) {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    } else {
      setWidth(window.innerWidth)
      setHeight(window.innnerWidth)
    }
  }, false);


  return (
    <div className="root" style={{ height: height, width: width }}>
      <div className = "wrapper">
        <Router>
          <Switch>
            <Route path="/" component={UserForm} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

