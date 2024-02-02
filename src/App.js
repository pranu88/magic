import logo from './logo.svg';
import './App.css';
import responses from './models/responses';
import { useEffect, useState} from 'react';
import TryAgain from './components/TryAgain';
import Reply from './components/Reply';
function App() {
  // useState Hook
  const [reply, setReply] = useState(null)
  const [counter,setCounter] = useState(0)
// useEffect Hook
useEffect(()=>{
let rand = Math.round(Math.random()*responses.length)
setReply(responses[rand])
},[counter])


  return (
    <div className="App">
      <h1>Ask Whatever You Like </h1>
      <Reply response={reply}/>
      <TryAgain counter={counter} setCounter={setCounter}/>
    </div>
  );
}

export default App;
