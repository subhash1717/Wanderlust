module.exports = (fn) => {// another way of write
    return (req, res, next) =>{
        fn(req, res, next).catch(next);
    };
};


// function wrapAsync(fn){//tradistional way
//     return function(req, res, next){
//         fn(req, res, next).catch(err =>(next));
//     }
// }

// module.exports = wrapAsync();