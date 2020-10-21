import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';


function loadTweets(callback){
  const xhr = new XMLHttpRequest() 
  const method ='GET'
  const url ='http://localhost:8000/api/babbles/'
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

function Tweet(props){
  const {tweet} = props
  const className = props.className ? props.className : 'col-10 mx-auto col-md-6'
  return <div className={className}>
        <p>{tweet.id}-{tweet.content}</p>  
        </div>
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
        <div> 
          {tweets.map((item,index)=>{
            return <Tweet tweet={item}  className='my-5 py-5 border bg-white text-dark' key={`${index}-{item.id}`} />
          })}
        </div>
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
