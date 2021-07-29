// process  - info about env where the program is being executed

// __dirname  - path to current directory


// console.log(__dirname)
// setInterval(() => {
//     console.log("hamza")
// },10)




// modules  
// OS
// PATH
// FS
// HTTP

// <--------------OS ---------->
// check it on file 8-osModule.js

// <----------PATH ------------>
// check it on 9-pathModule.js
 
// <--------File System ----------->
// check it on 10-fs-sync.js
// check it on 11-fs-async.js


// <----------- HTTP ------------->
// check file on 12-http.js


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flatMapDeep(items)
console.log(newItems)