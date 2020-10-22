
import {backendLookup} from '../lookup'

export function apiTweetCreate(newTweet, callback){
    backendLookup("POST", "/babbles/create", callback, {content: newTweet})
  }
  
  export function apiTweetAction(tweetId, action, callback){
    const data = {id: tweetId, action: action}
    backendLookup("POST", "/babbles/action", callback, data)
  }
export function apiTweetList(callback) {
    backendLookup("GET", "/babbles/", callback)
}