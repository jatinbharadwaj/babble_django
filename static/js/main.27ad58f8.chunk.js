(this["webpackJsonpbabble-react"]=this["webpackJsonpbabble-react"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),o=(a(15),a(7)),s=a.n(o);a(16);function i(e,t,a,n){var c;n&&(c=JSON.stringify(n));var r=new XMLHttpRequest,l="http://localhost:8000/api".concat(t);r.responseType="json";var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var c=a[n].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");r.open(e,l),r.setRequestHeader("Content-Type","application/json"),o&&(r.setRequestHeader("X-REQUESTED-WITH","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",o)),r.onload=function(){403===r.status&&("Authentication credentials were not provided."===r.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));a(r.response,r.status)},r.onerror=function(e){console.log(e),a({message:"The request was an error from component.js/lookup"},400)},r.send(c)}function u(e,t){var a="/babbles/feed/";null!==t&&void 0!==t&&(a=t.replace("http://localhost:8000/api","")),i("GET",a,e)}function m(e,t,a){var n="/babbles/";e&&(n="/babbles/?username=".concat(e)),null!==a&&void 0!==a&&(n=a.replace("http://localhost:8000/api","")),i("GET",n,t)}function f(e){var t=e.tweet,a=e.action,n=e.didPerformAction,r=t.likes?t.likes:0,l=e.className?e.className:"btn btn-primary btn-sm",o=a.display?a.display:"Action",s=function(e,t){console.log(e,t),200!==t&&201!==t||!n||n(e,t)},u="like"===a.type?"".concat(r," ").concat(o):o;return c.a.createElement("button",{className:l,onClick:function(e){e.preventDefault(),function(e,t,a){i("POST","/babbles/action",a,{id:e,action:t})}(t.id,a.type,s)}},u)}var d=a(2),b=a(1),p=a(9);function w(e){var t=e.username;return c.a.createElement("span",{className:"pointer",onClick:function(e){window.location.href="/profiles/".concat(t)}},e.children)}function E(e){var t=e.user,a=e.includeFullName,n=e.hideLink,r=!0===a?"".concat(t.first_name," ").concat(t.last_name," "):null;return c.a.createElement(c.a.Fragment,null,r,!0===n?"@".concat(t.username):c.a.createElement(w,{username:t.username},"@",t.username))}function v(e){var t=e.user,a=e.hideLink,n=c.a.createElement("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white"},t.username[0]);return!0===a?n:c.a.createElement(w,{username:t.username},n)}var h=a(8),g=a.n(h);function j(e){return c.a.createElement("span",{className:e.className},g()(e.children).format("0a"))}function O(e){var t=e.user,a=e.didFollowToggle,n=e.profileLoading,r=t&&t.is_following?"Unfollow":"Follow";r=n?"Loading...":r;return t?c.a.createElement("div",null,c.a.createElement(v,{user:t,hideLink:!0}),c.a.createElement("p",null,c.a.createElement(E,{user:t,includeFullName:!0,hideLink:!0})),c.a.createElement("p",null,c.a.createElement(j,null,t.follower_count)," ",1===t.follower_count?"follower":"followers"," "),c.a.createElement("p",null,c.a.createElement(j,null,t.following_count)," following"),c.a.createElement("p",null,t.location),c.a.createElement("p",null,t.bio),c.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),a&&!n&&a(r)}},r)):null}function N(e){var t=e.username,a=Object(n.useState)(!1),r=Object(b.a)(a,2),l=r[0],o=r[1],s=Object(n.useState)(null),u=Object(b.a)(s,2),m=u[0],f=u[1],d=Object(n.useState)(!1),p=Object(b.a)(d,2),w=p[0],E=p[1],v=function(e,t){200===t&&f(e)};Object(n.useEffect)((function(){!1===l&&(!function(e,t){i("GET","/profiles/".concat(e,"/"),t)}(t,v),o(!0))}),[t,l,o]);return!1===l?"Loading...":m?c.a.createElement(O,{user:m,didFollowToggle:function(e){!function(e,t,a){var n={action:"".concat(t&&t).toLowerCase()};i("POST","/profiles/".concat(e,"/follow"),a,n)}(t,e,(function(e,t){200===t&&f(e),E(!1)})),E(!0)},profileLoading:w}):null}function y(e){var t=e.tweet;return t.parent?c.a.createElement(k,{isRetweet:!0,retweeter:e.retweeter,hideActions:!0,className:" ",tweet:t.parent}):null}function k(e){var t=e.tweet,a=e.didRetweet,r=e.hideActions,l=e.isRetweet,o=e.retweeter,s=Object(n.useState)(e.tweet?e.tweet:null),i=Object(b.a)(s,2),u=i[0],m=i[1],d=e.className?e.className:"col-10 mx-auto col-md-6";d=!0===l?"".concat(d," p-2 border rounded"):d;var w=window.location.pathname.match(Object(p.a)(/([0-9]+)/,{tweetid:1})),h=w?w.groups.tweetid:-1,g="".concat(t.id)==="".concat(h),j=function(e,t){200===t?m(e):201===t&&a&&a(e)};return c.a.createElement("div",{className:d},!0===l&&c.a.createElement("div",{className:"mb-2"},c.a.createElement("span",{className:"small text-muted"},"Retweet via ",c.a.createElement(E,{user:o}))),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:""},c.a.createElement(v,{user:t.user})),c.a.createElement("div",{className:"col-11"},c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement(E,{includeFullName:!0,user:t.user})),c.a.createElement("p",null,t.content),c.a.createElement(y,{tweet:t,retweeter:t.user})),c.a.createElement("div",{className:"btn btn-group px-0"},u&&!0!==r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{tweet:u,didPerformAction:j,action:{type:"like",display:"Likes"}}),c.a.createElement(f,{tweet:u,didPerformAction:j,action:{type:"unlike",display:"Unlike"}}),c.a.createElement(f,{tweet:u,didPerformAction:j,action:{type:"retweet",display:"Retweet"}})),!0===g?null:c.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))))}function T(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)([]),s=Object(b.a)(o,2),i=s[0],m=s[1],f=Object(n.useState)(null),p=Object(b.a)(f,2),w=p[0],E=p[1],v=Object(n.useState)(!1),h=Object(b.a)(v,2),g=h[0],j=h[1];Object(n.useEffect)((function(){var t=Object(d.a)(e.newTweets).concat(r);t.length!==i.length&&m(t)}),[e.newTweets,i,r]),Object(n.useEffect)((function(){if(!1===g){u((function(e,t){200===t&&(E(e.next),l(e.results),j(!0))}))}}),[r,g,j,e.username]);var O=function(e){var t=Object(d.a)(r);t.unshift(e),l(t);var a=Object(d.a)(i);a.unshift(i),m(a)};return c.a.createElement(c.a.Fragment,null,i.map((function(e,t){return c.a.createElement(k,{tweet:e,didRetweet:O,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==w&&c.a.createElement("button",{onClick:function(e){if(e.preventDefault(),null!==w){u((function(e,t){if(200===t){E(e.next);var a=Object(d.a)(i).concat(e.results);l(a),m(a)}}),w)}},className:"btn btn-outline-primary"},"Load next"))}function S(e){var t=c.a.createRef(),a=e.didTweet,n=function(e,t){201===t?a(e):(console.log(e),alert("An error occured please try again"))};return c.a.createElement("div",{className:e.className},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=t.current.value;i("POST","/babbles/create",n,{content:a}),t.current.value=""}},c.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet")))}function x(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)([]),s=Object(b.a)(o,2),i=s[0],u=s[1],f=Object(n.useState)(null),p=Object(b.a)(f,2),w=p[0],E=p[1],v=Object(n.useState)(!1),h=Object(b.a)(v,2),g=h[0],j=h[1];Object(n.useEffect)((function(){var t=Object(d.a)(e.newTweets).concat(r);t.length!==i.length&&u(t)}),[e.newTweets,i,r]),Object(n.useEffect)((function(){if(!1===g){m(e.username,(function(e,t){200===t?(E(e.next),l(e.results),j(!0)):alert("There was an error")}))}}),[r,g,j,e.username]);var O=function(e){var t=Object(d.a)(r);t.unshift(e),l(t);var a=Object(d.a)(i);a.unshift(i),u(a)};return c.a.createElement(c.a.Fragment,null,i.map((function(e,t){return c.a.createElement(k,{tweet:e,didRetweet:O,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==w&&c.a.createElement("button",{onClick:function(t){if(t.preventDefault(),null!==w){m(e.username,(function(e,t){if(200===t){E(e.next);var a=Object(d.a)(i).concat(e.results);l(a),u(a)}else alert("There was an error")}),w)}},className:"btn btn-outline-primary"},"Load next"))}function R(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),r=a[0],l=a[1],o="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===o&&c.a.createElement(S,{didTweet:function(e){var t=Object(d.a)(r);t.unshift(e),l(t)},className:"col-12 mb-3"}),c.a.createElement(x,Object.assign({newTweets:r},e)))}function A(e){var t=e.tweetId,a=Object(n.useState)(!1),r=Object(b.a)(a,2),l=r[0],o=r[1],s=Object(n.useState)(null),u=Object(b.a)(s,2),m=u[0],f=u[1],d=function(e,t){200===t?f(e):alert("There was an error finding your tweet.")};return Object(n.useEffect)((function(){!1===l&&(!function(e,t){i("GET","/babbles/".concat(e),t)}(t,d),o(!0))}),[t,l,o]),null===m?null:c.a.createElement(k,{tweet:m,className:e.className})}var L=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Edit ",c.a.createElement("code",null,"src/App.js")," and save to reload."),c.a.createElement("div",null,c.a.createElement(R,null)),c.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=document.getElementById("root");F&&l.a.render(c.a.createElement(L,null),F);var q=c.a.createElement,C=document.getElementById("babble");C&&l.a.render(q(R,C.dataset),C);var D=document.getElementById("babble-feed");D&&l.a.render(q((function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),r=a[0],l=a[1],o="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===o&&c.a.createElement(S,{didTweet:function(e){var t=Object(d.a)(r);t.unshift(e),l(t)},className:"col-12 mb-3"}),c.a.createElement(T,Object.assign({newTweets:r},e)))}),D.dataset),D),document.querySelectorAll(".Babble-detail").forEach((function(e){l.a.render(q(A,e.dataset),e)})),document.querySelectorAll(".babble-profile-badge").forEach((function(e){l.a.render(q(N,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.27ad58f8.chunk.js.map