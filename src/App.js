//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About'; 
import TextForm from './Components/Textform';
import { useState } from 'react';
import Alerts from './Components/Alerts';

// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom"



function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert]= useState(null);

  const showAlert=(message, type) =>{
    setAlert(
      {    
        msg: message,
        type: type
      })
      setTimeout(()=>
      {
        setAlert(null);

      },1500);

  }

  const ToogleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= "dark";
      showAlert("Dark mode enabled", "Success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor= "light";
      showAlert("Light mode enabled", "Success");
    }
  }

  return(
  <>
{/* <Router> */}
    <Navbar title="TextUtils" about="About Developer" mode={mode} togglemode={ToogleMode}/>
    <Alerts alert={alert}/>
  <div className="container mx-9">
  <TextForm heading="Enter the text to Capatalyize" mode={mode} showAlert={showAlert}/>
  {/* <Routes> */}
    {/* <Route path="/about" element={<About />}> */}
    {/* </Route> */}
    {/* <Route exact path="/" element={<TextForm heading="Enter the text to Capatalyize" mode={mode} showAlert={showAlert}/>}>
    </Route> */}
  {/* </Routes> */}
  </div>
{/* </Router> */}
    </>
  );
}

export default App;
