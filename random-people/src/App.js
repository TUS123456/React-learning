import './App.css';
import Apicall from './Components/Apicall';
import {useEffect, useState} from 'react';
import Cardprint from './Components/Cardprint';

function App() {

  const [userdata,setuserdata]=useState(null);



  useEffect(()=>{
    Apicall().then((data) => {
      setuserdata(data.results[0]);
    
    }).catch((err) => {
      console.log(err);});
    },[]);
    
    const handleRefresh=()=>{
      Apicall().then((data) => {
        setuserdata(data.results[0]);
      
      }).catch((err) => {
        console.log(err);});
      }


  return (
    <div className="App">
      <div className='Card'>
      {
        userdata ? <>
          <Cardprint data={userdata} />
        </> : <p> Data Not Receive </p>
      }
      </div>
      <button className='click-btn' onClick={handleRefresh} >New Person</button>
    </div>
  );
};


export default App;
