chrome.webRequest.onBeforeRequest.addListener(details => {
 if (details.method !== 'GET') return
 
 const url = new URL(details.url)
 
 url.hostname = 'en.m.wikipedia.org'
 console.log(url)
 
 return {
   redirectUrl: url.href  
 }
}, {
  urls: ['https://en.wikipedia.org/*'],
  types: ['main_frame'],
}, ['blocking'])
