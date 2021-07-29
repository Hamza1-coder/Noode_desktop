const Fs = require('fs')
Fs.readFile('./content/first.txt','utf8',(err, result) => {
    if(err){
        console.log(err) 
        return
    }
    const first = result;
    Fs.readFile('./content/second.txt','utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        Fs.writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err,result) => {
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
            }
            )
    })


})