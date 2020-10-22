
import {backendLookup} from '../lookup'

export function apiTweetCreate(newTweet, callback){
    backendLookup("POST", "/babbles/create", callback, {content: newTweet})
  }
  
export function apiTweetAction(tweetId, action, callback){
  const data = {id: tweetId, action: action}
  backendLookup("POST", "/babbles/action", callback, data)
}
export function apiTweetDetial(tweetId, callback) {
    backendLookup("GET", `/babbles/${tweetId}/`, callback)
}

export function apiTweetList(username, callback) {
  let endpoint =  "/babbles/"
  if (username){
      endpoint =  `/babbles/?username=${username}`
  }
  backendLookup("GET", endpoint, callback)
}