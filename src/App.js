// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import { useState } from 'react';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleStyle = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode is enabled','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode is enabled','success')
    }
  }
  return (
    <>
    
    <Router>
      <Navbar title="textUtils" mode={mode} toggleStyle={toggleStyle}/>
      <Alert alert={alert}/>
      <div className='container'>
        <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextForm heading="Enter text below" mode={mode} showAlert={showAlert}/>}></Route>
          </Routes>
      </div>
    </Router>
    
    </>
  );
}

export default App;
