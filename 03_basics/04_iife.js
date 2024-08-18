// imediately invoked function expression (IIFE) //

(function chai (){
    console.log(`DB CONNECTED`)  // name iife 
})();

(function aurCode (){
    console.log(`DB CONNECTED TWO `)
})();

((name) => {
    console.log(`DB CONNECTED THIRD ${name}`)
})("alis")
