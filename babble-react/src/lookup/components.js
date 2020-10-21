export function loadTweets(callback){
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