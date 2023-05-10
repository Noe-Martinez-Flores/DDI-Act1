function plusOnePromise (number) {
    console.log('number', number);
    
    let promise = new Promise(function (resolve, reject) {
        if (number >= 7) return reject("Number too big");  

        setTimeout(function () {
            resolve( number + 1 );
        }, 2000);
    })
    return promise;
}

plusOnePromise(5).then( plusOnePromise )
.then( plusOnePromise)
.then( console.log )
.catch( console.log );


