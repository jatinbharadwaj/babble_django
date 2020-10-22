
import {backendLookup} from '../lookup'

export function apiTweetCreate(newTweet, callback){
    backendLookup("POST", "/babbles/create", callback, {content: newTweet})
  }
  
export function apiTweetList(callback) {
    backendLookup("GET", "/babbles/", callback)
}