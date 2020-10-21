import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';


function loadTweets(callback){
  const xhr = new XMLHttpRequest() 
  const method ='GET'
  const url ='http://127.0.0.1:8000/api/babbles'
  const responseType ='json'
  xhr.responseType = responseType
  xhr.open(method,url)
  // xhr.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest")
  // xhr.setRequestHeader("X-REQUESTED-WITH","XMLHttpRequest")
  xhr.onload = function(){
    callback(xhr.response,xhr.status)
  }
  xhr.onerror = (e)=>{
    console.log(e)
    callback({"message":"Error Request"},400)
  }
xhr.send()
}

function App() {
  const[tweets,setTweets] = useState([])

  useEffect(()=>{
    // lookups
    const myCallback = (response, status)=>{
      console.log(response,status)
      if(status === 200){
        setTweets(response)
      }else{
        alert("An Error Occured!")
      }

    }
    loadTweets(myCallback)

  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> 
          {tweets.map((tweet,index)=>{
            return <li>{tweet.content}</li>
          })}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
