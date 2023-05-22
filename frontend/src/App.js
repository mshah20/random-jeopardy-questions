import { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import Homepage from './components/Homepage';

const App = ()  => {

  // const [info, setInfo] = useState();

  // useEffect(() => {
  //   const fetchInfo = async () => {
  //     const { data } = await axios.get('http://localhost:5000/test')
    
  //     console.log("infetchinfo")
  //     console.log(data);
    
  //     setInfo(data);
  //   }

  //   fetchInfo();

  // }, [])


  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
