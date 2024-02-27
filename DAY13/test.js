// let p = new Promise((resolve,reject)=>{
//     let a = 2+9
//     if (a === 4) {
//         resolve('success')

//     }else{
//         reject('failed')
//     }
// }
// )

// p.then((message)=>{
//     console.log('result is ' + message)
// }).catch((errorMessage)=> {
//     console.log('result is '+errorMessage)})


// const userleft = false;
// const userWatchingsomethingelse=false;


// function testPromise () {
//     return new Promise ((resolve,reject)=>{
//         if (userleft) {
//             reject({
//                 name:'user left',
//                 message:'...'
//             })
// }
//         else if (userWatchingsomethingelse){
//             reject({
//                 name:'user watching something else',
//                 message:'....'
//             })
//         }else{
//             resolve({
//                 message:'user has liked and subcribed'
//             }
//                 )

//         }

//     })
// }

// testPromise().then((sucess)=>{
//     console.log(sucess.message);
// }).catch((error)=>{
//     console.log(error.name+error.message)
// })

function makeRequest(location){
    return new Promise ((resolve,reject)=>{
        console.log('making  request to :'+ location );
        if(location ===  'google'){
            resolve('google says hi')
        }else{
            reject ('cannot make a request to that location');
        }
    }
    )
}

