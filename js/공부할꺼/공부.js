const condition = true;
const promise = new Promise((resolve, reject) => { 
    if (condition) { console.log('1'); resolve('성공'); 
    } 
    else { reject('실패'); 
    } }); 
    console.log('2');
    promise.then((message) => { 
        return new Promise((resolve, reject) => 
        { resolve(message); 
        }); 
    })
    .then((message2) => { 
        console.log(message2); 
        return new Promise((resolve, reject) => 
        { resolve(message2); }); })
        .then((message3) => 
        { console.log(message3); })
        .catch((err) => 
        { console.log('error : ', err); 
    }); 
    console.log('3');